export class Product {
  name: string;
  quantity: number;
  date: Date;
  price: number;
  gain: number;

  public static generateMock(): Product[] {
    let products = [];
    let product = new Product();
    product.name = "Empanada";
    product.price = 1000;
    product.quantity = 1;
    product.gain = 500;
    product.date = new Date();
    products.push(product);
    product = new Product();
    product.name = "Chorizo";
    product.price = 5000;
    product.quantity = 1;
    product.gain = 1000;
    product.date = new Date();
    products.push(product);
    product = new Product();
    product.name = "Pack 7 Empanadas";
    product.price = 2000;
    product.quantity = 1;
    product.gain = 500;
    product.date = new Date();
    products.push(product);
    product = new Product();
    product.name = "Caramelo";
    product.price = 100;
    product.quantity = 1;
    product.gain = 100;
    product.date = new Date();
    products.push(product);
    product = new Product();
    product.name = "Caramelo";
    product.price = 100;
    product.quantity = 1;
    product.gain = 100;
    product.date = new Date();
    products.push(product);
    product = new Product();
    product.name = "Caramelo";
    product.price = 100;
    product.quantity = 1;
    product.gain = 100;
    product.date = new Date();
    products.push(product);
    return products;
  }
}
