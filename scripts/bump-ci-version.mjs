import fs from 'node:fs';
import path from 'node:path';

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

function bumpPatch(version) {
  const [major, minor, patch] = version.split('.').map(Number);

  if ([major, minor, patch].some((value) => Number.isNaN(value))) {
    throw new Error(`Unsupported version format: ${version}`);
  }

  return `${major}.${minor}.${patch + 1}`;
}

const rootPackage = readJson(rootPackagePath);
const nextVersion = bumpPatch(rootPackage.version);

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
