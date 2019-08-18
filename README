# Typescript Node Starter

Starter Node/Express project with support for Typescript.

This project aims to utilize ease of use and scalability provided with Typescript to build a backend REST service in Node/Express.

## Prettier

Prettier is used to automatically style code, files can be pretified automatically on save by using the included `.vscode/settings.json` file in this repo.

Additionally, the prettier npm module is included as a dependency to prettify staged files with a `pre-commit` hook.

Prettier is used on this project to ensure consistent coding style.

## TSLint

Similarly to Prettier, TSLint will try to auto-fix linting issues automatically on save using the included `.vscode/settings.json` file.

Running `npm run lint:fix` will also try to auto-fix any linting issues in the project.

There's a `pre-push` hook that will lint the project and prevent pushing if errors are present.

## Hooks

Hooks are ran using Husky to ensure code quality through the scaffolding of this project.

### pre-commit

Prettier will run as a `pre-commit` hook using `pretty-quick` on staged files.

### pre-push

Linting (no auto-fix) and tests will be run as a `pre-push` hook, if either of them fail pushing won't go through.

## VSCode

VSCode is recommended as the IDE for this project, included in this repo is `.vscode/settings.json` file with some basic settings to prettify and attempt to auto-fix lint issues with ease.

## Development server

Run `npm start` for a dev server and navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
