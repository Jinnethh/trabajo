// const{router}=require('express')

// const router=router()


// router.get('/listar por un id')
// router.get('/ listar activos, listar inactivos')
// router.post('/insertar') 
// router.post('/login ')
// router.post('/cambio contraseña') 
// router.put('/modificar')
// router.put('/activar')
// router.put('/desactivar')
// router.get('/listar todo')

import { httpUsuarios } from '../controllers/usuarios'
import { Router } from 'express'



router.get("/",httpUsuarios.getUsuarios)
router.get("/",httpUsuarios.getUsuarios)
router.post("/",httpUsuarios.postUsuarios)
router.post("/",httpUsuarios.postUsuarios)
router.post("/",httpUsuarios.postUsuarios)
router.post("/",httpUsuarios.postUsuarios)

const express = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = express.Router();
const {httpUsuarios}=require('../controllers/usuarios') 
const {usuarioHelper}=require('../helpers/usuarios')

router.get('/',[
    validarJWT,
    validarCampos   
],httpUsuarios.usuarioGet);

router.post('/',[   
   
    check('email', 'El documento es obligatorio!').not().isEmpty(),
    check('email').custom( usuarioHelper.existeEmail ),
    check('password', 'Password no es válido').isLength({ min: 8}),
    validarCampos       
],    httpUsuarios.usuarioPost);
     
router.post("/login", [
    check("email","El documento es obligatorio").not().isEmpty(),
    check("password","La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
    
],  httpUsuarios.login);


router.put('/activar/:id',[
    validarJWT, 
    check('id', 'No es un ID válido').isMongoId(),
    // check('id').custom(usuarioHelper.existeUsuarioID),
    validarCampos
],httpUsuarios.usuarioPutActivar);

router.put('/inactivar/:id',[
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(), 
    // check('id').custom(usuarioHelper.existeUsuarioID),
    validarCampos
],httpUsuarios.usuarioPutInactivar);

router.put('/modificar', [
    validarJWT, 
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'el apellido es obligatorio').not().isEmpty(),
    validarCampos
], httpUsuarios.putmodificarUsuario);

export default Router
