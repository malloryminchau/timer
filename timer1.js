let array = process.argv.slice(2);
//console.log(array);
let delay = 0;
for(let i = 0; i < array.length; i++) {
  delay = array[i] * 1000;
  if(array[i] > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay)
  }
  
}

