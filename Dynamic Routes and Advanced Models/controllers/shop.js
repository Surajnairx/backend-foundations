
const Product = require("../models/product");
const Cart = require("../models/cart");

// GET /products
exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(([products]) => {
            res.render("shop/product-list", {
                prods: products,
                pageTitle: "Shop",
                path: "/products",
            });
        })
        .catch(err => console.log(err));
};

// GET /products/:productId
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;

    Product.findById(productId)
        .then(([rows]) => {
            if (!rows.length) {
                return res.redirect("/");
            }

            const product = rows[0];

            res.render("shop/product-detail", {
                product: product,
                pageTitle: product.title,
                path: "/products",
            });
        })
        .catch(err => console.log(err));
};

// GET /
exports.getIndex = (req, res, next) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.render("shop/index", {
                prods: rows,
                pageTitle: "Shop",
                path: '/',
            });
        })
        .catch(err => console.log(err));
};

// GET /cart
exports.getCart = (req, res, next) => {
    Cart.getCart()
        .then(cart => {
            const cartProducts = cart.products.map(product => ({
                productData: product,
                qty: product.qty
            }));

            res.render("shop/cart", {
                path: "/cart",
                pageTitle: "Your Cart",
                products: cartProducts,
                totalPrice: cart.totalPrice,
            });
        })
        .catch(err => console.log(err));
};

// POST /cart
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;

    Cart.addProduct(prodId)
        .then(() => {
            res.redirect("/cart");
        })
        .catch(err => console.log(err));
};

// GET /orders
exports.getOrders = (req, res, next) => {
    res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Your Orders",
    });
};

// GET /checkout
exports.getCheckout = (req, res, next) => {
    res.render("shop/checkout", {
        path: "/checkout",
        pageTitle: "Checkout",
    });
};

// POST /cart-delete-item/:productId
exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.params.productId;

    Cart.deleteProduct(prodId)
        .then(() => {
            res.redirect("/cart");
        })
        .catch(err => console.log(err));
};
