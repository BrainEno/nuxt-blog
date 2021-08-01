import registerGql from "@/apollo/mutations/register.gql"

export const state = () => ({
  user: {},
  isRegistered: false,
})

export const mutations = {
  registerUser: function (state, data) {
    state.isRegistered = data
  },
}

export const actions = {
  async register({ commit }, { username, email, password }) {
    let res = await this.app.apolloProvider.defaultClient.mutate({
      mutation: registerGql,
      variables: { username, email, password },
    })

    await commit("registerUser", res.data)
  },
}

export default async ({ store }) => {
  await store.dispatch("register")
}
