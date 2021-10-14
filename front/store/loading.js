export const state = () => ({
  isLoading: false
});

export const mutations = {
  setLoading(state, payload) {
    state.isLoading = payload
  }
};

export const actions = {
  setLoading(context, data) {
    console.log("呼び出されている？")
    context.commit('setLoading', data)
  }
};