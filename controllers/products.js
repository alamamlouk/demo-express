const products=require('../data.js')

//get all product 
const getProducts=((req,res)=>{
    res.json(products)
})

// get a product 
const getProduct=((req,res)=>{
    const id=Number(req.params.products)
    const product=products.find(product=>product.id===id)
    id(!product)
    {
        return res.status(404).send('Product not Found')
    }
    res.json(product)
})

// create a product 
const createProduct = ((req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

//update a product
const updateProduct = ((req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }

    products[index] = updatedProduct
    res.status(200).json('Product updated')
})

//delete a product 
const deleteProduct = ((req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    products.splice(index,1)
    res.status(200).json('Product deleted')
})

// export

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}