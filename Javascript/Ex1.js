// 1. Mensagem de boas-vindas 

let nome = "João da Silva"; // substitua pelo seu nome completo 

console.log("Olá, " + nome + "! Seja bem-vindo(a) ao curso de JavaScript!"); 

 

// 2. Cálculo de idade 

let anoAtual = 2025; 

let anoNascimento = 1990; 

let idade = anoAtual - anoNascimento; 

console.log("Você tem " + idade + " anos."); 

 

// 3. Mensagem de localização 

let cidade = "São Paulo"; 

let estado = "SP"; 

let pais = "Brasil"; 

console.log("Você está em " + cidade + " - " + estado + ", " + pais + "."); 

 

// 4. Tipo da variável 

let temCarteira = true; 

console.log(typeof temCarteira); // imprime: boolean 

 

// 5. Simulação bancária simples 

let saldo = 0; // saldo inicial 

saldo += 200; // depósito 

saldo -= 50; // saque 

console.log("Saldo final: R$" + saldo); 

 

// 6. Média de notas 

let matematica = 8; 

let portugues = 7; 

let ciencias = 9; 

let media = (matematica + portugues + ciencias) / 3; 

console.log("Média final: " + media); 

 

// 7. Reajuste de salário 

let salario = 3000; 

let novoSalario = salario * 1.10; // aumento de 10% 

console.log("Após um aumento de 10%, o novo salário é R$" + novoSalario); 

 

// 8. Contador de cliques 

let cliques = 0; 

cliques++; 

cliques++; 

cliques++; 

console.log("O botão foi clicado " + cliques + " vezes."); 

 

// 9. Constantes não podem ser alteradas 

const PI = 3.14; 

// PI = 3.1415; // ❌ Isso causaria erro pois constantes não podem ser modificadas 

console.log("PI é uma constante e não pode ser alterada: " + PI); 

 

// 10. Concatenando tipos diferentes 

let mensagem = "O número é "; 

let numero = 42; 

let combinado = mensagem + numero; 

console.log(combinado); // "O número é 42" 

console.log(typeof combinado); // string 