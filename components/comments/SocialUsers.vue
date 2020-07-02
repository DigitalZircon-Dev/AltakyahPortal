<template>
  <div>
    <v-dialog v-model="SocialUsers" persistent max-width="500">
       <v-card
      max-width="500"
      class="mx-auto"
    >
       <v-list subheader>
        <v-list-item
         v-for="(user, index) in users"
            :key="index"
        >
          <v-list-item-avatar>
            <v-img src="/_nuxt/assets/images/all/user-img.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="user.fullName"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
