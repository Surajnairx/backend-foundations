
const Product = require("../models/product");

// GET /admin/add-product
exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        editing: false,
    });
};

// POST /admin/add-product
exports.postAddProduct = (req, res, next) => {
    const { title, imageUrl, price, description } = req.body;

    const product = new Product(
        null,
        title,
        imageUrl,
        description,
        price
    );

    product.save()
        .then(() => {
            res.redirect("/admin/products");
        })
        .catch(err => console.log(err));
};

// GET /admin/edit-product/:productId
exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect("/");
    }

    const prodId = req.params.productId;

    Product.findById(prodId)
        .then(([rows]) => {
            if (!rows.length) {
                return res.redirect("/");
            }

            res.render("admin/edit-product", {
                pageTitle: "Edit Product",
                path: "/admin/edit-product",
                editing: editMode,
                product: rows[0],
            });
        })
        .catch(err => console.log(err));
};

// POST /admin/edit-product
exports.postEditProduct = (req, res, next) => {
    const { productId, title, price, imageUrl, description } = req.body;

    const updatedProduct = new Product(
        productId,
        title,
        imageUrl,
        description,
        price
    );

    updatedProduct.update()
        .then(() => {
            res.redirect("/admin/products");
        })
        .catch(err => console.log(err));
};

// GET /admin/products
exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.render("admin/products", {
                prods: rows,
                pageTitle: "Admin Products",
                path: "/admin/products",
            });
        })
        .catch(err => console.log(err));
};

// POST /admin/delete-product
exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;

    Product.deleteById(prodId)
        .then(() => {
            res.redirect("/admin/products");
        })
        .catch(err => console.log(err));
};
