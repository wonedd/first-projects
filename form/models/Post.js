const db = require('./db')

const Post = db.sequelize.define('users',{
    nome: {
        type:db.Sequelize.STRING
    },
    endereco: {
        type:db.Sequelize.STRING
    },
    numero: {
        type:db.Sequelize.INTEGER
    },
    estado: {
        type:db.Sequelize.STRING
    },
    cidade: {
        type:db.Sequelize.STRING
    },
    cep: {
        type:db.Sequelize.STRING
    },
    cpf:{
        type:db.Sequelize.STRING
    }
    
    
   
})
module.exports = Post
/* Post.sync({force: true}) */