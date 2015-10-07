# exude [![Build Status](https://travis-ci.org/hemanth/exude.svg)](https://travis-ci.org/hemanth/exude)

> Execute the OS specific command.

Returns a promise which: 

* On success data (array) will have `stdout` and `stderr`.
* On failure data will have `Error`.
* Will reach catch on unknown OS or perm issues.

## Install

```
$ npm install --save exude
```

## Usage

```js
let exude = require('exude');

const cmds = {
	'linux': 'ls',
	'osx': 'ls',
	'windows': 'dir'
};

exude(cmds)
	.then(console.log,console.error)
	.catch(function(e){
		console.error('Unkown OS!');
	});
```

## API

### exude(cmds)

#### cmds

Type: `object`

Must have the requried `OS` names.

## License

MIT © [Hemanth.HM](http://h3manth.com)
