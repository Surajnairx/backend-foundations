const db = require("../util/db");
const Cart = require("./cart");

const getProductsFromFile = () => {
  db.execute('SELECT * FROM `node-complete`.products').then(([rows]) => {
    console.log(rows);
  }).catch(err => {
    console.log(err);
  });
};

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {
    
    
  }

  static fetchAll() {
   return db.execute('SELECT * FROM products')
  }

  static findById(id) {
    
  }

  static deleteById(id) {
    getProductsFromFile(products => {
      const updatedProducts = products.filter(prod => prod.id !== id);
      fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
        if(!err) {
          const product = products.find(prod => prod.id === id);
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }
};
