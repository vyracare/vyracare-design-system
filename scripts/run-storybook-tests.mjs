import { spawn } from 'node:child_process';
import path from 'node:path';

const rootDir = process.cwd();
const port = 6006;
const storybookUrl = `http://127.0.0.1:${port}`;
const isWindows = process.platform === 'win32';
const httpServerBin = path.join(rootDir, 'node_modules', '.bin', isWindows ? 'http-server.cmd' : 'http-server');
const testRunnerBin = path.join(rootDir, 'node_modules', '.bin', isWindows ? 'test-storybook.cmd' : 'test-storybook');

function spawnProcess(command, args, options = {}) {
  const commandToRun = isWindows ? 'cmd.exe' : command;
  const commandArgs = isWindows ? ['/c', command, ...args] : args;

  return spawn(commandToRun, commandArgs, {
    cwd: rootDir,
    stdio: 'inherit',
    shell: false,
    ...options
  });
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for Storybook at ${url}`);
}

async function isServerAvailable(url) {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch {
    return false;
  }
}

async function stopProcessTree(pid) {
  if (!pid) {
    return;
  }

  if (isWindows) {
    await new Promise((resolve) => {
      const killer = spawn('taskkill.exe', ['/PID', String(pid), '/T', '/F'], {
        stdio: 'ignore'
      });
      killer.on('exit', () => resolve());
      killer.on('error', () => resolve());
    });
    return;
  }

  try {
    process.kill(pid, 'SIGTERM');
  } catch {}
}

async function main() {
  let server = null;
  const serverAlreadyRunning = await isServerAvailable(storybookUrl);

  if (!serverAlreadyRunning) {
    server = spawnProcess(httpServerBin, ['dist/storybook', '-p', String(port), '-c-1', '--silent']);
  }

  const shutdown = async () => {
    if (server?.pid) {
      await stopProcessTree(server.pid);
    }
  };

  process.on('exit', () => {
    void shutdown();
  });
  process.on('SIGINT', () => {
    void shutdown();
    process.exit(130);
  });
  process.on('SIGTERM', () => {
    void shutdown();
    process.exit(143);
  });

  try {
    if (!serverAlreadyRunning) {
      await waitForServer(storybookUrl);
    }

    const testRunner = spawnProcess(testRunnerBin, [
      '--config-dir',
      'libs/vyracare-ui/.storybook',
      '--url',
      storybookUrl,
      '--maxWorkers=2'
    ]);

    const exitCode = await new Promise((resolve, reject) => {
      testRunner.on('error', reject);
      testRunner.on('exit', resolve);
    });

    if (exitCode !== 0) {
      process.exit(exitCode ?? 1);
    }
  } finally {
    await shutdown();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
