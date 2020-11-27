# tsconfig.json

![Release](https://github.com/cblanc/tsconfig.json/workflows/Release/badge.svg)
![CI](https://github.com/cblanc/tsconfig.json/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/%40cablanchard%2Ftsconfig.svg)](https://badge.fury.io/js/%40cablanchard%2Ftsconfig)

## Usage

```bash
npm install --save-dev @cablanchard/tsconfig
```

In `tsconfig.json`

```json
{
  "extends": "@cablanchard/tsconfig",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": [
    "lib/**/*"
  ]
}
```

## Licence

MIT

