const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
    cliente:{type:mongoose.Schema.Types.ObjectId,ref:'Usuario'   },
    fecha: { type: String, required: true ,max:42,unique:true},
    valor: { type: Number, default: 0 },
    descuento: { type: Number, default: 0 },
    estado:{type:Number, default:0},
}, { timestamps: true })


    module.exports= mongoose.model("venta", ventaSchema)