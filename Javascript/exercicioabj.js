const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};
// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.

const clientes = [
    {
        nome: 'Marina M',
        ativo: true,
    },
    {
        nome: 'Rafael R',
        ativo: false,
    },
    {
        nome: 'Fabio F',
        ativo: false,
    },
];
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);
delete pessoa.cpf;
console.log(pessoa);
function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`tem o troféu ${trofeu}`);
    }
}
exibeTrofeus(pessoa.trofeus);
user.calculaIdade = function calculaIdade() {
    const anoNasc = parseInt(this.nascimento.slice(0, 4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`A idade é ${idade}`);
}
for (const cliente of clientes) {
    const status = cliente.ativo ? 'ativo' : 'inativo';
    console.log(`status cliente ${cliente.nome}: ${status}`);
}
user.calculaIdade()

console.log(user);