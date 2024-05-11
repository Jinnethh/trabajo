const express=require('express');
const cors=require('cors');
const mongoose = require('mongoose');
 require('dotenv').config();
 const usuario = require('./src/modelos/usuario');
 const ventas = require('./src/modelos/ventas');
 const carrito = require('./src/modelos/carrito');
 const productos = require('./src/modelos/productos');
 const detalleventa = require('./src/modelos/detalleventas');
 const clientes = require('./src/modelos/clientes');
 const app=express()
 
 app.use(cors())
 app.use(express.json());
app.use('api/usuarios',usuario)
app.use('api/ventas',ventas)
app.use('api/carrito',carrito)
app.use('api/productos',productos)
app.use('api/detalleventa',detalleventa)
app.use('api/clientes',clientes)

app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto '${process.env.PORT}`);
    mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('Conectado a MongoDB');
})

})