// ARRAY
// pratique construindo arrays e acessando seus elementos através dos índices

const arr = [1, 2, 3, 4];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
arr[0] = 3;
console.log(arr);
arr[5] = 10;
console.log(arr);
delete arr[4];
console.log(arr);
delete arr[5];
console.log(arr);

// código omitido

// criar um array com uma sequência de números entre x e y


function criaArrNum(inicio, fim) {
  const arr = [];
  let elemento = inicio;

  for(let i = 0, j = 0; j < fim; i++, elemento++) {
    arr[i] = elemento;
    j = elemento;
  }
  return arr;
}
// código omitido

console.log(criaArrNum(12, 30));

// código omitido

// MÉTODOS

// clonar array multidimensional com "deep copy"
// por que não podemos clonar arrays via variável?

// código omitido

const arr1 = [[1, 2], 2, 3];
// código omitido

const copiaArray = (arr) => {
  const copia = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copia.push(copiaArray(elem));
    } else {
      copia.push(elem);
    }
  })
  return copia;
}

// código omitido

const arr2 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);