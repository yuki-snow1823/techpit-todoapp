export const state = () => ({
  success: {
    message: "",
    status: false
  }
});

export const mutations = {
  setNotice(state, payload) {
    state.success = payload
  }
};

export const actions = {
  setNotice(context, data) {
    context.commit('setNotice', data)
  }
};
