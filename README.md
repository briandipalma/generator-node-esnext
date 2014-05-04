## Getting Started

Install `generator-node-es6`.

```
$ npm install -g generator-node-es6
```

Create a directory for your node es6 package. Then `cd` into it.

```
$ mkdir <node-es6-package> && cd <node-es6-package>
```

Finally, initiate the generator:

```
$ yo node-es6
```

## Usage

Within your package the generator provides the following commands.

# Commands

* `npm run build` - Compiles ES6 modules to ES5 CommonJS modules
* `npm run start` - Execute your package. Only works if your package should run from the command line.

The generator expects a few conventions. They are easy to change if they are not found to be suitable.

# Expectations

* source code for your npm package is found in a `src` directory.
* compiled ES6 code is outputed to the `out` directory.
* the package main module is located at `src\index.js`.

## License

MIT