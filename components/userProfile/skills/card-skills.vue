<template>
  <div class="card-information skillsBx">
    <div class="card-header">
       <p>{{ $vuetify.lang.t('$vuetify.userSkill.userSkillTite')}}</p>
      <div class="action">
        <a href="#" @click.prevent="displayAddUserSkill" class="addBtn">
          <img src="~/assets/images/card/card-plus.svg" alt="" />
          Add
        </a>
        <a href="#" class="Expand"
        @click.prevent="displayUserSkillEndorses()"
        >
          <img src="~/assets/images/card/card-expand.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <div class="skill-items">
        <!-- <v-chip class="ma-1 itm"
          v-for="userSkill in userSkills"
          :key="userSkill.id"
        >{{ userSkill.skillName }} <v-avatar>.{{ 2 }}</v-avatar></v-chip> -->
      <cardkill
          v-for="userSkill in userSkills"
            :key="userSkill.id"
            :user-skill="userSkill"
            @deleteItemUserSkill="deleteItemUserSkill"
      ></cardkill>
      </div>
    </div>
    <AddUserSkill
      v-if="isDisplayAddUserSkill"
      :user-skills-dto="userSkillsDto"
      :user-skills="userSkills"
      :display-user-skill="isDisplayAddUserSkill"
      @bindUserSkills="bindUserSkills"
      @close="close"
    ></AddUserSkill>
    <UserSkillEndorse
      v-if="isDisplayUserSkillEndorses"
      :display-user-skill-endorses="isDisplayUserSkillEndorses"
      @close="close"
      @deleteItemUserSkill="deleteItemUserSkill"
    ></UserSkillEndorse>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import cardkill from '../skills/card-skill'
import AddUserSkill from '../skills/AddUserSkill'
import UserSkillEndorse from '../skills/UserSkillEndorse'


export default Vue.extend({
 name: 'cardSkills',
  components: {cardkill,AddUserSkill,UserSkillEndorse},
  data() {
    return {
      id: '',
      userSkills: [],
      userSkillsDto: {},
      isDisplayAddUserSkill: false,
      isDisplayUserSkillEndorses:false
    }
  },
  created() {
    this.fetchUserSkillss()
  },
  methods: {
    close() {
      this.isDisplayAddUserSkill = false
      this.isDisplayUserSkillEndorses = false
    },
    async fetchUserSkillss() {
      const vm = { userId: this.$route.query.userId }
      const result = await this.$store.dispatch(
        'userProfile/fetchUserSkills',
        vm
      )
      if (result.value) {
        this.userSkills = result.value
      }
    },
    deleteItemUserSkill(_id) {
      const index = this.userSkills.findIndex((f) => f.id === _id)
      this.userSkills.splice(index, 1)
    },
    displayAddUserSkill() {
      this.userSkillsDto = {
        Id: '',
        SkillId: '',
        skills: []
      }
      this.isDisplayAddUserSkill = true
    },
    bindUserSkills(userSkills) {
      const self = this
      userSkills.forEach((value) => {
        self.userSkills.push(value)
      })
    },
       displayUserSkillEndorses() {
      this.isDisplayUserSkillEndorses = true
    },
  }
})
</script>
