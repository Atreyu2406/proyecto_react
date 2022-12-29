export const books = [
    {
        id:1, 
        name: "Harry Potter y la Piedra Filosofal",
        editorial: "Salamandra",
        price: 850,
        paginas: 425,
        tapa: "Dura",
        img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672252820/piedra_filosofal_ctcuog.jpg",
        category: "libros"
    },
    {
        id:2, 
        name: "Harry Potter y la Cámara Secreta",
        editorial: "Salamandra",
        price: 720,
        paginas: 521,
        tapa: "Dura",
        img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672254287/camara_secreta_hb6uw4.jpg",
        category: "libros"
    },
    {
        id:3, 
        name: "Harry Potter y el Prisionero de Azkabán",
        editorial: "Salamandra",
        price: 642,
        paginas: 820,
        tapa: "Dura",
        img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672254337/prisionero_azkaban_zybwgh.jpg",
        category: "libros"
    },
    // {
    //     id:4, 
    //     name: "Harry Potter y el Prisionero de Azkabán",
    //     editorial: "Salamandra",
    //     price: 642,
    //     paginas: 820,
    //     tapa: "Dura",
    //     img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672155892/samples/ecommerce/shoes.png",
    //     category: "zapatillas"
    // },
    // {
    //     id:5, 
    //     name: "Harry Potter y el Prisionero de Azkabán",
    //     editorial: "Salamandra",
    //     price: 642,
    //     paginas: 820,
    //     tapa: "Dura",
    //     img: "https://res.cloudinary.com/dwzuvamqz/image/upload/v1672155896/samples/ecommerce/leather-bag-gray.jpg",
    //     category: "remeras"
    // }
]
export const getBooks = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(books)
    }, 1000)
});

export const getBook = (id) => {
    return new Promise((resolve) => {
        const prod = books.find(b => b.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    });
}

// export const getBook = new Promise ((resolve) => {
//     setTimeout(() => {
//         resolve(books[0])
//     }, 2000)
// });


  