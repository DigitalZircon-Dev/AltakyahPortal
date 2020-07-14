<template>
  <div>
    <v-dialog v-model="skillEndorse" persistent max-width="500">
      <div class="cardModal">
        <v-card>
          <v-card-title class="py-2">
            <span class="headline">Skills & Endorsement</span>
            <v-spacer></v-spacer>
            <v-btn fab small icon color="red" @click.prevent="close()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="px-0">
            <v-container class="py-0">
              <v-row>
                <v-expansion-panels flat>
                  <v-expansion-panel
                    v-for="userSkillEndorse in userSkillEndorses"
                    :key="userSkillEndorse.id"
                    accordion
                  >
                    <v-expansion-panel-header disable-icon-rotate>
                      {{ userSkillEndorse.skillName }}
                      <span class="d-inline mx-2">
                        <v-chip>{{
                          userSkillEndorse.skillEndorses.length
                        }}</v-chip>
                      </span>
                      <template v-slot:actions>
                        <v-btn
                          depressed
                          dense
                          text
                          class="text-capitalize rounded-0"
                          @click.prevent="onDeleteUserSkill(userSkillEndorse.id)"
                        >
                          <img
                            src="~/assets/images/all/ic-trash.svg"
                            alt=""
                            width="18px"
                            class="ma-1"
                          />
                          Delete
                        </v-btn>
                      </template>
                    </v-expansion-panel-header>
                    <v-divider></v-divider>
                    <v-expansion-panel-content>
                      <v-list>
                        <template v-for="(skillEndorse,index) in userSkillEndorse.skillEndorses">
                          <v-list-item :key="skillEndorse.id">
                            <v-list-item-avatar class="mx-1">
                              <v-img
                                src="/_nuxt/assets/images/all/myteam-user.svg"
                                max-width="32px"
                                width="32px"
                                max-height="32px"
                              ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                              <v-list-item-title>
                                {{ skillEndorse.endorseBy }}
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                          <v-divider :key="index"></v-divider>
                        </template>
                      </v-list>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'UserSkillEndorses',
  props: {
    // id: {
    //   type: String,
    //   default: '',
    //   required
    // },
    // title: {
    //   type: String,
    //   default: '',
    //   required
    // },
    displayUserSkillEndorses: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userSkillEndorses: [],
      skillEndorse: this.displayUserSkillEndorses
    }
  },
  async created() {
    const vm = { userId: this.$route.query.userId }
    const data = await this.$store.dispatch(
      'userProfile/fetchSkillEndorses',
      vm
    )
    if (data.value !== null) {
      this.userSkillEndorses = data.value
    } else {
      this.skillEndorse = false
    }
  },
  methods: {
    close() {
      this.skillEndorse = false
      this.$emit('close')
    },
     async onDeleteUserSkill(_id) {
      const vm = { id: _id }
      const result = await this.$store.dispatch(
        'userProfile/deleteUserSkill',
        vm
      )
      if (result.value) {
        const index = this.userSkillEndorses.findIndex((f) => f.id === _id)
        this.userSkillEndorses.splice(index, 1)
        this.$emit('deleteItemUserSkill', _id)
      }
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
