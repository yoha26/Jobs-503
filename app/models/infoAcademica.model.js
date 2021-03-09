module.exports = (sequelize, type) => {
    return sequelize.define('infoAcademica', {
        //Llave Primaria.
        idIacademica: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estudios_basicos: type.STRING,
        estudios_medios: type.STRING,
        estudios_avanzados: type.STRING, 
        anio_U: type.INTEGER,
        post_grado: type.STRING,
        maestria:  type.STRING,
        especialidad:  type.STRING,
        estudios_comple: type.STRING,
        idiomas: type.STRING
    });
}