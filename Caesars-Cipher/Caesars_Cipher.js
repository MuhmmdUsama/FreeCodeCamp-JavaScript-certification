const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
let key = 13;

function rot13(str) {
  let accumulator = '';
  console.log(typeof str);

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isAletter = alphabet.includes(char);
    if (isAletter === false) {
      accumulator += char;
    } else {
      let charIndex = alphabet.indexOf(char);
      accumulator += alphabet[charIndex + key] 
      || alphabet[charIndex - key];
    }
  }

  return accumulator;
}

rot13('SERR PBQR PNZC');
console.log(rot13('SERR PBQR PNZC'));
// console.log(alphabet);
