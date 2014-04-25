"use strict";

var util = require("util");
var chalk = require("chalk");
var yeoman = require("yeoman-generator");

var prompts = [{
	type: "input",
	name: "packageName",
	default: "node-es6-package",
	message: "What do you want to call your new node ES6 package?"
}];

function handlePromptValues(done, props) {
	this.packageName = props.packageName;

	done();
}

var NodeEs6Generator = module.exports = function(args, options) {
	yeoman.generators.Base.apply(this, arguments);

	this.on("end", function() {
		this.installDependencies({skipInstall: options["skip-install"]});
	});
};

util.inherits(NodeEs6Generator, yeoman.generators.Base);

NodeEs6Generator.prototype.init = function() {
	this.log(chalk.magenta("You're using the Yeoman node ES6 package generator."));
};

NodeEs6Generator.prototype.askFor = function() {
	var done = this.async();

	this.prompt(prompts, handlePromptValues.bind(this, done));
};

NodeEs6Generator.prototype.app = function() {
	this.mkdir("src");

	this.copy("_index.js", "index.js");
	this.copy(".gitignore", ".gitignore");

	this.template("_package.json", "package.json");
};