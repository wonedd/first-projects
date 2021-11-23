const items = [
    {
        id:0,
        name:'Areia Amarela',
        type:'A2',
        img:'./pics/pedras-coloridas/areia-amarelaa2.jpg',
        price: 10
        
    },
    {
        id:1,
        name:'Areia Amarela',
        type:'A3',
        img:'./pics/pedras-coloridas/areia-amarelaa3.jpg',
        price: 10
        
    }, {
        id:2,
        name:'Areia Brindle',
        type:'A1',
        img:'./pics/pedras-coloridas/areia-brindlea1.jpg',
        price: 10
        
    }, {
        id:3,
        name:'Areia Brindle',
        type:'A2',
        img:'./pics/pedras-coloridas/areia-brindlea2.jpg',
        price: 10
        
    }, {
        id:4,
        name:'Areia Preta',
        type:'A1',
        img:'./pics/pedras-coloridas/areia-pretaa1.jpg',
        price: 10
        
    },
    {
        id:5,
        name:'Pedra Amarela',
        type:'1',
        img:'./pics/pedras-coloridas/pedra-amarela1.jpg',
        price: 10
        
    },
    {
        id:6,
        name:'Pedra Amarela',
        type:'2',
        img:'./pics/pedras-coloridas/pedra-amarela2.jpg',
        price: 10
        
    },
    {
        id:7,
        name:'Pedra Brindle',
        type:'1',
        img:'./pics/pedras-coloridas/pedra-brindle1.jpg',
        price: 10
        
    },
    {
        id:8,
        name:'Pedra Brindle',
        type:'2',
        img:'./pics/pedras-coloridas/pedra-brindle2.jpg',
        price: 10
        
    },
    {
        id:9,
        name:'Pedra Laranja',
        type:'1',
        img:'./pics/pedras-coloridas/pedra-laranja1.jpg',
        price: 10
        
    },
    {
        id:10,
        name:'Pedra Laranja',
        type:'2',
        img:'./pics/pedras-coloridas/pedra-laranja2.jpg',
        price: 10
        
    },
    {
        id:11,
        name:'Pedra Laranja',
        type:'3',
        img:'./pics/pedras-coloridas/pedra-laranja3.jpg',
        price: 10
        
    },
    {
        id:12,
        name:'Pedra Laranja',
        type:'4',
        img:'./pics/pedras-coloridas/pedra-laranja4.jpg',
        price: 10
        
    },
    {
        id:13,
        name:'Pedra Preta',
        type:'2',
        img:'./pics/pedras-coloridas/pedra-preta2.jpg',
        price: 10
        
    },
    {
        id:14,
        name:'Pedra Rosa',
        type:'1',
        img:'./pics/pedras-coloridas/pedra-rosa1.jpg',
        price: 10
        
    },
    {
        id:15,
        name:'Pedra Rosa',
        type:'2',
        img:'./pics/pedras-coloridas/pedra-rosa2.jpg',
        price: 10
        
    },
    {
        id:16,
        name:'Pedra Rosa',
        type:'3',
        img:'./pics/pedras-coloridas/pedra-rosa3.jpg',
        price: 10
        
    },
    {
        id:17,
        name:'Pedra verde',
        type:'1',
        img:'./pics/pedras-coloridas/pedra-verde1.jpg',
        price: 10
        
    },
    {
        id:18,
        name:'Pedra Verde',
        type:'2',
        img:'./pics/pedras-coloridas/pedra-verde2.jpg',
        price: 10
        
    },
    {
        id:19,
        name:'Pedra Verde',
        type:'3',
        img:'./pics/pedras-coloridas/pedra-verde3.jpg',
        price: 10
        
    },
    {
        id:20,
        name:'Pedra Volcano',
        type:'1',
        img:'./pics/pedras-coloridas/pedra-volcano1.jpg',
        price: 10
        
    },
    {
        id:21,
        name:'Pedra Volcano',
        type:'3',
        img:'./pics/pedras-coloridas/pedra-volcano3.jpg',
        price: 10
        
    },
    {
        id:22,
        name:'Pedra Volcano',
        type:'4',
        img:'./pics/pedras-coloridas/pedra-volcano4.jpg',
        price: 10
        
    },
    {
        id:23,
        name:'Pedra Wood',
        type:'1',
        img:'./pics/pedras-coloridas/pedra-wood1.jpg',
        price: 10
        
    },
    {
        id:24,
        name:'Pedra Wood',
        type:'2',
        img:'./pics/pedras-coloridas/pedra-wood2.jpg',
        price: 10
        
    },
    {
        id:25,
        name:'Pedra Wood',
        type:'4',
        img:'./pics/pedras-coloridas/pedra-wood4.jpg',
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