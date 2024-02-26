/* gerador de senhas completo*/

// Lista de letras em JavaScript (maiúsculas e minúsculas)
const letras = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Lista de números em JavaScript
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbolos = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "|",
];
function criandoSenha() {
  let numLetras = prompt("Quantas letras você quer na sua senha? ");
  let numNumeros = prompt("Quantos números você quer na sua senha?");
  let numSimbolos = prompt("Quantos simbolos você quer na sua senha?");
  function adicionandoLetras(quantidadeLetras) {
    for (let i = 0; i < quantidadeLetras; i++) {
      let randomNum = Math.floor(Math.random() * letras.length);
      senha.push(letras[randomNum]);
    }
  }
  function adicionandoNumeros(quantidadeNumeros) {
    for (let i = 0; i < quantidadeNumeros; i++) {
      let randomNum = Math.floor(Math.random() * numeros.length);
      senha.push(numeros[randomNum]);
    }
  }
  function adicionandoSimbolos(quantidadeSimbolos) {
    let randomNum = Math.floor(Math.random() * simbolos.length);
    senha.push(simbolos[randomNum]);
  }
  function convertendoListaParaString() {
    for (caracter of senha) {
      senhaFinal += caracter;
    }
  }
  adicionandoLetras(numLetras);
  adicionandoNumeros(numNumeros);
  adicionandoSimbolos(numSimbolos);
  convertendoListaParaString();
}

let senha = [];
let senhaFinal = "";
criandoSenha();
console.log(senha);
console.log(`Senha produzida: ${senhaFinal}`);
