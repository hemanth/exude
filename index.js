'use strict';
var promisify = ((m) => (m && m.default) ? m.default : m)(require('es6-promisify'));
var isLinux = require('is-linux');
var isOsx = require('is-osx');
var isWindows = require('is-windows');
var isObject = require('is-object');
var lowercaseKeys = ((m) => (m && m.default) ? m.default : m)(require('lowercase-keys'));
var osIndex = [isLinux(), isOsx(), isWindows()].indexOf(true);
var osType = ({
	0: 'linux',
	1: 'osx',
	2: 'windows'
}[osIndex]) || 'unknwon';
var exec = function(cmd) { return new Promise(function(resolve, reject) { require('child_process').exec(cmd, function(err, stdout, stderr) { if (err) return reject(err); resolve([stdout, stderr]); }); }); };

module.exports = function (cmds) {
	if (!isObject(cmds)) {
		throw new Error('Expected an object!');
	}
	cmds = lowercaseKeys(cmds);
	return exec(cmds[osType]);
};
