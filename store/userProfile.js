export const state = () => ({
  listOfskills: []
})

export const getters = {
  listSkills: (state) => {
    return state.listOfskills
  }
}

export const mutations = {
  SET_SKILLS (state, skills)  {
    state.listOfskills = skills
  },
  RESET (state) {
    state.listOfskills = undefined
  }
}

export const actions = {
  async fetchProjects ({ commit }, vm) {
    try {
      const { data } = await this.$repositories.userProfile.fetchProjects(vm)

      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: data.errors }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async addOrEditProject  ({ commit }, dto) {
    try {
      const { data } = await this.$repositories.userProfile.addOrEditProject(dto)
      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: data.errors }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async deleteProjec ({ commit }, dto){
    try {
      const { data } = await this.$repositories.userProfile.deleteProject(dto)
      return { value: data.isValid, error: '' }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async fetchProject  ({ commit }, vm) {
    try {
      const { data } = await this.$repositories.userProfile.fetchProject(vm)
      return { value: data.value, error: '' }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async fetchTeamMembers () {
    try {
      const { data } = await this.$repositories.userProfile.fetchTeamMembers()
      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: data.errors }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async fetchUserRecommendations ({ commit }, vm){
    try {
      const { data } = await this.$repositories.userProfile.fetchUserRecommendations(vm)
      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: data.errors }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async addOrEditUserRecommendation  ({ commit }, dto) {
    try {
      const { data } = await this.$repositories.userProfile.addOrEditUserRecommendation(
        dto
      )
      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: data.errors }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async deleteUserRecommendation ({ commit }, dto){
    try {
      const { data } = await this.$repositories.userProfile.deleteUserRecommendation(dto)
      return { value: data.isValid, error: '' }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async fetchUserRecommendation  ({ commit }, vm) {
    try {
      const { data } = await this.$repositories.userProfile.fetchUserRecommendation(vm)
      return { value: data.value, error: '' }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async activedRecommendation ({ commit }, dto) {
    try {
      const { data } = await this.$repositories.userProfile.activedRecommendation(dto)
      return { value: data.result.value, error: '' }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async fetchUserSkills ({ commit }, vm){
    try {
      const { data } = await this.$repositories.userProfile.fetchUserSkills(vm)
      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: data.errors }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async addUserSkill ({ commit }, dto){
    try {
      const { data } = await this.$repositories.userProfile.addUserSkill(dto)
      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: '' }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async onEndorse ({ commit }, dto) {
    try {
      const { data } = await this.$repositories.userProfile.onEndorse(dto)
      return { value: data.isValid, error: '' }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async fetchUserSkillEndorses({ commit }, vm){
    try {
      const { data } = await this.$repositories.userProfile.fetchUserSkillEndorses(vm)
      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: '' }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async deleteUserSkill({ commit }, dto){
    try {
      const { data } = await this.$repositories.userProfile.deleteUserSkill(dto)
      return { value: data.isValid, error: '' }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async fetchSkill ({ commit, state }) {
    try {
      debugger
      if (state.listOfskills !== undefined && state.listOfskills.length > 0) {
        return { value: state.listOfskills, error: '' }
      }
      const { data } = await this.$repositories.userProfile.fetchSkill()
      if (data.isValid) {
        commit('SET_SKILLS', data.value)
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: '' }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  async addSkill ({ commit }, dto){
    try {
      const { data } = await this.$repositories.userProfile.addSkill(dto)
      return { value: data.value, error: '' }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
  resetState({ commit }) {
    commit('RESET')
  },
  async fetchLastKPI({ commit }, vm){
    try {
      const { data } = await this.$repositories.userProfile.fetchLastKPI(vm)
      if (data.isValid) {
        return { value: data.value, error: '' }
      } else {
        return { value: null, error: '' }
      }
    } catch (e) {
      return { value: null, error: e.response }
    }
  },
}
