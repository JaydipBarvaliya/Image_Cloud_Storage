import api  from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => {
        return !!state.token;
    }
};


const actions = {

    logout: ({ commit}) => {
        commit('setToken',null);
        console.log("u are supposed to logout from console");
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