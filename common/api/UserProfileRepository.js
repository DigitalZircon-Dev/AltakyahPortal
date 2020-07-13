import {USERPROFILE} from '../constants'
import helper from '../../common/helpers/Utils'

export  default ($axios) => ({
  // Start project oprations
  async addOrEditProject(projectDto) {
    return await $axios.post(USERPROFILE.ADD_OR_EDIT_PROJECT, projectDto)
  },
  async fetchProjects(vm) {
    return await $axios.get(USERPROFILE.FETCH_PROJECTS + vm.userId)
  },
  async fetchProject(vm) {
    return await $axios.get(USERPROFILE.FETCHP_ROJECT + vm.id)
  },
  async deleteProject(projectDto) {
    return await $axios.post(USERPROFILE.DELETE_PROJECT, projectDto)
  },
  async fetchTeamMembers() {
    debugger
    return await $axios.get(USERPROFILE.FETCH_TEAM_MEMBERS)
  },
  // End project oprations

  // Start recommendation oprations
  async addOrEditUserRecommendation(userRecommendationDto) {
    return await $axios.post(
      USERPROFILE.ADD_OR_EDIT_USER_RECOMMENDATION,
      userRecommendationDto
    )
  },
  async fetchUserRecommendations(vm) {
    return await $axios.get(
      USERPROFILE.FETCH_USER_RECOMMENDATIONS + vm.userId
    )
  },
  async fetchUserRecommendation(vm) {
    return await $axios.get(
      USERPROFILE.FETCH_USER_RECOMMENDATION + vm.id
    )
  },
  async deleteUserRecommendation(userRecommendationDto) {
    return await $axios.post(
      USERPROFILE.DELETE_USER_RECOMMENDATION,
      userRecommendationDto
    )
  },
  async activedRecommendation(userRecommendationDto) {
    return await $axios.post(
      USERPROFILE.ACTIVED_RECOMMENDATION,
      userRecommendationDto
    )
  },
  // End recommendation oprations

  // Start recommendation user skills
  async fetchUserSkills(vm) {
    return await $axios.get(USERPROFILE.FETCH_USER_SKILLS + vm.userId)
  },
  async addUserSkill(userSkillsDto) {
    return await $axios.post(USERPROFILE.ADD_USER_SKILL, userSkillsDto)
  },
  async deleteUserSkill(userSkillsDto) {
    return await $axios.post(USERPROFILE.DELETE_USER_SKILL, userSkillsDto)
  },
  async onEndorse(userSkillsDto) {
    return await $axios.post(USERPROFILE.ON_ENDORSE, userSkillsDto)
  },
  async fetchUserSkillEndorses(vm) {
    return await $axios.get(
      USERPROFILE.FETCH_USER_SKILL_ENDORSES + vm.userSkillId
    )
  },
  async fetchSkill() {
    return await $axios.get(USERPROFILE.FETCH_SKILL)
  },
  async addSkill(skillsDto) {
    return await $axios.post(USERPROFILE.ADD_SKILL, skillsDto)
  }// End recommendation user skills
  ,
  async fetchLastKPI(vm) {
    return await $axios.get(
      USERPROFILE.FETCH_LAST_KPI + vm.userId
    )
  }
})

