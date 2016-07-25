# Linting Tool

Plugin for [eslint-myrules-manage](https://github.com/Cellule/eslint-myrules-manager)

## Configuration

- Fork this project.
- edit `index.js`, `rules/*.eslintrc` and `modifiers` however you like.
- `npm install` your git repo in the projects you want your rules.

## Installation

```bash
$ npm install @novivia/linter --save-dev
```

## Details

- Targets: `global` and `frontend`
- Modifiers: see [modifiers](modifiers/README.md)
- Uses [babel-eslint](https://github.com/babel/babel-eslint) for parsing.
