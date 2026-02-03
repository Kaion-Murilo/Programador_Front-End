// 1. Contador de 1 a 10 

for (let i = 1; i <= 10; i++) { 

console.log(i); 

} 

 

// 2. Soma de 1 a 100 

let soma = 0; 

for (let i = 1; i <= 100; i++) { 

soma += i; 

} 

console.log("Soma de 1 a 100: " + soma); 

 

// 3. Tabuada personalizada 

let numeroTabuada = 7; 

for (let i = 1; i <= 10; i++) { 

console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i)); 

} 

 

// 4. Contagem regressiva com while 

let contagem = 10; 

while (contagem >= 0) { 

console.log(contagem); 

contagem--; 

} 

console.log("Contagem finalizada!"); 

 

// 5. Receber números até digitar 0 (simulado com array) 

let numeroDigitado;
let quantidade = 0;
let repeticoes = 0;

do {
  // simulação manual de entrada
  if (repeticoes === 0) {
    numeroDigitado = 5;
  } else if (repeticoes === 1) {
    numeroDigitado = 10;
  } else {
    numeroDigitado = 0;
  }

  if (numeroDigitado !== 0) {
    quantidade++;
  }

  repeticoes++;
} while (numeroDigitado !== 0);

console.log("Total de números digitados: " + quantidade);


 

// 6. Jogo do número secreto 

let numeroSecreto = 7;

for (let tentativa = 1; tentativa <= 3; tentativa++) {
  let numeroTentado;

  if (tentativa === 1) {
    numeroTentado = 3;
  } else if (tentativa === 2) {
    numeroTentado = 5;
  } else {
    numeroTentado = 7;
  }

  if (numeroTentado === numeroSecreto) {
    console.log("Acertou!");
  } else {
    console.log("Tente novamente");
  }
}


// 7. Idade ao longo dos anos 

let anoNascimento = 2000; 

let anoAtual = 2025; 

for (let ano = anoNascimento; ano <= anoAtual; ano++) { 

console.log("Em " + ano + " você tinha " + (ano - anoNascimento) + " anos."); 

} 

 

// 8. Listando números pares entre 1 e 50 

for (let i = 1; i <= 50; i++) { 

if (i % 2 === 0) { 

console.log(i); 

} 

} 

 

// 9. Contar múltiplos de 3 entre 1 e 100 

let multiplosDe3 = 0; 

for (let i = 1; i <= 100; i++) { 

if (i % 3 === 0) { 

multiplosDe3++; 

} 

} 

console.log("Números entre 1 e 100 divisíveis por 3: " + multiplosDe3); 

 

// 10. Menu com repetição 

let opcao;
let passo = 0;

do {
  // simulação da escolha do usuário
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);

 