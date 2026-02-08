// IF/ELSE

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operacao = 'divisão';

if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicação') {
    console.log(num1 * num2);
} else {
    console.log('Operação não identificada');
}
// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salarіо = 2000;

if (salario >= 11000) {
    console.log('3% de bônus');
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bônus');
} else if (salario < 7000 && salario >= 4000) {
    console.log('7% de bônus');
} else {
    console.log('9% de bônus');
}


const ano = 1995;
// const ano = 2000;
// const ano = 2022;
// const ano = 1992;
if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
}else {
    console.log(`${ano} não é bissexto`);
}


// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 
const nome = "Roberta";
const nota = 8;
const faltas = 2;
const recebeBonus = (nota >= 8) && (faltas <= 2)
    ? `${nome} recebe bônus`
    : `${nome} não recebe bônus`;
    console.log(recebeBonus);
    // criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais
switch(user){
case 'free':
    console.log('acesso limitado');
    break;
    case 'premium':
    console.log('acesso total ao app');
    break;
    case 'super premium':
    console.log('tipo de user desconhecido');
    break;
}