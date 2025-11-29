# Build Simple con Bun

Script simple para crear ejecutables multiplataforma usando `bun --compile`.

## 🚀 Uso

```bash
bun run build.js
```

## 📦 Qué hace

Crea ejecutables standalone en la carpeta `./binaries/` para:

- **Windows** (`java-manager-windows-x64.exe`)
- **Linux** (`java-manager-linux-x64`)
- **macOS Intel** (`java-manager-darwin-x64`)
- **macOS Apple Silicon** (`java-manager-darwin-arm64`)

## ✅ Características

- ✅ Multiplataforma (Windows, Linux, macOS)
- ✅ Ejecutables standalone (no necesita Node.js/Bun instalado)
- ✅ Minificación automática
- ✅ Source maps incluidos
- ✅ Todo en un solo archivo

## 🎯 Ejecutar

```bash
# Windows
./binaries/java-manager-windows-x64.exe

# Linux
./binaries/java-manager-linux-x64

# macOS Intel
./binaries/java-manager-darwin-x64

# macOS Apple Silicon
./binaries/java-manager-darwin-arm64
```

## 📁 Estructura

```
project/
├── src/index.ts          # Código fuente
├── build.js              # Script de build
├── package.json          # Dependencias
└── binaries/             # Ejecutables generados
    ├── java-manager-windows-x64.exe
    ├── java-manager-linux-x64
    ├── java-manager-darwin-x64
    └── java-manager-darwin-arm64
```

## 🔧 Modificar plataformas

Edita el array `platforms` en `build.js`:

```javascript
const platforms = [
  { target: 'bun-windows-x64', ext: '.exe' },
  { target: 'bun-linux-x64', ext: '' },
  // Agrega o quita plataformas aquí
];
```

## 🌟 Ventajas

- **Rápido**: Compilación nativa con Bun
- **Simple**: Un solo comando para todas las plataformas
- **Portable**: Ejecutables autocontenidos
- **Producción**: Listos para distribuir

> **Nota**: Los ejecutables incluyen el runtime de Bun, por lo que son más grandes pero funcionan sin dependencias.
