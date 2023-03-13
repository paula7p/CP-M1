'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   let binaryDigits = num.toString().split('').reverse();
 
   for (let i = 0; i < binaryDigits.length; i++) {
     decimal += binaryDigits[i] * Math.pow(2, i);
   }
 
   return decimal;
 }
 console.log(BinarioADecimal("100100"));

function DecimalABinario(num) {
   if (num === 0) {
     return '0';
   }
   let binario = '';
   while (num > 0) {
     binario = (num % 2) + binario;
     num = Math.floor(num / 2);
   }
   return binario;
 }
 console.log(DecimalABinario("43"));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
