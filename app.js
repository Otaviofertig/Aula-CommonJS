var pessoa = require("./communs/Pessoa.js");
var soma = require("./communs/Soma.js");
var imposto = require("./communs/CalculoImposto.js");
var subtracao = require("./communs/Subtração.js");
var divisao = require("./communs/Divisão.js");
var multiplicacao = require("./communs/Multiplicação.js");


otavio = pessoa();

/* console.log(JSON.stringify(otavio));
console.log(some(2,2)); */

/* console.log('Valor do produto com imposto: ' + imposto.adicionar(10));
console.log('taxa de imposto: ' + imposto.valor(10));
console.log('taxa do Imposto: ' + imposto.taxa) */

console.log(soma(2,2));
console.log(subtracao(2,2));
console.log(divisao(2,2));
console.log(multiplicacao(2,2));