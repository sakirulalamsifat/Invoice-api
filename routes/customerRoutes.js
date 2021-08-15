import express from 'express'
const router = express.Router()
import { authCustomer,registerCustomer } from '../controllers/customerController.js'


router.route('/').post(registerCustomer)
router.post('/login', authCustomer)


export default router
