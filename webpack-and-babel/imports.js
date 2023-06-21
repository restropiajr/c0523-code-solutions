/* eslint-disable no-unused-vars */

// import from a file located at the absolute path `/foo/bar/baz/qux.js`:
// eslint-disable-next-line import/no-absolute-path
import qux from '/foo/bar/baz/qux.js';

// import from a file named `foo.json` located in the current directory:
import foo from './foo.json';

// import from a file named `bar.js` located in the parent directory:
import bar from '../bar.js';

// import from a file named `index.js` located in a directory named `baz` that
// is in the current directory:
import index from './baz/index.js';

// import from a file named `index2.js` located in a directory named `baz` that
// is in the parent directory:
import index2 from '../baz/index2.js';

// import from an `npm` module named `react`:
import React from 'react';
