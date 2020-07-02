<template>

  <v-card>
     <v-card-title class="headline">
          {{
            $vuetify.lang.t('$vuetify.recommendations.recommendationTitle')
          }} <v-btn icon color="purple" @click.prevent="displayAddOrEditRecommendation">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        </v-card-title>
    <v-tabs v-model="tab"  background-color="transparent"
        color="basil"
        grow>
      <v-tab>
        ({{ receivedRecommendations.length }})
        {{ $vuetify.lang.t('$vuetify.recommendations.received') }}
      </v-tab>
      <v-tab>
        ({{ givenRecommendations.length }})
        {{ $vuetify.lang.t('$vuetify.recommendations.given') }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <Recommendation
            v-for="receivedRecommendation in receivedRecommendations"
            :key="receivedRecommendation.id"
            :user-recommendation="receivedRecommendation"
            @bindRecommendations="bindRecommendations"
            @deleteItemRecommendation="deleteItemRecommendation"
          ></Recommendation>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Recommendation
            v-for="givenRecommendation in givenRecommendations"
            :key="givenRecommendation.id"
            :user-recommendation="givenRecommendation"
            @bindRecommendations="bindRecommendations"
            @deleteItemRecommendation="deleteItemRecommendation"
          ></Recommendation>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <AddOrEditRecommendation
      v-if="isDisplayAddOrEditRecommendation"
     :displayaddOrEditRecommendation="isDisplayAddOrEditRecommendation"
      :user-recommendation-dto="userRecommendationDto"
      @bindRecommendations="bindRecommendations"
      @close="close"
    ></AddOrEditRecommendation>
  </v-card>
</template>

<script>
import Vue from 'vue'
import AddOrEditRecommendation from '../recommendations/AddOrEditRecommendation.vue'
import Recommendation from '../recommendations/Recommendation'
import RecommendationType from '@/enums/recommendationType'
import NotificationsType from '@/enums/NotificationsType'

export default Vue.extend({
  name: 'Recommendations',
  components: {
    AddOrEditRecommendation,
    Recommendation
  },
  data() {
    return {
      id: '',
      isDisplayAddOrEditRecommendation: false,
      userRecommendationDto: {},
      receivedRecommendations: [],
      givenRecommendations: [],
       tab: null,
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

<style scope="this api replaced by slot-scope in 2.5.0+">
.comments-details button.btn.dropdown-toggle,
.comments-details .total-comments {
  font-size: 18px;
  font-weight: 500;
  color: #5e5e5e;
}

.comments-details {
  padding: 15px 15px;
}

.comments .comments .dropdown,
.comments .dropup {
  position: relative;
}
.comment-like-color {
  color: blue;
}

.comments button {
  background-color: transparent;
  border: none;
}

.comments .comment-box {
  width: 100%;
  float: left;
  height: 100%;
  background-color: #fafafa;
  padding: 10px 10px 10px;
  border-radius: 5px;
  margin-bottom: 0px !important;

  border: 1px solid #ddd;
}

.comments .add-comment {
  background-color: transparent;
  border: none;
  position: relative;
  margin-bottom: 50px;
}

.comments .commenter-pic {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 100%;
  border: 2px solid #fff;
  overflow: hidden;
  background-color: #fff;
}

.comments .add-comment .commenter-name {
  width: 100%;
  padding-left: 75px;
  position: absolute;
  top: 20px;
  left: -64px;
}

.comments .add-comment input {
  border-top: 0px;
  border-bottom: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
  outline: 0px;
  box-shadow: none;
  border-radius: 0;
  width: 100%;
  padding: 0;
  font-weight: normal;
}

.comments .add-comment input:focus {
  border-color: #03a9f4;
  border-width: 2px;
}

.comments .add-comment button[type='submit'] {
  background-color: #03a9f4;
  color: #fff;
  margin-right: 0px;
}

.comments .add-comment button {
  background-color: #f5f5f5;
  margin: 10px 5px;
  font-size: 14px;
  text-transform: uppercase;
  float: right;
}

.comments .commenter-name .comment-time {
  font-weight: normal;
  margin-left: 8px;
  font-size: 15px;
}

.comments p.comment-txt {
  font-size: 15px;
  /* border-bottom: 1px solid #ddd;
  padding: 0px 0px 15px; */
}

.comments .commenter-name {
  display: inline-block;
  position: relative;
  top: -20px;
  left: 0px;
  font-size: 16px;
  font-weight: bold;
}

.comments .comment-meta {
  font-size: 14px;
  color: #333;
  padding: 2px 5px 0px;
  line-height: 20px;
  /* float: right; */
}

.comments .replied {
  background-color: #fff;
  width: 95%;
  float: right;
  margin-top: 15px;
}

/*======Responsive CSS=======*/
@media (max-width: 767px) {
  .comments .commenter-name {
    font-size: 13px;
    top: -5px;
  }

  .comments .commenter-pic {
    width: 40px;
    height: 40px;
  }

  .comments .commenter-name a {
    display: block;
  }

  .comments .commenter-name .comment-time {
    display: block;
    margin-left: 0px;
  }
}
.delete-icon {
  color: #dc7c7c;
}
.reporticon {
  color: yellow !important;
}
.attachment-container {
  padding: 5px;
  margin-right: -60px;
}
</style>
