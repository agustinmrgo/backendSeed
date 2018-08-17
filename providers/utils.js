// aqui van los metodos utilizados como ser Transoformar fechas, y cosas asi q se puedan utilizar en varios lados
// como por ej tb Primera Letra Mayuscula

var bcrypt = require('bcrypt');

exports.encriptarPassword = (password = '') => {
    return new Promise((resolve, reject) => {
        if (password.length == 0) {
            var respuesta = [{ 'codigo': 0, 'mensaje': "Debe ingresar una contraseña" }]
            return reject(respuesta);
        }
        const saltRounds = 12;
        bcrypt.hash(password, saltRounds)
            .then((passHashed) => {
                return resolve(passHashed)
            })
            .catch(() => {
                var respuesta = [{ 'codigo': -1, 'mensaje': "Problemas para encriptar el password" }]
                return reject(respuesta);
            })
    })
}

