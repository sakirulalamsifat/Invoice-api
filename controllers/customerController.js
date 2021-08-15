import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import Customer from '../models/Customers.js'

const authCustomer = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    const user = await Customer.findOne({ email })
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
})
  

const registerCustomer = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
  
    const userExists = await Customer.findOne({ email })
  
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    const user = await User.create({
      name,
      email,
      password,
    })
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
})
  
export { authCustomer, registerCustomer }