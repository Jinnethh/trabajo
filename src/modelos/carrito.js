const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    cliente:{type:mongoose.Schema.Types.ObjectId,ref:'cliente'   },
    productos:{type:mongoose.Schema.Types.ObjectId,ref:'producto'   },
    valor: { type: Number, default:0},
    cantidad: { type: Number, default: 0},
descuento: { type: Number, default: 1 }
}, { timestamps: true })


module.exports= mongoose.model("carrito", carritoSchema)