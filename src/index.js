const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':    ' ',
};

function decode(k) {
    let a = k;
  let age =[]
  for(let i = a.length/10; i>0; i--){
    b = a.substr(i*10-10, 10);
    age.push(b);
  }
  console.log(a.length)
  age.reverse();
age = age.map(x => x.replace(/11/g ,'-'));
age = age.map(x => x.replace(/10/g ,'.'));
age = age.map(x => x.replace(/0/g ,''));
age = age.map(x => {
    // if(a.includes('*') > 0){
      while(x.includes('*') > 0){
        for(let i = 0 ; i < 9; i++){
          x = x.replace('*','')        
        }
        x = x.replace('*',' ')
      }
        return x
    }
);
console.log(age)
 age = age.map(x => {for (let key in MORSE_TABLE) {
    if(key === x){
      return MORSE_TABLE[key]
    }
  }
}
)
return age.join('')
}

module.exports = {
    decode
}