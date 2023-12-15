const express = require('express')
const app = express()
const products = require('./data.js')
const logger=(req,res,next)=>{
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    next()
}
const auth=(req,res,next)=>{
    const user=req.query.user
    if(user==='admin'){
        req.user={name:'admin',id:1}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
app.use([logger,auth])
app.use(express.json())
const products_routes = require('./routes/products.js')
app.use('/api/products', products_routes)

/*
app.get('/about',(req,res)=>{
    return res.send('About page')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:productID',(req,res)=>{
    const id=Number(req.params.productID)
    const product=products.find(product=>product.id===id)
    if(!product)
    {
        return res.status(404).send("Product not found")
    }
    res.json(product)
})
app.get('/api/product/query',(req,res)=>{
    const name=req.query.name.toLowerCase()
    const product=products.filter(product=>product.name.toLowerCase().includes(name))
    if(product.length<1){
        return res.status(200).send('no Product matched found')
    }
    res.json(product)
})

//POST
app.post('/api/products',(req,res)=>{
    const newProduct={
        id:products.length+1,
        name:req.body.name,
        price:req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})

//PUt
app.put('/api/products/:productID',(req,res)=>{
    const id =Number(req.params.productID)
    const index=products.findIndex(product=>product.id===id)
    if(index===-1){
        return res.status(404).send('Product not Found')
    }
    const updatedProduct={
        id:products[index].id,
        name:req.body.name,
        price:req.body.price
    }
    products[index]=updatedProduct
    res.status(200).json('Product updated')
})

//Delete 

app.delete('/api/products/:productID',(req,res)=>{
    const id=Number(req.params.productID)
    const index=products.findIndex(product=>product.id === id)
        if(index===-1){
            return res.status(404).send('Product not  found')
        }
        products.splice(index,1)
        res.status(200).json('Product deleted')
})*/
