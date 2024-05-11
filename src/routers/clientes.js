

//clientes
// router.get('/listar todo')
// router.get('/listar por un id')
// router.get('/ listar activos, listar inactivos')
// router.post('/insertar')
// router.put('/modificar')
// router.put('/activar')
// router.put('/desactivar')



import { Router } from 'express'
import { httpClientes } from '../controllers/clientes'

router.get("/",httpClientes.getClientes)
router.get("/",httpClientes.getClientes)
router.get("/",httpClientes.getClientes)
router.post("/",httpClientes.postClientes)


const {Router} = require('express');
const { httpClientes } = require('../controllers/clientes');
const {check} = require('express-validator');
const {validarCampos}=require('./../middlewares/validar-campos')
const { clienteHelper } = require('./../helpers/clientes').default
const router = Router()

router.get('/',[
    validarCampos   
],httpClientes.getClientes);

router.post('/insertar',[
    check('nombre','el campo nombre es obligatorio').notEmpty(),
    check('direccion','El campo  direccion es obligatorio').notEmpty(),
    check('direccion','El campo direccion debe tener maximo 50 caracteres').isLength({max:50}),
    check('telefono',' El campo telefono es obligatorio').notEmpty(),
    check('email','El campo email es obligatorio').notEmpty(),
    // check('email').custom(clienteHelper.existeemail),
    check('documento','El campo documento es obligatorio').notEmpty(),
    // check('documento',).custom(clienteHelper.existedocumento),
    check('fecha_compra',' El campo fecha es obligatorio').notEmpty(),
    validarCampos

], httpClientes.postinsertarCliente)


router.put('/activar/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    // check('id').custom(clienteHelper.existeclientesID),
    validarCampos
], httpClientes .putActivarCliente);


router.put('/desactivar/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    // check('id').custom(clienteHelper.existeclientesID),
    validarCampos
], httpClientes .putdesactivarCliente);
router.get('/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    validarCampos
], httpClientes.getCleinteXId);

router.put('/:id', [
    validarJWT,
    check('id', 'El ID del cliente no es válido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('direccion', 'La dirección es obligatoria').not().isEmpty(),
    check('telefono', 'El teléfono es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty().isEmail(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('estado', 'El estado es obligatorio').not().isEmpty(),
    validarCampos
], httpClientes.postModificarCliente);


export default Router


