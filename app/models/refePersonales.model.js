module.exports = (sequelize, type) => {
    return sequelize.define('refePersonales', {
        //Llave Primaria.
        idRpersonal: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        numero_telefono: type.STRING,
        correo: type.STRING, 

    });
}