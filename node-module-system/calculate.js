import add from './add.js';
import multiply from './multiply.js';
import subtract from './subtract.js';
import divide from './divide.js';

switch (process.argv[3]) {
  case 'plus':
    console.log(
      'Result:',
      add(Number(process.argv[2]), Number(process.argv[4]))
    );
    break;
  case 'times':
    console.log(
      'Result:',
      multiply(Number(process.argv[2]), Number(process.argv[4]))
    );
    break;
  case 'minus':
    console.log(
      'Result:',
      subtract(Number(process.argv[2]), Number(process.argv[4]))
    );
    break;
  case 'over':
    console.log(
      'Result:',
      divide(Number(process.argv[2]), Number(process.argv[4]))
    );
    break;
  default:
    console.log('Invalid Operation');
    break;
}
