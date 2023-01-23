export const books = [
    {
        id:1, 
        name: "Harry Potter y la Piedra Filosofal",
        price: 850,
        stock: 5,
        img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672252820/piedra_filosofal_ctcuog.jpg",
        category: "libros"
    },
    {
        id:2, 
        name: "Harry Potter y la Cámara Secreta",
        price: 720,
        stock: 3,
        img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672254287/camara_secreta_hb6uw4.jpg",
        category: "libros"
    },
    {
        id:3, 
        name: "Bufanda Hufflepuff",
        price: 642,
        stock: 2,
        img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672873749/bufanda_hufflepuff_fbijwk.jpg",
        category: "indumentaria"
    },
    {
        id:4, 
        name: "Varita Mágica Ollivander",
        price: 1280,
        stock: 7,
        img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672873749/varitas_sdvup4.png",
        category: "varitas"
    },
    {
        id:5, 
        name: "Vaso de Café Slytherin",
        price: 510,
        stock: 12,
        img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672873749/vaso_slytherin_tzdxzu.png",
        category: "vasos"
    }
]

const categories = [
    { id: "libros", description: "Libros"},
    { id: "indumentaria", description: "Indumentaria"},
    { id: "varitas", description: "Varitas"},
    { id: "vasos", description: "Vasos"}
]

export const getBooks = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(books)
    }, 2000)
});

export const getBook = (id) => {
    return new Promise((resolve) => {
        const prod = books.find(b => b.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    });
}

export const getCategories = () => {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    }))
}


  