class ProductManager{
    products;
    constructor() {
        this.products=[];
    }
    
    static correlativoId=0
    addProduct(tittle,description,price,thumbnail,code,stock){
        if(tittle==undefined|| description==undefined||price==undefined||thumbnail==undefined||code==undefined||stock==undefined){
            throw new Error("Todos los campos son obligatorios");
    }
        let codeExists=this.products.some((dato)=>dato.code==code);   
        if(codeExists){
            throw new Error("El codigo ya existe, por favor verifique");
        }
        else{
            ProductManager.correlativoId++;
            const newProduct={
                id:ProductManager.correlativoId,
                tittle,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products.push(newProduct);
        }           
    } 

    
    getProducts(){
        return this.products;

    }
    getProductsById(id){
        let product= this.products.find(dato=>dato.id===id);
        if(product !==undefined){
            return product;
        } else{
            return"Not found";    
        }

    }
} 

let myFirstsProducts=new ProductManager();
myFirstsProducts.addProduct(
    "Producto prueba","Este es un producto de prueba",200,"Sin imagen","abc123",25
);


console.log("desde getProducts",myFirstsProducts.getProducts());
console.log("mi producto filtrado por id",myFirstsProducts.getProductsById(1));
