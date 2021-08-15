import asyncHandler from 'express-async-handler'
import InvoiceItem from '../models/InvoiceItems.js'

const getProducts = asyncHandler(async (req, res) => {
  const products = await InvoiceItem.find()

  res.json({ products })
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await InvoiceItem.findById(req.params.id)
  
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
})
  
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await InvoiceItem.findById(req.params.id)
  
    if (product) {
      await product.remove()
      res.json({ message: 'Product removed' })
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
})
  
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
      name: 'Sample name',
      price: 0,
      user: req.user._id,
      brand: 'Sample brand'
    })
  
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  })
  
  export {getProductById,getProducts,createProduct,deleteProduct}