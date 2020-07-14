<template>
  <div>
    <v-dialog v-model="addUserSkill" persistent max-width="700">
      <div class="cardModal">
        <v-card>
          <v-card-title class="py-2">
            <span class="headline">{{
              $vuetify.lang.t('$vuetify.userSkill.adduserSkill')
            }}</span>
            <v-spacer></v-spacer>
            <v-btn fab small icon color="red" @click.prevent="close()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" sm="12" class="py-0">
                  <multiselect
                    id="userSkills"
                    :options="skills"
                    :searchable="true"
                    :selected="selectedSkills"
                    :multiple="true"
                    :taggable="true"
                    placeholder="اختر المهارات"
                    label="name"
                    track-by="name"
                    @tag="addSkills"
                    @input="updateSkills"
                  >
                  </multiselect>
                  <div
                    v-if="isDuplicateSkill == true"
                    class="input-feedback fount-color"
                  >
                    {{
                      $vuetify.lang.t(
                        '$vuetify.userSkill.validators.duplicateSkillError'
                      )
                    }}
                  </div>
                </v-col>

                <v-col cols="12" sm="12" class="py-0">
                  <v-row>
                    <v-chip
                      v-for="selectedSkill of selectedSkills"
                      :key="selectedSkill.id"
                      class="ma-1"
                      close
                      @click:close="removeSkill(selectedSkill.id)"
                    >
                      {{ selectedSkill.name }}</v-chip
                    >
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" class="py-0">
                  <v-btn
                    class="rounded-0 stc_color_white--text mr-3"
                    depressed
                    :disabled="userSkillsDtos.length == 0"
                    color="stc_color_oasislight"
                    @click.prevent="save()"
                  >
                    {{
                      $vuetify.lang.t('$vuetify.commonoprations.save')
                    }}</v-btn
                  >
                  <v-btn class="rounded-0" depressed @click.prevent="close()">{{
                    $vuetify.lang.t('$vuetify.commonoprations.close')
                  }}</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Multiselect from 'vue-multiselect'
import { mapState } from 'vuex'
export default {
  name: 'AddUserSkills',
  components: { Multiselect },
  props: {
    userSkillsDto: {
      type: Object,
      default: null,
      required
    },
    userSkills: {
      type: Array,
      default: null,
      required
    },
    displayUserSkill: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      skills: [],
      selectedSkills: [],
      userSkillsDtos: [],
      isDuplicateSkill: false,
      addUserSkill: this.displayUserSkill
    }
  },
  computed: {
    ...mapState(['userProfile', 'listOfskills'])
  },
  created() {
    this.fetchSkill()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async save() {
      const result = await this.$store.dispatch(
        'userProfile/addUserSkill',
        this.userSkillsDtos
      )
      if (result.value) {
        this.$emit('bindUserSkills', result.value)
        this.$emit('close')
        // this.$notify({
        //   title: this.$vuetify.lang.t('$vuetify.userSkill.userSkillTite'),
        //   text: this.$vuetify.lang.t('$vuetify.userSkill.notifications.save'),
        //   closeOnClick: true,
        //   type: 'success'
        // })
      }
    },
    async fetchSkill() {
      const result = await this.$store.dispatch('userProfile/fetchSkill')
      if (result.value) {
        this.skills = this.userProfile.listOfskills
      }
    },
    async addSkills(skill) {
      this.isDuplicateSkill = false
      const index = this.selectedSkills.findIndex((f) => f.name === skill.name)
      if (index === -1) {
        const skillDto = {
          name: skill
        }
        const result = await this.$store.dispatch(
          'userProfile/addSkill',
          skillDto
        )
        if (result.value) {
          this.selectedSkills.push(result.value)
          this.userSkillsDtos.push({
            skillId: result.value.id,
            skillName: result.value.name
          })
          this.$store.dispatch('userProfile/resetState')
        }
      }
    },
    removeSkill(id) {
      const index = this.selectedSkills.findIndex((f) => f.id === id)
      this.selectedSkills.splice(index, 1)
      this.userSkillsDtos.splice(index, 1)
    },
    updateSkills(skill) {
      this.isDuplicateSkill = false
      const index = this.userSkills.findIndex(
        (f) => f.skillName === skill[0].name
      )
      const indexLocal = this.selectedSkills.findIndex(
        (f) => f.name === skill[0].name
      )

      if (index === -1 && indexLocal === -1) {
        this.selectedSkills.push(skill[0])
        this.userSkillsDtos.push({
          skillId: skill[0].id,
          skillName: skill[0].name
        })
      } else {
        this.isDuplicateSkill = true
      }
    }
  }
}
</script>
<style scoped>
.fount-color {
  color: red;
}
</style>
