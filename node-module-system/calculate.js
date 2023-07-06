import add from './add.js';
import multiply from './multiply.js';
import subtract from './subtract.js';
import divide from './divide.js';

const x = Number(process.argv[2]);
const y = Number(process.argv[4]);

switch (process.argv[3]) {
  case 'plus':
    console.log('Result:', add(x, y));
    break;
  case 'times':
    console.log('Result:', multiply(x, y));
    break;
  case 'minus':
    console.log('Result:', subtract(x, y));
    break;
  case 'over':
    console.log('Result:', divide(x, y));
    break;
  default:
    console.log(`Invalid Operation - ${process.argv[3]}`);
    break;
}
