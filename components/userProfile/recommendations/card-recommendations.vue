<template>
  <div class="card-information recomendationBx">
    <div class="card-header">
      <span class="title-reco">Recommendations</span>
      <v-tabs v-model="Recotabs" class="tabs-recommendation">
        <v-tab href="#tab-1" class="received"
          ><img src="~/assets/images/all/Received.svg" alt="" /> ({{
            receivedRecommendations.length
          }}) {{ $vuetify.lang.t('$vuetify.recommendations.received') }}</v-tab
        >
        <v-tab href="#tab-2" class="given"
          ><img src="~/assets/images/all/Given.svg" alt="" /> ({{
            givenRecommendations.length
          }}) {{ $vuetify.lang.t('$vuetify.recommendations.given') }}</v-tab
        >
      </v-tabs>
    </div>

    <div class="card-body recommendation-content">
      <v-tabs>
        <v-tabs-items
          v-model="Recotabs"
          slider-color="transparent"
          active-class="activeTab"
          right
        >
          <v-tab-item value="tab-1">
            <v-card flat>
              <ul class="recommendation-list">
                <cardRecommendation
                  v-for="receivedRecommendation in receivedRecommendations"
                  :key="receivedRecommendation.id"
                  :user-recommendation="receivedRecommendation"
                  @bindRecommendations="bindRecommendations"
                  @deleteItemRecommendation="deleteItemRecommendation"
                ></cardRecommendation>
              </ul>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card flat>
              <ul class="recommendation-list">
                <cardRecommendation
                  v-for="givenRecommendation in givenRecommendations"
                  :key="givenRecommendation.id"
                  :user-recommendation="givenRecommendation"
                  @bindRecommendations="bindRecommendations"
                  @deleteItemRecommendation="deleteItemRecommendation"
                ></cardRecommendation>
              </ul>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </div>
     <AddOrEditRecommendation
      v-if="isDisplayAddOrEditRecommendation"
     :displayaddOrEditRecommendation="isDisplayAddOrEditRecommendation"
      :user-recommendation-dto="userRecommendationDto"
      @bindRecommendations="bindRecommendations"
      @close="close"
    ></AddOrEditRecommendation>
  </div>
</template>
<script>
import Vue from 'vue'
import AddOrEditRecommendation from '../recommendations/AddOrEditRecommendation.vue'
import cardRecommendation from '../recommendations/card-recommendation'
import RecommendationType from '@/common/enums/recommendationType'
import NotificationsType from '@/common/enums/NotificationsType'

export default Vue.extend({
  name: 'CardRecommendations',
  components: {
    AddOrEditRecommendation,
    cardRecommendation
  },
  data() {
    return {
      id: '',
      isDisplayAddOrEditRecommendation: false,
      userRecommendationDto: {},
      receivedRecommendations: [],
      givenRecommendations: [],
      Recotabs: ''
    }
  },
  created() {
    this.fetchUserRecommendations()
  },
  methods: {
    close() {
      this.isDisplayAddOrEditRecommendation = false
    },
    async fetchUserRecommendations() {
      const vm = { userId: this.$route.query.userId }

      const result = await this.$store.dispatch(
        'userProfile/fetchUserRecommendations',
        vm
      )
      if (result.value) {
        this.receivedRecommendations = result.value.receivedRecommendations
        this.givenRecommendations = result.value.givenRecommendations
      }
    },
    async AddOrEditRecommendation() {
      const result = await this.$store.dispatch(
        'userProfile/fetchUserRecommendations'
      )
      if (result.value) {
        this.userRecommendations = result.value
      }
    },
    displayAddOrEditRecommendation() {
      this.userRecommendationDto = {
        recommendation: '',
        userId: this.$route.query.userId,
        isAllowedDelete: false,
        isAllowedEdit: false,
        isAllowedActived: false,
        isActive: true,
        recommendationTypeId: RecommendationType.Received
      }
      this.isDisplayAddOrEditRecommendation = true
    },
    bindRecommendations(recommendationDto) {
      let index = 0
      if (
        recommendationDto.recommendationTypeId === RecommendationType.Received
      ) {
        index = this.receivedRecommendations.findIndex(
          (f) => f.id === recommendationDto.id
        )
        debugger
        if (index !== -1) {
          Object.assign(this.receivedRecommendations[index], recommendationDto)
          // this.$notify({
          //   title: this.$vuetify.lang.t('$vuetify.recommendations.recommendationTitle'),
          //   text: this.$vuetify.lang.t('$vuetify.recommendations.notifications.edit'),
          //   closeOnClick: true,
          //   type: NotificationsType.SUCCESS
          // })
        } else {
          this.receivedRecommendations.push(recommendationDto)
          // this.$notify({
          //   title: this.$vuetify.lang.t('$vuetify.recommendations.recommendationTitle'),
          //   text: this.$vuetify.lang.t('$vuetify.recommendations.notifications.save'),
          //   closeOnClick: true,
          //   type: NotificationsType.SUCCESS
          // })
        }
      } else {
        index = this.givenRecommendations.findIndex(
          (f) => f.id === recommendationDto.id
        )
        if (index !== -1) {
          Object.assign(this.givenRecommendations[index], recommendationDto)
        } else {
          this.givenRecommendations.push(recommendationDto)
        }
      }

      this.isDisplayAddOrEditRecommendation = false
    },
    deleteItemRecommendation(_id, _recommendationTypeId) {
      let index = 0
      if (_recommendationTypeId === RecommendationType.Received) {
        index = this.receivedRecommendations.findIndex((f) => f.id === _id)
        this.receivedRecommendations.splice(index, 1)
      } else {
        index = this.givenRecommendations.findIndex((f) => f.id === _id)
        this.givenRecommendations.splice(index, 1)
      }
    }
  }
})
</script>

<style lang="scss">
a.received img {
  width: 12px;
  margin-right: 5px;
}

a.given img {
  width: 12px;
  margin-right: 5px;
}
a.received {
  font-size: 10px;
}
a.given {
  font-size: 10px;
}
.tabs-recommendation {
  width: auto;
  flex: unset;
  position: absolute;
  right: 0;
  top: 8px;
}

.tabs-recommendation .v-tabs-bar {
  height: 30px;
}
.tabs-recommendation .v-tabs-bar .v-tab.v-tab:after {
  height: 12px;
}

.recommendation-content .v-tabs-bar {
  display: none;
}
</style>
