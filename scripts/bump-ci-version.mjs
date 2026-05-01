import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = process.cwd();
const rootPackagePath = path.join(rootDir, 'package.json');
const libPackagePath = path.join(rootDir, 'libs', 'vyracare-ui', 'package.json');
const lockfilePath = path.join(rootDir, 'package-lock.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

function parseVersion(version) {
  const [major, minor, patch] = version.split('.').map(Number);

  if ([major, minor, patch].some((value) => Number.isNaN(value))) {
    throw new Error(`Unsupported version format: ${version}`);
  }

  return { major, minor, patch };
}

function bumpVersion(version, commitMessage) {
  const { major, minor, patch } = parseVersion(version);
  const normalizedMessage = commitMessage.trim().toLowerCase();

  if (normalizedMessage.startsWith('chore')) {
    return `${major + 1}.0.0`;
  }

  if (normalizedMessage.startsWith('feat')) {
    return `${major}.${minor + 1}.0`;
  }

  if (normalizedMessage.startsWith('fix')) {
    return `${major}.${minor}.${patch + 1}`;
  }

  throw new Error(
    `Unsupported commit type for automatic version bump: "${commitMessage}". Use chore, feat or fix.`,
  );
}

function resolveCommitMessage() {
  if (process.env.COMMIT_MESSAGE?.trim()) {
    return process.env.COMMIT_MESSAGE.trim();
  }

  return execSync('git log -1 --pretty=%s', {
    cwd: rootDir,
    encoding: 'utf8',
  }).trim();
}

const rootPackage = readJson(rootPackagePath);
const commitMessage = resolveCommitMessage();
const nextVersion = bumpVersion(rootPackage.version, commitMessage);

rootPackage.version = nextVersion;
writeJson(rootPackagePath, rootPackage);

const libPackage = readJson(libPackagePath);
libPackage.version = nextVersion;
writeJson(libPackagePath, libPackage);

const lockfile = readJson(lockfilePath);
lockfile.version = nextVersion;

if (lockfile.packages?.['']) {
  lockfile.packages[''].version = nextVersion;
}

writeJson(lockfilePath, lockfile);

console.log(nextVersion);
