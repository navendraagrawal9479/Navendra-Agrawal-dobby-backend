let str = "i love india"

let s = "";
let word = "";
s = s + str[0].toUpperCase() + ' ';
let words = [];

for(let i = str.length-1;i >=2 ;i--){
  word = word + str[i];
  if(str[i] === ' '){
    words.push(word);
    word = "";
  }
}
words.push(word);
for(let i=words.length - 1;i>=0;i--){
  s = s + words[i] + " ";
}
console.log(s);