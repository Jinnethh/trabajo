// const{router}=require('express')

// const router=router()

//PRODUCTOS
// router.get('/listar todo')
// router.get('/listar por un id')
// router.get('/liste todos los productos por debajo stockminimo')
// router.get('/listar todos los articulos por encima del precio xxx')
// router.get('/ listar activos, listar inactivos')
// router.post('/insertar')
// router.put('/modificar')
// router.put('/activar')
// router.put('/desactivar')

import { Router } from 'express'
import { httpProductos } from '../controllers/productos'


router.get("/",httpProductos.getproductos)
router.get("/",httpProductos.getproductos)
router.get("/",httpProductos.getproductos)
router.get("/",httpProductos.getproductos)
router.get("/",httpProductos.getproductos)
router.post("/",httpProductos.postproductos)
router.put("/",httpProductos.putproductos)
router.put("/",httpProductos.putproductos)
router.put("/",httpProductos.putproductos)


const express = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = express.Router();
const {httpProductos}=require('../controllers/productos') 
// const {productosHelper}=require('../helpers/productos')

get('/', [
    validarJWT,
    validarCampos
], httpProductos.getlistarTodo);


router.get('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
], httpProductos.getlistarPorId);

router.get('/stock-minimo', [
    validarJWT,
    validarCampos
], httpProductos.getlistarPorStockMinimo),

router.get('/precio-superior/:precio', [
    validarJWT,
    check('precio', 'El precio debe ser un número').isNumeric(),
    validarCampos
], httpProductos.getlistarPorPrecioSuperior);

router.get('/activos', [
    validarJWT,
    validarCampos
], httpProductos.getlistarActivos);

router.get('/inactivos', [
    validarJWT,
    validarCampos
], httpProductos.getlistarInactivos);

router.post('/', [
    validarJWT,
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre debe tener máximo 42 caracteres').isLength({ max: 42 }),
    check('precio', 'El precio debe ser un número').isNumeric(),
    check('cantidad', 'La cantidad debe ser un número').isNumeric(),
    check('stockminimo', 'El stock mínimo debe ser un número').isNumeric(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpProductos.postinsertarProducto);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre debe tener máximo 42 caracteres').isLength({ max: 42 }),
    check('precio', 'El precio debe ser un número').isNumeric(),
    check('cantidad', 'La cantidad debe ser un número').isNumeric(),
    check('stockminimo', 'El stock mínimo debe ser un número').isNumeric(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpProductos.putmodificarProducto);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], httpProductos.putactivarProducto);

router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], httpProductos.putdesactivarProducto);


module.exports = router;
export default Router



