'use strict';
var promisify = require('es6-promisify');
var isLinux = require('is-linux');
var isOsx = require('is-osx');
var isWindows = require('is-windows');
var isObject = require('is-object');
var lowercaseKeys = require('lowercase-keys');
var osIndex = [isLinux(), isOsx(), isWindows()].indexOf(true);
var osType = ({
	0: 'linux',
	1: 'osx',
	2: 'windows'
}[osIndex]) || 'unknwon';
var exec = promisify(require('child_process').exec);

module.exports = function (cmds) {
	if (!isObject(cmds)) {
		throw new Error('Expected an object!');
	}
	cmds = lowercaseKeys(cmds);
	return exec(cmds[osType]);
};
