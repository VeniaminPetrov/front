// import category from "@/store/category";
import {sum} from 'ramda'
import {getPaymentIntent} from '@/services/payment.service'


const mutations = {
    addToCart(state, product) {
        const productInCart = state.cartItems.find(({_id}) => product._id === _id) // проверка есть ли товар в корзине
        if(productInCart){
            const currentProductsInCart = state.cartItems
            state.cartItems = currentProductsInCart.filter(({_id}) => product._id !== _id)
        }else {
            state.cartItems.push(product)
        }

    },
    SetPaymentError(state, error) {
        state.paymentError = error
    }
}
const actions = {
    async handleBuy({getters , commit}){

        try {
            console.log('PROVERCA' , getters.cartTotalPrice)
            const intent= await getPaymentIntent({amount: getters.cartTotalPrice})
            console.log('INTENT' ,intent)
            return intent
        }catch (err){
            commit('SetPaymentError' , err)
        }


    }
}
const getters = {
    cartTotalPrice : ({cartItems})=> sum(cartItems.map(item => item.price)),
    cartCount: ({cartItems}) => cartItems.length,
    cart: ({cart}) => cart,
    cartItems: ({cartItems}) => cartItems,
    paymentError: ({paymentError}) => paymentError

}
const state = () => ({

    cart: {
        total:0
    },
    cartItems: [],
    paymentError :null
})

export default {
    mutations,
    actions,
    getters,
    state
}
