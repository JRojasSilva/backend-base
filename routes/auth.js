/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post(
    '/new',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email no es valido').isEmail(),
        check('password', 'El password debe ser de 8 caracteres').isLength({ min: 8}),
        validarCampos
    ],
    crearUsuario );

router.post(
    '/',
    [
        check('email', 'El email no es valido').isEmail(),
        check('password', 'El password debe ser de 8 caracteres').isLength({ min: 8}),
        validarCampos
    ],
    loginUsuario );

router.get('/renew', validarJWT ,revalidarToken )

module.exports = router;