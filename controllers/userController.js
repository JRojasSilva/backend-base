const { response } = require("express");

const Usuario = require('../models/Usuario');


const getUsuarios = async(req, res = response ) => {

    const usuarios = await Usuario.find();

    res.json({
        ok: true,
        msg: 'getUsuarios',
        usuarios
    })
}

const crearUsuario = async(req, res= response ) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        usuario = new Usuario( req.body );
    
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );


        await usuario.save();

        // Generar JWT
        const token = await generarJWT( usuario.id, usuario.nombre );
    
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            nombre: usuario.nombre,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

const actualizarUsuario = (req, res= response ) => {

    res.json({
        ok: true,
        msg: 'actualizarUsuario'
    })
}

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario
}