'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree() {}
class Node {
   constructor(value) {
     this.value = value;
     this.left = null;
     this.right = null;
   }
 }
 
 class BinarySearchTree {
   constructor() {
     this.root = null;
   }
 
   size(node = this.root) {
     if (!node) {
       return 0;
     }
     return 1 + this.size(node.left) + this.size(node.right);
   }
 
   insert(value) {
     const newNode = new Node(value);
     if (!this.root) {
       this.root = newNode;
       return;
     }
     let current = this.root;
     while (true) {
       if (value === current.value) {
         return;
       }
       if (value < current.value) {
         if (!current.left) {
           current.left = newNode;
           return;
         }
         current = current.left;
       } else {
         if (!current.right) {
           current.right = newNode;
           return;
         }
         current = current.right;
       }
     }
   }
 
   contains(value, node = this.root) {
     if (!node) {
       return false;
     }
     if (value === node.value) {
       return true;
     }
     if (value < node.value) {
       return this.contains(value, node.left);
     } else {
       return this.contains(value, node.right);
     }
   }
 
   depthFirstForEach(callback, order = "in-order", node = this.root) {
     if (!node) {
       return;
     }
     if (order === "pre-order") {
       callback(node.value);
       this.depthFirstForEach(callback, order, node.left);
       this.depthFirstForEach(callback, order, node.right);
     } else if (order === "in-order") {
       this.depthFirstForEach(callback, order, node.left);
       callback(node.value);
       this.depthFirstForEach(callback, order, node.right);
     } else if (order === "post-order") {
       this.depthFirstForEach(callback, order, node.left);
       this.depthFirstForEach(callback, order, node.right);
       callback(node.value);
     }
   }
 
   breadthFirstForEach(callback) {
     const queue = [];
     if (this.root) {
       queue.push(this.root);
     }
     while (queue.length) {
       const node = queue.shift();
       callback(node.value);
       if (node.left) {
         queue.push(node.left);
       }
       if (node.right) {
         queue.push(node.right);
       }
     }
   }
 }
 


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
