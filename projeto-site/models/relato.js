module.exports = (sequelize, DataTypes) => {
    let Relatos = sequelize.define('Relatos', {
        id: {
            field: 'id_relato',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            field: 'titulo',
            type: DataTypes.STRING,
            allowNull: false
        },
        local_viagem: {
            field: 'local_viagem',
            type: DataTypes.STRING,
            allowNull: false
        },
        link: {
            field: 'link',
            type: DataTypes.STRING,
            allowNull: true
        },
        relato: {
            field: 'relato',
            type: DataTypes.STRING,
            allowNull: false
        },
        fk_usuario: {
            field: 'fk_usuario',
            type: DataTypes.INTEGER,
            allowNull: true
        }

    }, {
        tableName: 'relatos',
        freezeTableName: true,
        underscored: true,
        timestamps: false,
    });

    return Relatos;
};