import api  from '../../api/imgur';
import qs from 'qs';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => {
        return !!state.token;
    }
};


const actions = {

    // logout: ({ commit}) => {
    //     commit('setToken',null);
        
    // },

    finalizeLogin :({commit},hash)=>{
        const query=qs.parse(hash.replace('#',''));
        console.log(query);
        commit('setToken',query.access_token);


    },

    login : () =>{

        api.login();
    }

};

const mutations = {

    setToken: (state, token) => {
        state.token=token;
    }
};

export default{
    state: state,
    getters:getters,
    actions:actions,
    mutations:mutations
};