/*
    Rutas de Usuarios / Auth
    host + /api/user
*/
const { Router } = require('express');
const { check } = require('express-validator')

const { validarJWT } = require('../middlewares/validar-jwt');
const { getUsuarios, crearUsuario, actualizarUsuario } = require('../controllers/userController')

const router = Router();
router.use( validarJWT );

router.get('/', getUsuarios );

router.post('/', crearUsuario );

router.put('/:id', actualizarUsuario );


module.exports = router;