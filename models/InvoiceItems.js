import mongoose from 'mongoose'


const invoiceItemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
   
  },
  {
    timestamps: true,
  }
)

const InvoiceItem = mongoose.model('InvoiceItem', invoiceItemSchema)

export default InvoiceItem
