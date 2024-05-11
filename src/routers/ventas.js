

// //ventas   ojo listar los detalles
// router.get('/listar todo')
// router.get('/listar por un id')
// router.get('/ listar activos, listar inactivos')
// router.get('/ listar ventas del cliente xxx')
// router.get('/ listar todas las ventas entre dos fechas')
// router.get('/ listar ventas con un valor superior a xxxx')
// // total de ventas entre dos fechas
// //total descuent0
// router.post('/insertar')
// router.put('/modificar')
// router.put('/activar')
// router.put('/desactivar')
// router.get("/",httpVentas.getventas)
// router.post("/",httpVentas.postventas)
// router.post("/",httpVentas.postventas)
import { httpVentas } from '../controllers/ventas'
import { Router } from 'express'


const express = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();
const {httpVentas}=require('../controllers/ventas') 
// const {ventasHelper}=require('../helpers/ventas')

get('/', [
    validarJWT,
    validarCampos
], httpVentas.getlistarTodo);


router.get('/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
], httpVentas.getlistarPorId);

router.get('/activas', [
    validarJWT,
    validarCampos
], httpVentas.getlistarActivos);

router.get('/inactivas', [
    validarJWT,
    validarCampos
], httpVentas.getlistarInactivos);

router.get('/cliente/:clienteId', [
    validarJWT,
    check('clienteId', 'No es un ID válido').isMongoId(),
    validarCampos
], httpVentas.getlistarVentasCliente);

router.get('/entre-fechas/:fechaInicio/:fechaFin', [
    validarJWT,
    validarCampos
], httpVentas.getlistarVentasEntreFechas);

router.get('/superior-valor/:valor', [
    validarJWT,
    validarCampos
], httpVentas.getlistarVentasSuperiorValor);

router.post('/', [
    validarJWT,
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('descuento', 'El descuento debe ser un número').isNumeric(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpVentas.postinsertarVenta);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('valor', 'El valor debe ser un número').isNumeric(),
    check('descuento', 'El descuento debe ser un número').isNumeric(),
    check('estado', 'El estado debe ser un número').isNumeric(),
    validarCampos
], httpVentas.putmodificarVenta);

router.put('/activar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
], httpVentas.putactivarVenta);

router.put('/inactivar/:id', [
    validarJWT,
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
], httpVentas.putdesactivarVenta);


module.exports = router;


