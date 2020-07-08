<template>
  <div>
    <v-dialog v-model="userSkillEndorse" persistent max-width="500">
      <v-card>
        <v-card-title class="headline" primary-title>
          {{ title }}
        </v-card-title>
        <v-card-text>
          <v-list subheader>
            <v-list-item
              v-for="(userSkillEndorse, index) in userSkillEndorses"
              :key="index"
            >
              <v-list-item-avatar>
                 <v-img src="/_nuxt/assets/images/all/user-img.png"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-text="userSkillEndorse.endorseBy"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
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

export default {
  name: 'UserSkillEndorses',
  props: {
    id: {
      type: String,
      default: '',
      required
    },
    title: {
      type: String,
      default: '',
      required
    },
    displayUserSkillEndorses: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userSkillEndorses: [],
      userSkillEndorse: this.displayUserSkillEndorses
    }
  },
  async created() {
    const self = this
    const vm = { userSkillId: self.id }
    const data = await this.$store.dispatch(
      'userProfile/fetchUserSkillEndorses',
      vm
    )
    if (data.value !== null) {
      this.userSkillEndorses = data.value
    } else {
      this.userSkillEndorse = false
    }
  },
  methods: {
    close() {
      this.userSkillEndorse = false
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.attachment-container {
  padding: 5px;
  margin-right: -60px;
}
</style>
