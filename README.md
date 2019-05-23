# tsconfig.json

[![CircleCI](https://circleci.com/gh/cblanc/tsconfig.json.svg?style=svg)](https://circleci.com/gh/cblanc/tsconfig.json) 
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

