![](https://david-dm.org/briandipalma/generator-node-esnext.png)

# Getting Started

Install `generator-node-esnext`.

```
$ npm i -g generator-node-esnext
```

Create a directory for your node es6 package. Then `cd` into it.

```
$ mkdir <node-esnext-package> && cd <node-esnext-package>
```

Finally, initiate the generator:

```
$ yo node-esnext
```

# Usage

Within your package the generator provides the following commands.

## Commands

* `npm run build` - Compiles ES6+ modules/code to ES5 CommonJS modules/code
* `npm run start` - Execute your package. Only works if your package should run from the command line.
* `npm run watch` - Watches `src` directory and rebuilds on changes.

The generator expects a few conventions. They are easy to change if they are not found to be suitable.

## Expectations

* source code for your npm package is found in a `src` directory.
* compiled ES6+ code is outputed to the `out` directory.
* the package main module is located at `src\index.js`.

## License

MIT