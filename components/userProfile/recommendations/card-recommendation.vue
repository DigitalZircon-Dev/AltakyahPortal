<template>
  <div>
    <li>
      <img src="~/assets/images/all/myteam-user.svg" alt="" />
      <p>{{userRecommendation.recommendationBy }}<span class="date">{{userRecommendation.recommendationDate}}</span></p>
      <div v-html="userRecommendation.recommendation"></div >
    </li>
  </div>
</template>

<script>
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import AddOrEditRecommendation from '../recommendations/AddOrEditRecommendation.vue'
import BaseIcon from '../../shared/BaseIcon'
import AppSwitch from '../../shared/Switch'
import recommendationType from '@/common/enums/recommendationType'
import ModalConfirmation from '@/components/shared/ModalConfirmation'

export default Vue.extend({
  name: 'Recommendations',
  components: {
    AddOrEditRecommendation,
    BaseIcon,
    ModalConfirmation,
    AppSwitch
  },
  props: {
    userRecommendation: {
      type: Object,
      default: null,
      required
    }
  },
  data() {
    return {
      id: '',
      isDisplayAddOrEditRecommendation: false,
      isDisplayDeleteRecommendation: false,
      userRecommendationDto: {},
      recommendationTypeId: 0
    }
  },
  methods: {
    close() {
      this.isDisplayAddOrEditRecommendation = false
      this.isDisplayDeleteRecommendation = false
    },
    async showEditRecommendation(_id) {
      this.isDisplayAddOrEditRecommendation = true
      const vm = { id: _id }
      const result = await this.$store.dispatch(
        'userProfile/fetchUserRecommendation',
        vm
      )
      if (result.value) {
        this.userRecommendationDto = result.value
      }
    },
    displayDeleteRecommendation(_id, recommendationTypeId) {
      this.id = _id
      this.isDisplayDeleteRecommendation = true
      this.recommendationTypeId = recommendationTypeId
    },
    async onDeleteRecommendation(_id) {
      const vm = { id: _id }
      const result = await this.$store.dispatch(
        'userProfile/deleteUserRecommendation',
        vm
      )
      if (result.value) {
        this.$emit('deleteItemRecommendation', _id, this.recommendationTypeId)
        this.isDisplayDeleteRecommendation = false
        this.recommendationTypeId = 0

        this.$notify({
          title: this.$vuetify.lang.t(
            '$vuetify.recommendations.recommendationTite'
          ),
          text: this.$vuetify.lang.t(
            '$vuetify.recommendations.notifications.delete'
          ),
          closeOnClick: true,
          type: 'error'
        })
      }
    },
    bindRecommendations(recommendationDto) {
      this.$emit('bindRecommendations', recommendationDto)
    },
    async OnActived(val) {
      this.userRecommendation.isActive = val
      const result = await this.$store.dispatch(
        'userProfile/activedRecommendation',
        this.userRecommendation
      )
      if (result.value) {
        this.$notify({
          title: this.$vuetify.lang.t(
            '$vuetify.recommendations.recommendationTite'
          ),
          text: this.$vuetify.lang.t(
            '$vuetify.recommendations.notifications.deactivate'
          ),
          closeOnClick: true,
          type: 'success'
        })
      }
    }
  }
})
</script>
