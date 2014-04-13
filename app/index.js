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

    this.log(chalk.magenta('You\'re using the Yeoman node ES6 package generator.'));

    var prompts = [{
      type: 'input',
      name: 'packageName',
      default: "node-es6-package",
      message: 'What do you want to call your new node ES6 package?'
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
