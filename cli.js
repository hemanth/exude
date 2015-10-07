#!/usr/bin/env node
'use strict';
var meow = require('meow');
var exude = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ exude [input]',
		'',
		'Options',
		'  --foo  Lorem ipsum. [Default: false]',
		'',
		'Examples',
		'  $ exude',
		'  unicorns & rainbows',
		'  $ exude ponies',
		'  ponies & rainbows'
	]
});

console.log(exude(cli.input[0] || 'unicorns'));
