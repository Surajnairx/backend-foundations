const db = require('../util/db');

module.exports = class Cart {

    // Add product or increase its quantity
    static addProduct(id) {
        return db.execute(
            `INSERT INTO cart_items (productId, qty)
             VALUES (?, 1)
             ON DUPLICATE KEY UPDATE qty = qty + 1`,
            [id]
        );
    }

    // Delete product from cart
    static deleteProduct(id) {
        return db.execute(
            'DELETE FROM cart_items WHERE productId = ?',
            [id]
        );
    }

    // Fetch cart products and calculate total price
    static getCart() {
        return db.execute(
            `SELECT
                products.id,
                products.title,
                products.imageUrl,
                products.price,
                cart_items.qty,
                (products.price * cart_items.qty) AS totalPrice
             FROM cart_items
             INNER JOIN products
             ON cart_items.productId = products.id`
        ).then(([rows]) => {

            const totalPrice = rows.reduce(
                (total, product) => total + Number(product.totalPrice),
                0
            );

            return {
                products: rows,
                totalPrice: totalPrice
            };
        });
    }
};
