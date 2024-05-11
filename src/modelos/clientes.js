const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    carrito:{type:mongoose.Schema.Types.ObjectId,ref:'carrito' },
    producto:{type:mongoose.Schema.Types.ObjectId,ref:'producto'},
    nombre:{ type: String, required: true ,max:42,},
    email: { type: String, required: true, unique:true },
    cedula:{type:Number, default:0},
    telefono: { type: Number, default: 0 }
}, { timestamps: true })


module.exports= mongoose.model("cliente", clienteSchema)