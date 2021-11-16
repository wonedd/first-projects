const Sequelize = require('sequelize')

//Conexão com db
const sequelize = new Sequelize('usuarios', 'root', 'hyodu1999', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}