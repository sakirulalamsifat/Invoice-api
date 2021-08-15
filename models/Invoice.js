import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Customer',
    },
    invoiceItem: [
      {
        name: { type: String, required: false },
        qty: { type: Number, required: false },
        price: { type: Number, required: false },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: 'InvoiceItem',
        },
      },
    ],
 
    totalPrice: {
      type: Number,
      required: false,
      default: 0.0,
    }

  },
  {
    timestamps: false,
  }
)

const InvoiceList = mongoose.model('InvoiceList', orderSchema)

export default InvoiceList
