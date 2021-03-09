module.exports = (sequelize, type) => {
    return sequelize.define('experLaboral', {
        //Llave Primaria.
        idElaboral: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_empresa: type.STRING,
        cargo: type.STRING,
        anios_laborados: type.INTEGER, 

    });
}