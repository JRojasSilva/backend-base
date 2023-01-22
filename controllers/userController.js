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

const crearUsuario = (req, res= response ) => {

    res.json({
        ok: true,
        msg: 'crearUsuario'
    })
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