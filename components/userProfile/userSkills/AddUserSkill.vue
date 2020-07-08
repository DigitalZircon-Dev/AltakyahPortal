<template>
  <div>
    <v-dialog v-model="addUserSkill" persistent max-width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{ $vuetify.lang.t('$vuetify.userSkill.adduserSkill') }}
        </v-card-title>
        <v-card-text>
          <form>
            <label for="userSkills"> </label>
            <br>

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
            <div class="card-information">
              <div class="card-body">
                <v-chip
                  v-for="selectedSkill of selectedSkills"
                  :key="selectedSkill.id"
                  class="ma-2"
                  close
                  color="purple"
                  text-color="white"
                  @click:close="removeSkill(selectedSkill.id)"
                >
                  <v-avatar left>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-avatar>
                  {{ selectedSkill.name }}
                </v-chip>
              </div>
            </div>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            :disabled="userSkillsDtos.length == 0"
            @click.prevent="save()"
          >
            {{ $vuetify.lang.t('$vuetify.commonoprations.save') }}
          </v-btn>
          <v-btn color="error" @click.prevent="close()">
            {{ $vuetify.lang.t('$vuetify.commonoprations.close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
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
