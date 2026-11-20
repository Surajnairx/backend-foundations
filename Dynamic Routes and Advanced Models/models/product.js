const db = require("../util/db");
const Cart = require("./cart");

const getProductsFromDb = () => {
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
    db.execute('INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)', [this.title, this.price, this.imageUrl, this.description])
    
  }

  static fetchAll() {
   return db.execute('SELECT * FROM products')
  }

  static findById(id) {
    
  }

  static deleteById(id) {
    getProductsFromDb().then(([products])=>{
      const updatedProducts = products.filter(prod => prod.id !== id);
      db.execute('DELETE FROM products WHERE id = ?', [id]).then(() => {
        const product = products.find(prod => prod.id === id);
        Cart.deleteProduct(id, product.price);
      }).catch(err => {
        console.log(err);
      }).catch(err => {
        console.log(err);
      })
    })
  }
};
