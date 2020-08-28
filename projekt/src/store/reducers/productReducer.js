import actiontypes from '../actiontypes'

const initState = {
    products:[],
    product:{}
}

export default (state = initState, action) => {
    switch(action.type) {
        case actiontypes().products.getProducts:
            state.products = action.payload
            return state

        case actiontypes().products.getProduct:
            state.product = action.payload
            return state

        default: 
            return state
    }
}