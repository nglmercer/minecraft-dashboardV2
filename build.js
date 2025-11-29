#!/usr/bin/env bun

// Script simple de build multiplataforma con bun --compile
import { execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';

const platforms = [
  { target: 'bun-windows-x64', ext: '.exe' },
  { target: 'bun-linux-x64', ext: '' },
  { target: 'bun-darwin-x64', ext: '' },
  { target: 'bun-darwin-arm64', ext: '' }
];

// Limpiar y crear directorio de salida
if (existsSync('./binaries')) {
  execSync('rm -rf ./binaries', { stdio: 'inherit' });
}
mkdirSync('./binaries', { recursive: true });

// Build para cada plataforma
platforms.forEach(({ target, ext }) => {
  const filename = `java-manager-${target.split('-').slice(1).join('-')}${ext}`;
  const outfile = `./binaries/${filename}`;
  
  console.log(`📦 Build para ${target}...`);
  
  try {
    execSync(
      `bun build --compile --target=${target} --minify --sourcemap ./src/index.ts --outfile ${outfile}`,
      { stdio: 'inherit' }
    );
    console.log(` ${filename} `);
  } catch (error) {
    console.log(` ${target}`,error);
  }
});
