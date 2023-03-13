'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    if (array.length <= 1) return array;
    
    const pivot = array[0];
    const left = [];
    const right = [];
    
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    
    const leftSorted = quickSort(left);
    const rightSorted = quickSort(right);
    
    return [...leftSorted, pivot, ...rightSorted];
  }
  const array = [4, 6, 2, 7, 9, 1, 5, 3, 8];
const sortedArray = quickSort(array);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

    if (array.length <= 0) return array;
    
    const middleIndex = Math.floor(array.length / 2);
    const left = array.slice(0, middleIndex);
    const right = array.slice(middleIndex);
    
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    
    return merge(leftSorted, rightSorted);
  }
  
  function merge(left, right) {
    const result = [];
    
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  }
 
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


  //okey probemos ahora


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
