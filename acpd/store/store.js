const items = [
    {
        id:0,
        name:'Areia Branca',
        type:'A0',
        img:'./pics/pedras-brancas/areia-a0.jpg',
        price: 10
        
    },
    {
        id:1,
        name:'Areia Branca',
        type:'A1',
        img:'./pics/pedras-brancas/areia-a1.jpg',
        price: 10
        
    },
    {
        id:2,
        name:'Areia Branca',
        type:'A2',
        img:'./pics/pedras-brancas/areia-a2.jpg',
        price: 10
        
    },
    {
        id:3,
        name:'Pedra Branca',
        type:'1',
        img:'./pics/pedras-brancas/pedra-a1.jpg',
        price: 10
        
    },
    {
        id:4,
        name:'Pedra Branca',
        type:'2',
        img:'./pics/pedras-brancas/pedra-a2.jpg',
        price: 10
        
    },
    {
        id:5,
        name:'Pedra Branca',
        type:'3',
        img:'./pics/pedras-brancas/pedra-a3.jpg',
        price:10
        
    },
    {
        id:6,
        name:'Pedra Branca',
        type:'4',
        img:'pics/pedras-brancas/pedra-a4.jpg',
        price: 10
        
    },
    {
        id:7,
        name:'Pedra Branca',
        type:'5',
        img:'pics/pedras-brancas/pedra-a5.jpg',
        price: 10
        
    }
]

startStore = () =>{
    let containerProduts = document.getElementById('produtos')
    items.map((val) =>{
        containerProduts.innerHTML += `
            <div class="item">      
            <img src="`+val.img+`">
            <p>`+val.name +' '+ val.type +`</p>
            <button id="btn-buy">Compre Já</button>
            </div>
        `

    
    })
}

startStore();