module.exports = (sequelize, type) => {
    return sequelize.define('infoEmpresa', {
        //Llave Primaria.
        idIempresa: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres_empresa: type.STRING,
        categoria: type.STRING,
        imgURL: type.STRING, 
        direccion: type.INTEGER,
        sucursales: type.STRING,
        numero_telefono:  type.STRING,
        correo:  type.STRING,
    });
}