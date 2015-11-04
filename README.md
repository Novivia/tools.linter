# eslint-myrules
Plugin for [eslint-myrules-manage](https://github.com/Cellule/eslint-myrules-manager)

## Configuration

- Fork this project.
- edit `index.js`, `rules/*.eslintrc` and `modifiers` however you like.
- `npm install` your git repo in the projects you want your rules.

## Installation

```bash
$ npm install git+ssh://git.novivia.com/auex/tools.rules --save-dev
```

## Details

- Targets: `global` and `frontend`
- Modifiers: see [modifiers](modifiers/README.md)
- Uses [babel-eslint](https://github.com/babel/babel-eslint) for parsing.
- Optional plugin for [react](https://github.com/yannickcr/eslint-plugin-react)
