import { spawn } from 'child_process';
import chokidar from 'chokidar';

let currentProcess: any = null;

function startServer() {
  if (currentProcess) {
    currentProcess.kill();
  }
  console.log('Starting server...');
  currentProcess = spawn('bun', ['run', 'src/index.ts'], { stdio: 'inherit' });
}

chokidar.watch('src/**/*.ts').on('all', (event, path) => {
  console.log(`${event} detected on ${path}`);
  startServer();
});

startServer();