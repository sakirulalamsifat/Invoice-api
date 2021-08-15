import express from 'express'
const router = express.Router()
import {
  getProductById,
  getProducts,
  createProduct,
  deleteProduct,
} from '../controllers/invoiceItemController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect,createProduct)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect,  deleteProduct)
  

export default router
