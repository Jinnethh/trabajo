const mongoose=require('mongoose');

const detalleventasSchema=new mongoose.Schema({
    venta:{type:mongoose.Schema.Types.ObjectId,ref:'venta'   },
    producto:{type:mongoose.Schema.Types.ObjectId,ref:'producto'   },
    valor: { type: Number, default: 0 },
    cantidad: { type: Number, default: 0 },
   
}, { timestamps: true })


module.exports= mongoose.model("detalleventa", detalleventasSchema)