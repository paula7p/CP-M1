'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
    const factores = [];
    let divisor = 2;
    while (num > 1) {
      while (num % divisor === 0) {
        factores.push(divisor);
        num /= divisor;
      }
      divisor++;
    }
    return factores;
  }
  

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    var len = array.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    for (let i = 1; i < array.length; i++) {
      let current = array[i];
      let j = i - 1;
      while (j >= 0 && current < array[j]) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = current;
    }
    return array;
  }


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    let sortedArray = [];
    while (array.length > 0) {
      let minIndex = 0;
      for (let i = 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
          minIndex = i;
        }
      }
      sortedArray.push(array[minIndex]);
      array.splice(minIndex, 1);
    }
    return sortedArray;
  }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
