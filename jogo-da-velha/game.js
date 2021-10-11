const player1 = "X" 
const player2 = "O"
var playTime = player1;           //primeiro a começar
var gameOver = false;             //finalizar o loop  

atualizaMostrador();              //Chama as funções
inicializarEspacos();

function atualizaMostrador() {          //atualiza o espaço que exibe a vez do jogador                  
    if(gameOver){return;}              //quando o jogo acaba finaliza o loop
    
    if(playTime == player1){           //se a vez do jogador for X 
        var player = document.querySelectorAll('div#mostrador img')[0]; //captura a div e a tag img
        player.setAttribute('src',"x.png") //insere no atributo src a imagem do X
   
    } else{
        var player = document.querySelectorAll('div#mostrador img')[0]; //se não captura a div e a tag img
        player.setAttribute('src',"o.png") //insere no atributo src a imagem da O
    }
}

function inicializarEspacos(){           //cria a interação com o click e insere evento

    var espacos = document.getElementsByClassName('espaco'); // captura a div do jogo de velha
   for (var i=0;i<espacos.length;i++){  // percorre e itera toda a nodelist
        
    espacos[i].addEventListener('click',function(){ //adiciona o evento de click pra cada uma e chama uma função anônima
        if(gameOver){return;}  //quando o jogo acaba finaliza o loop
            
        if(this.getElementsByTagName('img').length == 0){ // se não tiver nenhuma img na div
                
            if(playTime == player1){     //se for a vez do X
                    this.innerHTML ="<img src='x.png'>"; //insere a tag img e a imagem na div
                    this.setAttribute("jogada", player1); //insere no atributo jogada o X
                    playTime = player2; //depois que a jogada acaba a vez passa pro jogador 2
               
                }else{
                    this.innerHTML ="<img src='o.png'>"; //se não insere a O
                    this.setAttribute("jogada", player2); // insere no atributo jogada a O
                    playTime = player1; //passa a vez pro X novamente
                
                }
                atualizaMostrador(); //atualiza mostrador
                verificarVencedor();
            }
        });
   }
}

function verificarVencedor(){
    var a1 = document.getElementById('a1').getAttribute('jogada')
    var a2 = document.getElementById('a2').getAttribute('jogada')
    var a3 = document.getElementById('a3').getAttribute('jogada')
    
    var b1 = document.getElementById('b1').getAttribute('jogada')
    var b2 = document.getElementById('b2').getAttribute('jogada')
    var b3 = document.getElementById('b3').getAttribute('jogada')

    var c1 = document.getElementById('c1').getAttribute('jogada')
    var c2 = document.getElementById('c2').getAttribute('jogada')
    var c3 = document.getElementById('c3').getAttribute('jogada')

    var vencedor = '';

    if((a1 == b1 && a1 == c1 && a1 != '') || (a1 == a2 && a1 == a3 && a1 != '') || (a1 == b2 && a1 == c3 && a1 != '')){
        vencedor = a1;
    }else((b2 == b1 && b2 == b3 && b2 != '') || (b2 == a2 && b2 == c2 && b2 !='') || ())
        vencedor = b2;
}