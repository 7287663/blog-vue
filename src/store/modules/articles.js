const state = {
  blogId: ''
}

const mutations = {
  SAVE_BLOG_ID: (state, id) => {
    state.blogId = id
  }
}

const actions = {
  saveBlogId({commit}, id) {
    commit('SAVE_BLOG_ID', id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}