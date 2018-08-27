import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    startingPlayers: [],
    substitutions: []
}

const mutations = {
    setStartingPlayers (state, startingPlayers) {
        state.startingPlayers = startingPlayers
    },
    setSubstitutions (stae, substitutions) {
        state.substitutions = substitutions
    }
}

const actions = {
    updateStartingPlayers: ({ commit }, startingPlayers) => {
        commit('setStartingPlayers', startingPlayers)
    },
    updateSubstitutions: ({commit}, substitutions) => {
        commit('setSubstitutions', substitutions)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})