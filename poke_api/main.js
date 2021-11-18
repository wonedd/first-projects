function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}



function main(){
  
   let data = fazGet('https://pokeapi.co/api/v2/pokemon/')
   let pokemons = JSON.parse(data)
   let tabela = document.getElementById('tabela')
  
    
   pokemons.results.forEach(element => {
    let url = element.url
    
    let num = url.split("/")
    let ids = num[6]
  

      tabela.innerHTML += `
       <div class="container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`+ids+`.png"/>
            <p>`+element.name+`</p>
         
       </div>
       `
   })
}      
   
main()  

    
     
 

    
       

      


    
   


   
   

  
  
  