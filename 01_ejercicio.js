class ProductManager {

    constructor(nombre,  precio, thumbnail, code, stock, descripcion,) {
        this.nombre = nombre;
        this.precio = precio;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.descripcion = descripcion;
        this.id; 
    }

  addProduct() {
   
        let find = array.find((el) => el.code == this.code)

        if (find){
            console.log("error")
        }
        else {
            array.push(this);
        }
        this.id = array.length
    }

   getProduct(A) {
    let find = array.find((el) => el.id == A)
       if (find){
        return this
       }
    else{
        console.log("ese producto no existe")
    }
    }

    getProducts(){
        return array;
    }
}

const array = []


const ProductManager1 = new ProductManager("dynamo", 100, "imagen.jpg", "chd45wj9", 20, "vinilo")
const ProductManager2 = new ProductManager("Kid A Mnesia", 400, "imagen2.jpg", "cjs89sk0", 5,  "cassette")
const ProductManager3 = new ProductManager("garbage", 200, "imagen3.jpg", "cjs89sk0", 6,  "Cd")


ProductManager1.addProduct();
ProductManager2.addProduct();
ProductManager3.addProduct();



console.log(ProductManager1.getProducts());

console.log(ProductManager1.getProduct(1));

