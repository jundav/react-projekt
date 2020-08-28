export default () => {
    return {
        cart: {
            add: "ADD_TO_CART",
            remove: "REMOVE_FROM_CART",
            checkout: "CHECKOUT_CART",
            clear: "CLEAR_CART"
        },
        products: {
            getProducts: 'GET_PRODUCTS',
            getProduct: 'GET_PRODUCT'
        }
    }
}
