// import category from "@/store/category";
import {sum} from 'ramda'


const mutations = {
    addToCart(state, product) {
        console.log(product)
        state.cartItems.push(product)
    }
}
const actions = {}
const getters = {
    cartTotalPrice : ({cartItems})=> sum(cartItems.map(item => item.price)),
    cartCount: ({cartItems}) => cartItems.length,
    cart: ({cart}) => cart,
    cartItems: ({cartItems}) => cartItems,


}
const state = () => ({

    cart: {
        total:0
    },
    cartItems: []
})

export default {
    mutations,
    actions,
    getters,
    state
}
