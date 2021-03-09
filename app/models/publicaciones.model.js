module.exports = (sequelize, type) => {
    return sequelize.define('publicaciones', {
        //Llave Primaria.
        idPublicaciones: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: type.STRING,
        requerimientos: type.STRING,
        paga: type.STRING, 
        estado: type.BOOLEAN,
        //llave forarea
        idIempresa: type.INTEGER
    });
}