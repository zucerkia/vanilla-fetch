const $products = document.querySelector('#products')

/**
 * Función que crea un string con estructura HTML
 */
const createElement = (product) => {
    const { title, description, price } = product

    const item = `
        <li class='product'>
            <h3>${title}</h3>
            <small>$${price}</small>
            <p>${description}</p>
        </li>
    `
    return item
}

/**
 * funcion que obtiene la data de la Dummy API con THEN
 */
const getDataThen = () => {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then((jsonResponse) => {
            renderProducts(jsonResponse.products)
        })
}

/**
 * funcion que obtiene la data de la Dummy API con ASYNC / AWAIT
 */
const getDataAsync = async () => {
    const productsRequest = await fetch('https://dummyjson.com/products')
    const { products } = await productsRequest.json()

    renderProducts(products)
}

/**
 * Función que muestra en el DOM todos los productos dado un Array
 */
const renderProducts = (products) => {
    const allProducts = products.map((product) => {
        const { title, description, price } = product
        return createElement({
            title: title,
            description: description,
            price: price
        })
    })

    $products.innerHTML = allProducts.join('')
}


document.addEventListener('DOMContentLoaded', getDataAsync)
// document.addEventListener('DOMContentLoaded', getDataThen)

