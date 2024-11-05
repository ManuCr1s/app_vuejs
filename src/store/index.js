import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        auth:null
    },
    mutations:{
        setAuth (state,auth){
            state.auth = auth
        }
    },
    actions:{
        setAuth({commit}){
            if(localStorage.getItem('auth')){
                commit('setAuth',JSON.parse(localStorage.getItem('auth')));
            }
        },
        logout({ commit }) {
            localStorage.removeItem('auth');
            commit('setAuth', null);
            location.reload();
        },
    },
    module:{}
})