export const state = () => ({
  message: "",
});

export const mutations = {
  setLoading(state, payload) {
    state.message = payload
  }
};

export const actions = {
  setLoading(context, data) {
    context.commit('setLoading', data)
  }
};
