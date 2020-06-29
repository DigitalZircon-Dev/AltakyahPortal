<template>
  <div>
    <v-dialog v-model="SocialUsers" persistent max-width="500">
      <v-card>
        <!-- <v-card-title class="headline grey lighten-2" primary-title>
          Use Google's location service?
        </v-card-title> -->
        <v-card-text>
          <ul class="todolist-items">
                  <li
                    v-for="(user, index) in users"
                    :key="index"
                    class="list-group-item d-flex justify-content-between lh-condensed"
                  >
                    <div>
                      <h6 class="my-0">{{ user.fullName }}</h6>
                    </div>
                  </li>
                </ul>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="error"
        class="mr-4" @click="close">
            {{ $vuetify.lang.t('$vuetify.commonoprations.close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'SocialUsers',
  props: {
    id: {
      type: String,
      default: ''
    },
    isdisplaySocialUsers: {
      type: Boolean,
      default: false
    },
    socialUsersTypeId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      users: [],
      SocialUsers: this.isdisplaySocialUsers
    }
  },
  async created() {
    const vm = { sourceId: this.id, socialUsersTypeId: this.socialUsersTypeId }
    const data = await this.$store.dispatch('comment/fetchSocialUsers', vm)
    if (data.value !== null) {
      this.users = data.value
    } else {
      this.SocialUsers = false
    }
  },
  methods: {
    close() {
      this.SocialUsers = false
      this.$emit('close')
    }
  }
}
</script>
