


import { httpCarrito } from '../controllers/carrito'
import { Router } from 'express'

// router.get("/",httpCarrito.getCarritoxId)
// router.post("/",httpCarrito.postCarrito)
// router.delete("/",httpCarrito.deleteCarrito)

const {Router} = require('express');
const { httpCarrito } = require('../controllers/carrito');
const {check} = require('express-validator');
const {validarCampos}=require('./../middlewares/validar-campos')
const router = Router()


router.get('/:id', validarJWT, httpCarrito.getCarritoxId);

router.post('/insertar', [
    validarJWT,
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),
    check('producto', 'El producto es obligatorio').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('cantidad', 'La cantidad debe ser un número').isNumeric(),
    validarCampos 
], httpCarrito.postinsertarCarrito);

router.delete('/:id', validarJWT, httpCarrito.deleteEliminarCarrito);


export default Router

