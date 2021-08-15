import express from 'express'
const router = express.Router()
import {
  getAllInvoice,
  getInvoiceById,
  getMyInvoices,
  addInvoiceItems,
} from '../controllers/invoiceListController.js'
import { customerProtect, protect } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(customerProtect, addInvoiceItems)
  .get(protect, getAllInvoice)
router.route('/myorders').get(customerProtect, getMyInvoices)
router.route('/:id').get(customerProtect, getInvoiceById)

export default router
