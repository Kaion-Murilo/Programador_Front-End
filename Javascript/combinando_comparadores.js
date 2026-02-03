
// const idade = 15;
const maiorDeIdade = idade >= 18;
// const possuiCNH = false;
const podeDirigir = maiorDeIdade && possuiCNH; // AND
console.log('Pode dirigir?', podeDirigir);
// const idade = 18;
const possuiCNH = true;
const podeViajarSozinha = maiorDeIdade || possuiCNH; // OR
console.log('Pode viajar sozinha?', podeViajarSozinha);
const idade = 17;
const precisaDeAcompanhante = !maiorDeIdade;
console.log('Precisa de acompanhante?', precisaDeAcompanhante);