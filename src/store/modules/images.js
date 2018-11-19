import api from '../../api/imgur';
const state = {
    images: []

};

const getters = {
    allimages: (state) => {
       return state.images;

    }
};

const actions = {

    async fetchImages ({ rootState,commit }){
        const { token }=rootState.auth;
        const response = await api.fetchimages(token);
        console.log(response);
        commit('setImages',response.data.data);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images=images;
    }
 
};

export default{
    state: state,
    getters:getters,
    actions:actions,
    mutations:mutations
};