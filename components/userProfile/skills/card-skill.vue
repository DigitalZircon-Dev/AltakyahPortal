<template>
  <div>
     <li>
          <a href="#">  {{ userSkill.skillName }} <span v-if="countEndorse > 0"
             @click.prevent="displayUserSkillEndorses(userSkill.id, userSkill.skillName)">  {{ countEndorse }}</span></a>
        </li>
        <UserSkillEndorse
      v-if="isDisplayUserSkillEndorses"
      :id="id"
      :display-user-skill-endorses="isDisplayUserSkillEndorses"
      :title="skillName"
      @close="close"
    ></UserSkillEndorse>
    <ModalConfirmation
      v-if="isDisplayDeleteUserSkill"
      :item-id="id"
      :isopen="isDisplayDeleteUserSkill"
      :title="$vuetify.lang.t('$vuetify.commonoprations.delete')"
      :message="$vuetify.lang.t('$vuetify.messages.deleteConfirmation')"
      @method="onDeleteUserSkill"
      @close="close"
    ></ModalConfirmation>
  </div>

</template>

<script>
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import BaseIcon from '../../shared/BaseIcon'
import UserSkillEndorse from '../skills/UserSkillEndorse'
import ModalConfirmation from '@/components/shared/ModalConfirmation'

export default Vue.extend({
  name: 'UserSkill',
  components: {
    BaseIcon,
    UserSkillEndorse,
    ModalConfirmation
  },
  props: {
    userSkill: {
      type: Object,
      default: null,
      required
    }
  },
  data() {
    return {
      isEndorse: this.userSkill.isEndorse,
      id: '',
      countEndorse:
        this.userSkill.skillEndorses == null
          ? 0
          : this.userSkill.skillEndorses.length,
      isDisplayUserSkillEndorses: false,
      isDisplayDeleteUserSkill: false,
      skillName: ''
    }
  },
  methods: {
    async onEndorse(_isEndorse) {
      this.userSkill.isEndorse = _isEndorse
      this.userSkill.userId = this.$route.query.userId

      const result = await this.$store.dispatch(
        'userProfile/onEndorse',
        this.userSkill
      )

      if (result.value) {
        this.isEndorse = _isEndorse
        this.countEndorse = _isEndorse
          ? (this.countEndorse += 1)
          : (this.countEndorse -= 1)
      }
    },
    displayUserSkillEndorses(_id, _skillName) {
      this.id = _id
      this.skillName = _skillName + '(' + this.countEndorse + ')'
      this.isDisplayUserSkillEndorses = true
    },
    close() {
      this.isDisplayUserSkillEndorses = false
      this.isDisplayDeleteUserSkill = false
    },
    displayDeleteUserSkill(_id) {
      this.id = _id
      this.isDisplayDeleteUserSkill = true
    },
    async onDeleteUserSkill(_id) {
      const vm = { id: _id }
      const result = await this.$store.dispatch(
        'userProfile/deleteUserSkill',
        vm
      )
      if (result.value) {
        this.$emit('deleteItemUserSkill', _id)
        this.isDisplayDeleteUserSkill = false

        // this.$notify({
        //   title: this.$vuetify.lang.t('$vuetify.userSkill.userSkillTite'),
        //   text: this.$vuetify.lang.t('$vuetify.userSkill.notifications.delete'),
        //   closeOnClick: true,
        //   type: 'error'
        // })
      }
    }
  }
})
</script>
<style scoped>
.skillEndorses{
cursor: pointer;
}
</style>

