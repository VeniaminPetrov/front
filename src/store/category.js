import {getCategory, getCategories} from "@/services/categories.service";

const mutations = {
    SetCategory(state, category) {
        state.category = category
    },
    SetCategories(state, categories) {
        state.categories = categories
    },
    SetCategoryError(state, error) {
        state.categoryError = error
    }
}
const actions = {
    async fetchCategory({commit}, id) {
        try {
            const category = await getCategory(id)
            commit('SetCategory', category)
        } catch (err) {
            commit('SetCategoryError', err)
        }
    },
    async fetchCategories({commit}) {
        try {
            const categories = await getCategories()
            commit('SetCategories', categories)
        } catch (err) {
            commit('SetCategoryError', err)
        }
    }
}
const getters = {
    category: ({category}) => category,
    categories: ({categories}) => categories,
    categoryError: ({categoryError}) => categoryError
}
const state = () => ({
    category: {},
    categories: [],
    categoryError: null
})


export default {
    mutations,
    actions,
    getters,
    state
}
