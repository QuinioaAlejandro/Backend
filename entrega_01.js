class ProductManager {

    constructor(nombre, descripcion, precio, thumbnail, id, stock) {
        this.nombre = nombre;
        this.precio =precio;
        this.thumbnail =thumbnail;
        this.id =id;
        this.stock =stock;
        this.descripcion =descripcion;
    }


    // Metodos
  addProduct() {
    constructor.push("algas");
        console.log(constructor);
    }

   getProduct() {
        return this.id
    }
}


const ProductManager1 = new ProductManager("negro", "Peugeot")
const ProductManager2 = new ProductManager("Azul", "Ford")

console.log(ProductManager1);
console.log(ProductManager2);

console.log(ProductManager1.getProduct());