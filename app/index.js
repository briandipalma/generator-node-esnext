"use strict";

var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var NodeEs6Generator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
//        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    this.log(chalk.magenta('You\'re using the Node ES6 project generator.'));

    var prompts = [{
      type: 'input',
      name: 'packageName',
      default: "es6-node-package",
      message: 'What do you want to call your new ES6 node package?'
    }];

    this.prompt(prompts, function (props) {
      this.packageName = props.packageName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir(this.packageName);

    this.copy('_package.json', this.packageName + '/package.json');
  }
});

module.exports = NodeEs6Generator;
