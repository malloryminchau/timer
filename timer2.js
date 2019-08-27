//process.stdout.write('\x07'); // make beep noise
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === 'b'){
    process.stdout.write('\x07');
  }

  if (key > 0) {
    console.log(`setting timer for ${key} seconds...`)
    
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

});



