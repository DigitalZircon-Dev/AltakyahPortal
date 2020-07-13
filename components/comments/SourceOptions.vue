<template>
  <div class="container1">

    <div class="row">
      <div class="col-12">
        <div class="comments">
          <div class="comment-meta">
            <button
              v-if="sourceUrl.countLike > 0"
              class="comment-like-color"
              data-toggle="modal"
              data-target="#SocialUsers"
              @click.prevent="OpneSocialUsers(sourceUrl.id, topicLike)"
            >
              {{$vuetify.lang.t('$vuetify.sourceoptions.likes')}} ({{ sourceUrl.countLike }})
            </button>
            <button
              v-if="sourceUrl.countFavorite > 0"
              class="comment-like-color"
              data-toggle="modal"
              data-target="#SocialUsers"
              @click.prevent="OpneSocialUsers(sourceUrl.id, topicFavorite)">
              {{$vuetify.lang.t('$vuetify.sourceoptions.favorites')}} ({{
                sourceUrl.countFavorite
              }})
            </button>
            <button
              v-if="sourceUrl.countComment > 0"
              class="comment-like-color"
              data-toggle="modal"
              data-target="#SocialUsers"
              @click.prevent="OpneSocialUsers(sourceUrl.id, topicComment)"
            >
              {{$vuetify.lang.t('$vuetify.sourceoptions.comments')}} ({{ sourceUrl.countComment }})
            </button>
          </div>
          <div class="comment-box">
            <div class="comment-meta">
                <v-btn icon :color="sourceUrl.isLiked ? 'pink' : 'purple'"
                  @click="onLiked(!sourceUrl.isLiked)">
                  <BaseIcon
                  name="mdi-heart"
                ></BaseIcon>
                 </v-btn>
              <button
                :class="
                  sourceUrl.isFavorite ? 'comment-like-color' : 'comment-like'
                "
                :title="$vuetify.lang.t('$vuetify.sourceoptions.countfavorite')"
                @click="onFavorite(!sourceUrl.isFavorite)"
              >
                <BaseIcon
                  name="mdi-Star"
                >المفضلة</BaseIcon>
              </button>
              <button
                class="comment-reply reply-popup"
                @click.prevent="displayComment(!isDisplayComment)"
              >
                <BaseIcon name="comment-alt"
                  >{{$vuetify.lang.t('$vuetify.sourceoptions.addcomment')}}
                </BaseIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import BaseIcon from '../shared/BaseIcon.vue'
import operationTypes from '@/common/enums/operationTypes'
import socialUsersTypes from '@/common/enums/socialUsersTypes'

export default Vue.extend({
  name: 'SourceOptions',
  components: { BaseIcon },
  props: {
    sourceUrl: {
      type: Object,
      default: null,
      required
    }
  },
  data() {
    return {
      isDisplayComment: false,
      topicLike: socialUsersTypes.TOPIC_LIKE,
      topicFavorite: socialUsersTypes.TOPIC_FAVORITE,
      topicComment: socialUsersTypes.TOPIC_COMMENT,
      isDisplaySourceReport: false
    }
  },
  created() {},
  methods: {
    displayComment(isShow, id) {
      this.$emit('displayComment', isShow, id)
    },
    onLiked(isLike) {
      this.$emit('onLike', isLike)
    },
    onFavorite(isFavorite) {
      this.$emit('onFavorite', isFavorite)
    },
    OpneSocialUsers(id, socialUsersTypeId) {
      this.$emit('OpneSocialUsers', id, true, socialUsersTypeId)
    }
  }
})
</script>

<style></style>
