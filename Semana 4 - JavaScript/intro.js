console.log("\n*********************** Variables ************************** \n");

var numero1;
numero1 = 4;

var numlet = "4";

var numero2;
numero2 = 2;

console.log("Número 1: "+ numero1 + "Número 2: " + numero2);

console.log("\n*********************** Cadenas ************************** \n");

var frase1 = "Ejemplo comillas dobles";

var frase2= 'Ejemplo comillas simples';

var frase3 = `Ejemplo comillas ${numero2} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3 + "\n");

console.log("\n*********************** Condicionales ************************** \n");

console.log(numero1 > numero2);

console.log(numero1 == numlet);

console.log("\n*********************** Operador Lógico AND ************************** \n");
console.log(true && false);

console.log("\n*********************** Operador Lógico AND ************************** \n");
console.log(true || false);

console.log("\n*********************** Arreglos ************************** \n");

let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[5]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras = ["Explorer", "MisionComander","LaunchX","Innovacción"];

console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n*********************** Objetos ************************** \n");

let explorer = {
    nombre: "Nombre del explorer",
    email: "email@innovaccion.mx",
    numReg: "12345",
    mision: "FrontEnd",
    proyectos: ["Abogabot","Taquería","Pastelería","Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
};

console.log(explorer);

console.log(explorer.proPer);