<template>
  <v-card  class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="grey">
        <img src="../../../assets/images/all/user-img.png" class="img-fluid" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{
          userRecommendation.recommendationBy
        }}</v-list-item-title>
        <v-list-item-subtitle>{{
          userRecommendation.recommendationDate
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <p
        class="comment-txt more"
        v-html="userRecommendation.recommendation"
      ></p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="userRecommendation.isAllowedEdit"
        icon
        @click.prevent="showEditRecommendation(userRecommendation.id)"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        v-if="userRecommendation.isAllowedDelete"
        icon
        @click.prevent="
          displayDeleteRecommendation(
            userRecommendation.id,
            userRecommendation.recommendationTypeId
          )
        "
      >
        <v-icon color="red">mdi-delete</v-icon>
      </v-btn>
      <v-switch
        v-if="userRecommendation.isAllowedActived"
        v-model="userRecommendation.isActive"
        class="ma-4"
        label="تفعيل"
        :checked="userRecommendation.isActive"
        @change="OnActived"
      ></v-switch>
    </v-card-actions>
    <AddOrEditRecommendation
      v-if="isDisplayAddOrEditRecommendation"
      :displayaddOrEditRecommendation="isDisplayAddOrEditRecommendation"
      :user-recommendation-dto="userRecommendationDto"
      @bindRecommendations="bindRecommendations"
      @close="close"
    ></AddOrEditRecommendation>
    <ModalConfirmation
      v-if="isDisplayDeleteRecommendation"
      :item-id="id"
      :isopen="isDisplayDeleteRecommendation"
      :title="$vuetify.lang.t('$vuetify.commonoprations.delete')"
      :message="$vuetify.lang.t('$vuetify.messages.deleteConfirmation')"
      @method="onDeleteRecommendation"
      @close="close"
    ></ModalConfirmation>
  </v-card>
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
          title: this.$vuetify.lang.t('$vuetify.recommendations.recommendationTite'),
          text: this.$vuetify.lang.t('$vuetify.recommendations.notifications.delete'),
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
          title: this.$vuetify.lang.t('$vuetify.recommendations.recommendationTite'),
          text: this.$vuetify.lang.t('$vuetify.recommendations.notifications.deactivate'),
          closeOnClick: true,
          type: 'success'
        })
      }
    }
  }
})
</script>

<style scoped>
.modal-dialog {
  max-width: 674px !important;
  margin: 1.75rem auto;
}
.datepicker {
  z-index: 1100 !important;
}
#ui-datepicker-div {
  width: 30% !important;
}
</style>
