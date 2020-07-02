<template>
  <div class="comment-meta">
    <button
      v-if="commentDto.countLike > 0"
      class="comment-like-color"
      data-toggle="modal"
      data-target="#SocialUsers"
      @click.prevent="
        OpneSocialUsers(commentDto.id, commentDto.socialUsersTypeId)
      "
    >
      <BaseIcon name="heart" :width="10">
        {{ $vuetify.lang.t('$vuetify.sourceoptions.likes') }} ({{ commentDto.countLike }})</BaseIcon
      >
    </button>
    <div style="border-top: 1px solid #ddd;padding-bottom: 5px;"></div>

         <v-btn icon :color="commentDto.isLiked ? 'pink' : 'purple'"
         @click="onLiked(commentDto.id, !commentDto.isLiked)">
              <v-icon>mdi-heart</v-icon>
        </v-btn>

    <!-- <button
      :class="commentDto.isLiked ? 'comment-like-color' : 'comment-like'"
      :title="$vuetify.lang.t('$vuetify.commentoptions.like')"
      @click="onLiked(commentDto.id, !commentDto.isLiked)"
    >
      <BaseIcon name="heart"> </BaseIcon>
    </button> -->
    <button
      class="comment-reply reply-popup"
      @click.prevent="
        displayCommentReply(!isDisplayCommentReply, commentDto.id)
      "
    >
      <BaseIcon name="reply-all">{{ $vuetify.lang.t('$vuetify.commentoptions.repley') }}</BaseIcon>
    </button>

    <button
      v-if="commentDto.isHasAttachments"
      :title="$vuetify.lang.t('$vuetify.commentoptions.downloadattachment')"
      class="comment-dislike"
      @click.prevent="displayCommentAttachment(!isDisplayCommentAttachment)"
    >
      <BaseIcon name="paperclip"></BaseIcon>
    </button>
    <button
      v-if="commentDto.isHasReplies"
      id="Show-More"
      class="comment-reply"
      @click.prevent="fetchReplyComments(commentDto.id)"
    >
      <BaseIcon name="chevron-circle-down">
        {{ $vuetify.lang.t('$vuetify.commentoptions.repleis') }}
        {{ commentDto.commentReplyCount }}</BaseIcon
      >
    </button>
    <button
      class="comment-reply reply-popup"
      :title="$vuetify.lang.t('$vuetify.commentoptions.report')"
      @click.prevent="
        displayCommentReport(!isDisplayCommentReport, commentDto.id)
      "
    >
      <BaseIcon
        :class-name="'reporticon'"
        name="exclamation-triangle"
      ></BaseIcon>
    </button>
    <v-btn icon v-if="commentDto.isAllowedEdit"
          @click.prevent="displayEditComment(!isDisplayEditComment, commentDto.id)">
           <v-icon>mdi-pencil</v-icon>
        </v-btn>
    <!-- <button
      v-if="commentDto.isAllowedEdit"
      :title="$vuetify.lang.t('$vuetify.commonoprations.edit')"
      @click.prevent="displayEditComment(!isDisplayEditComment, commentDto.id)"
    >
      <BaseIcon name="edit"></BaseIcon>
    </button> -->
     <v-btn icon  v-if="commentDto.isAllowedDelete"
           @click.prevent="deleteComment(commentDto.id)">
               <v-icon color="red">mdi-delete</v-icon>
        </v-btn>

  </div>
</template>

<script>
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import BaseIcon from '../shared/BaseIcon.vue'
import socialUsersTypes from '@/enums/socialUsersTypes'

export default Vue.extend({
  name: 'CommentOptions',
  components: { BaseIcon },
  props: {
    commentDto: {
      type: Object,
      default: null,
      required
    }
  },
  data() {
    return {
      commentLike: socialUsersTypes.COMMENT_LIKE,
      isDisplayCommentReply: false,
      active: false,
      isDisplayCommentReport: false,
      isDisplayEditComment: false,
      isDisplayCommentAttachment: false,
      isdisplaySocialUsers: false
    }
  },
  methods: {
    displayCommentReply(isShow, id) {
      this.$emit('displayCommentReply', isShow, id)
    },
    onLiked(id, isLike) {
      this.$emit('onLiked', id, isLike)
    },
    fetchReplyComments(id) {
      this.$emit('fetchReplyComments', id)
    },
    displayCommentReport(isShow, id) {
      this.$emit('displayCommentReport', isShow, id)
    },
    displayEditComment(isShow, id) {
      this.$emit('displayEditComment', isShow, id)
    },
    deleteComment(id) {
      this.$emit('deleteComment', id)
    },
    displayCommentAttachment(isDisplayCommentAttachment) {
      this.$emit('displayCommentAttachment', isDisplayCommentAttachment)
    },
    OpneSocialUsers(id, socialUsersTypeId) {
      this.$emit('OpneSocialUsers', id, true, socialUsersTypeId)
    }
  }
})
</script>

<style></style>
