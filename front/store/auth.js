export const state = () => ({
  currentUser: null
});

export const mutations = {
  setUser(state, payload) {
    state.currentUser = payload
  },
};

export const actions = {
  setUser (context, data) {
    context.commit('setUser', data)
  }
};