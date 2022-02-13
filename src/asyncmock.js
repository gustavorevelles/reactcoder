const products = [
    {
        id:1, 
        name:'Esquís Faction 080',
        stock:3, 
        price:'300',
        category:'esquis',
        description: 'Lorem ipsum dolor consecuter',
        img:'./images/img-p-1.jpg'
    },
    {
        id:2, 
        name:'Esquís Salomón',
        stock:3, 
        price:'230',
        category:'esquis',
        description: 'Lorem ipsum dolor consecuter',
        img:'./images/img-p-2.jpg'
    },
    {
        id:3, 
        name:'Tabla Snowboard Fill',
        stock:3, 
        price:'600',
        category:'tablas',
        description: 'Lorem ipsum dolor consecuter',
        img:'./images/img-p-3.jpg'
    },
    {
        id:4, 
        name:'Botas SPK2',
        stock:3, 
        price:'300',
        category:'Botas',
        description: 'Lorem ipsum dolor consecuter',
        img:'./images/img-p-4.jpg'
    }
]

export const getProducts = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve(products)
    },2000);
})