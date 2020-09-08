window.alert("Hoşgeldiniz metni girerek mors kodu elde edebilirsiniz.");
const translation = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l:'.-..',
  m:'--',
  n:'-.',
  o:'---',
  p:'.--.',
  q:'--.-',
  r:'.-.',
  s:'...',
  t:'-',
  u:'..-',
  v:'...-',
  w:'.--',
  x:'-..-',
  y:'-.--',
  z:'--..',
  0:'-----',
  1:'.----',
  2:'..---',
  3:'...--',
  4:'....-',
  5:'.....',
  6:'-....',
  7:'--...',
  8:'---..',
  9:'----.',
  };

const input = document.getElementById("input");
const button = document.getElementById("button");
const answer = document.getElementById("answer");

const translate = (x) => {
  return translation[x];
}

button.onclick = () => {
  let result = "";
  const inputArray = input.value.split('');
  const translatedArray = inputArray.forEach((each) => {
    translate(each) === undefined ? result += "<br>" : result += translate(each) + " ";
  });
  answer.innerHTML= result;
}