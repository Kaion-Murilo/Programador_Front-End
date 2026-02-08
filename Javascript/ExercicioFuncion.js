// FUNCTION

// elevar um número x a uma potência y

function calculaPotencia(num, pow) {
  let resultado = 1;
  for (let i = 0; i < pow; i++) {
    resultado = resultado * num;
  }
  return resultado;
};
console.log(calculaPotencia(4, 3));
console.log(calculaPotencia(5, 5));
console.log(calculaPotencia(3, 4));
console.log(resultado);


// criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1


const fatorial = function f(num) {
  if (num === 0 || num === 1) return 1;
  return num * f(num - 1);
}

console.log(fatorial(5));

const calculaJuros = (valor, juros, tempo) => {
  let taxaJuros = (juros/100) + 1;
  return valor * Math.pow(taxaJuros, tempo);
}
console.log(calculaJuros(1000, 5, 2));


function soma(a, b) { return a + b };
function multiplica(a, b) { return a * b };
function calcula(fnOperacao, valorA, valorB) {
  return fnOperacao(valorA, valorB);
}
console.log(calcula(soma, 5, 5));
console.log(calcula(multiplica, 5, 5));

const userId = '4545656';
const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`);
setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 4000, userId);