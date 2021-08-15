import asyncHandler from 'express-async-handler'
import InvoiceList from '../models/Invoice.js'

const addInvoiceItems = asyncHandler(async (req, res) => {
  const { invoiceItem, totalPrice } = req.body

  if (invoiceItem && invoiceItem.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new InvoiceList({
      invoiceItem,
      customer: req.customer._id,
      totalPrice
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

const getInvoiceById = asyncHandler(async (req, res) => {
    const order = await InvoiceList.findById(req.params.id).populate(
      'customer',
      'name email'
    )
  
    if (order) {
      res.json(order)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
})
  
const getMyInvoices = asyncHandler(async (req, res) => {
    const orders = await InvoiceList.find({ customer: req.customer._id })
    res.json(orders)
})
  
const getAllInvoice = asyncHandler(async (req, res) => {
    const orders = await InvoiceList.find({}).populate('customer', 'id name')
    res.json(orders)
})
  
export {getAllInvoice,getInvoiceById,getMyInvoices,addInvoiceItems}
