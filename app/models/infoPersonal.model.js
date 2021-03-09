module.exports = (sequelize, type) => {
    return sequelize.define('infoPersonal', {
        //Llave Primaria.
        idIPersonal: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: type.STRING,
        apellidos: type.STRING,
        imgURL: type.STRING, 
        edad: type.INTEGER,
        estado_civil: type.STRING,
        DUI:  type.STRING(10),
        NIT:  type.STRING(17),
        direccion: type.STRING,
        ISSS: type.STRING,
        fecha_nacimiento: type.DATE,
        nacionalidad: type.STRING,
    });
}