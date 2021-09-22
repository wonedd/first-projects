setTimeout(function(){
    var buttonPlay = document.getElementById('entrar')
   buttonPlay.style.display = "none";
   }, 0);
   
   setTimeout(function(){
       var buttonPlay= document.getElementById('entrar')
       buttonPlay.style.display = "inline";
   }, 10000);
   var time = 10000
   function start(){
       setInterval(() => {
           //troca de imagem
       }, time);
   }