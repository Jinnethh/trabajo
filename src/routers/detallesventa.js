// const{router}=require('express')

// const router=router()

//detalles ventas  
router.get('/listar por un id venta')
router.post('/insertar')
router.put('/modificar')




import { Router } from 'express'
import { httpDetalleVentas } from '../controllers/detalleventas'



// router.get("/",httpDetalleVentas.getDetalleVentaXId)
// router.post("/",httpDetalleVentas.postDetalleVenta)
// router.put("/",httpDetalleVentas.putDetalleVenta)


import { Router } from 'express';
import { check } from 'express-validator';
import { httpDetalleVentas } from '../controllers/detalleventa';

const express = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router =Router();
const {httpDetalleVentas}=require('../controllers/detallesventas') 


router.get("/:id", [
    check("id", "El id es obligatorio").not().isEmpty(),
], httpDetalleVentas.mostrar);

router.post("/insertar", [
    check("cantidad", "La cantidad debe ser un número").isNumeric(),
    check("precio_unitario", "El precio unitario debe ser un número").isNumeric(),
], httpDetalleVentas.agregar);

router.put("/:modificar", [
    check("id", "El id es requerido").not().isEmpty(),
    check("estado", "El estado es requerido").not().isEmpty(),
    httpDetalleVentas.validarEstado, 
], httpDetalleVentas.actualizar);


export default Router