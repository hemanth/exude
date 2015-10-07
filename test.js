'use strict';
var assert = require('assert');
var exude = require('./');
var cmds = {
	'linux': 'ls',
	'osx': 'ls',
	'windows': 'dir'
};

it('should execute ls command', function (done) {
	exude(cmds).then(function (data) {
		assert.strictEqual(data.length, 2);
		done();
	});
});
