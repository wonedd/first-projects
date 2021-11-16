const express = require('express')
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.get('/', function(req, res){
    res.send('Muito Obrigado!')
})
app.get('/form', function(req,res){
    res.render('formulario')
})
app.post('/add', function(req,res){
   Post.create({
       nome: req.body.nome,
       endereco: req.body.endereco,
       numero: req.body.numero,
       estado: req.body.estado,
       cidade: req.body.cidade,
       cep: req.body.cep,
       cpf: req.body.cpf
   }).then(function(){
       res.redirect('/')
   }).catch(function(erro){
       res.send('Houve um erro: ' + erro)
   })
})
app.listen(8081, function(){
    console.log('SERVER ON')
})