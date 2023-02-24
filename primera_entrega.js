
// const array2 = [1, 2, 3, 4, "perro"];
// array2.push(34);
// console.log(array2);

// let array = [1, 2, 3, 4, 5 ];


// function mostarLista(array) {
//     for (const element of array){
//         console.log(element);
//     }
//     if (array.length === 0){
//     console.log("Lista Vacía");
// }
// return  `Tamaño de la lista:${array.length}`;
// }

// let resultado1 = mostarLista([])
// console.log(resultado1);

// let resultado2 = mostarLista(array)
// console.log(resultado2);

class ProductManager{
constructor(){

}
static variableEstatica = 4;
}

let instancia = new ProductManager();
let instancia_2 = new ProductManager();
let instancia_3 = new ProductManager();
instancia.metodo1();
instancia.metodo2();