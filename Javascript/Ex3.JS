let idade = 20;
console.log(idade >= 18); // true ou false

 
// 2. Situação do aluno 

let nota1 = 6;
let nota2 = 8;
let media = (nota1 + nota2) / 2;
console.log(media >= 7); // true ou false


 

// 3. Simulação de troco 

let valorCompra = 35.90; 

let valorPago = 50; 

let troco = valorPago - valorCompra; 

console.log("Troco a ser devolvido: R$" + troco); 

 

// 4. Validação de senha 

let senha1 = "123abc";
let senha2 = "123abc";
console.log(senha1 === senha2); // true ou false


 

// 5. Controle de faltas 

let totalAulas = 80;
let faltas = 25;
let limiteFaltas = totalAulas * 0.25;
console.log(faltas > limiteFaltas); // true ou false


 

// 6. Verificação de login 

let temLogin = true;
let temSenha = true;
console.log(temLogin && temSenha); // true ou false

 

// 7. Valor negado 

let disponivel = true; 

console.log("Disponibilidade invertida: " + !disponivel); 

 

// 8. Condições compostas 

let numero1 = 4;
let numero2 = 4;
console.log(
  numero1 % 2 === 0 &&
  numero2 % 2 === 0 &&
  numero1 === numero2
); // true ou false


 

// 9. Calculadora de porcentagem 

let total = 120; 

let porcentagem = total * 0.15; 

console.log("15% de 120 é igual a " + porcentagem); 

 

// 10. Ordem de operações 

let resultado = 2 + 3 * 5; 

console.log("Resultado da expressão 2 + 3 * 5: " + resultado); 

// A multiplicação é feita primeiro por causa da ordem de precedência dos operadores. 

// Ou seja, 3 * 5 = 15, depois 2 + 15 = 17 
 