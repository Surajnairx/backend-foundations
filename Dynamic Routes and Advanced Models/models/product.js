
const db = require('../util/db');
const Cart = require('./cart');

module.exports = class Product {

    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    // Insert new product
    save() {
        return db.execute(
            `INSERT INTO products
            (title, price, imageUrl, description)
            VALUES (?, ?, ?, ?)`,
            [
                this.title,
                this.price,
                this.imageUrl,
                this.description
            ]
        );
    }

    // Update existing product
    update() {
        return db.execute(
            `UPDATE products
             SET title = ?, price = ?, imageUrl = ?, description = ?
             WHERE id = ?`,
            [
                this.title,
                this.price,
                this.imageUrl,
                this.description,
                this.id
            ]
        );
    }

    // Fetch all products
    static fetchAll() {
        return db.execute(
            'SELECT * FROM products'
        );
    }

    // Find product by ID
    static findById(id) {
        return db.execute(
            'SELECT * FROM products WHERE id = ?',
            [id]
        );
    }

    // Delete product by ID
    static deleteById(id) {
        return db.execute(
            'SELECT * FROM products WHERE id = ?',
            [id]
        ).then(([rows]) => {

            const product = rows[0];

            if (!product) {
                return;
            }

            // Remove product from cart
            return Cart.deleteProduct(id)
                .then(() => {

                    // Delete product from database
                    return db.execute(
                        'DELETE FROM products WHERE id = ?',
                        [id]
                    );
                });
        });
    }
};
