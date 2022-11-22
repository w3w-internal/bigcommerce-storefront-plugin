# Javascript Library Boilerplate

A starter boilerplate template for creating Typescript libraries.

## Why use this?

If you need to create a JavaScript/NPM based library for your project then this is the starting point for you at what3words. This template provides the base structure and configuration for Typescript, with linting and prettier rules, testing is run with Mocha, Sinon and test coverage and reports is provided by Istanbul.

It is also very quick to setup the CI pipeline. The CI pipeline will automatically transpile the project, run tests and coverage, publish the package to NPM and tag the git repo with the version in the project `package.json`. No configuration necessary!

## Getting Started

1. Create a new git repo and use this project as a template
2. Clone your new git repository locally
3. Run makefile script which will inject your project name into the required files and clean up after itself.
```bash
# replace PROJECT_NAME with the name of the application
make init project=PROJECT_NAME
```
4. Add the project to CircleCI
5. Add your code *and tests*
6. Commit and enjoy!


##
[Chris]: https://github.com/c5haw
[Thomas]: https://github.com/tzlillington