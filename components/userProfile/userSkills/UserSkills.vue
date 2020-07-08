<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-card-title class="headline">
          {{
            $vuetify.lang.t('$vuetify.userSkill.userSkillTite')
          }} <v-btn icon color="purple" @click.prevent="displayAddUserSkill">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        </v-card-title>
        <v-col cols="12">
          <v-card class="mx-auto">
          <UserSkill
            v-for="userSkill in userSkills"
            :key="userSkill.id"
            :user-skill="userSkill"
            @deleteItemUserSkill="deleteItemUserSkill"
          ></UserSkill>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AddUserSkill
      v-if="isDisplayAddUserSkill"
      :user-skills-dto="userSkillsDto"
      :user-skills="userSkills"
      :display-user-skill="isDisplayAddUserSkill"
      @bindUserSkills="bindUserSkills"
      @close="close"
    ></AddUserSkill>
  </div>
</template>

<script>
import Vue from 'vue'
import UserSkill from '../userSkills/UserSkill'
import AddUserSkill from '../userSkills/AddUserSkill'

export default Vue.extend({
  name: 'UserSkills',
  components: { UserSkill, AddUserSkill },
  data() {
    return {
      id: '',
      userSkills: [],
      userSkillsDto: {},
      isDisplayAddUserSkill: false
    }
  },
  created() {
    this.fetchUserSkillss()
  },
  methods: {
    close() {
      this.isDisplayAddUserSkill = false
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
    }
  }
})
</script>
