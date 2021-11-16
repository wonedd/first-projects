
sequelize.authenticate().then(function(){
    console.log('Conectado')
}).catch(function(){
    console.log('Falha ao se conectar' + erro)
})