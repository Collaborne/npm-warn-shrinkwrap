'use strict';

const fs = require('fs');

if (fs.existsSync('npm-shrinkwrap.json')) {
	process.exit(1);
} else {
	process.exit(0);
}
