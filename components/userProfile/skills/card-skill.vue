<template>
  <span>
  <v-chip class="ma-1 itm">
     <v-btn right icon @click.prevent="onEndorse(!isEndorse)">
          <v-icon>{{ isEndorse ? 'mdi-check ' : 'mdi-plus' }}</v-icon>
        </v-btn>
    {{ userSkill.skillName }}
     <v-avatar  text-color="white" right class="purple"  v-if="countEndorse > 0">{{ countEndorse }}
    </v-avatar>
  </v-chip>
    <ModalConfirmation
      v-if="isDisplayDeleteUserSkill"
      :item-id="id"
      :isopen="isDisplayDeleteUserSkill"
      :title="$vuetify.lang.t('$vuetify.commonoprations.delete')"
      :message="$vuetify.lang.t('$vuetify.messages.deleteConfirmation')"
      @method="onDeleteUserSkill"
      @close="close"
    ></ModalConfirmation>
  </span>

</template>

<script>
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import BaseIcon from '../../shared/BaseIcon'
import ModalConfirmation from '@/components/shared/ModalConfirmation'

export default Vue.extend({
  name: 'UserSkill',
  components: {
    BaseIcon,
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
    }
  }
})
</script>
<style scoped>
.skillEndorses{
cursor: pointer;
}
</style>

