"use strict";

var path = require("path");
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

module.exports = yeoman.generators.NamedBase.extend({
	init: function() {
		this.log(chalk.magenta("You're using the Yeoman node ES6 package generator."));

//		console.info("Args", this.args);
		console.info("Source root", this.sourceRoot());
	},

	askFor: function() {
		var done = this.async();

		this.prompt(prompts, handlePromptValues.bind(this, done));
	},

	app: function() {
		var packageDirectory = this.packageName + path.sep;

		this.mkdir(this.packageName);
		this.mkdir(packageDirectory + "src");

		this.copy("_index.js", packageDirectory + "index.js");
		this.copy(".gitignore", packageDirectory + ".gitignore");

		this.template("_package.json", packageDirectory + "package.json");
	}
});