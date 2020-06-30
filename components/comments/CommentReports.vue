<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="comments">
            <div class="comment-box add-comment">
              <div class="comment-box">
                <span class="commenter-pic">
                  <img src="~/assets/images/all/user-img.png" class="img-fluid" />
                </span>
                <span class="commenter-name">
                  <a href="#">{{ comment.commentBy }}</a>
                  <span class="comment-time">{{ comment.createdOn }}</span>
                </span>
                <p class="comment-txt more" v-html="comment.commentText"></p>

                <div class="comment-meta">
                  <button
                    class="comment-reply reply-popup"
                    :title="$vuetify.lang.t('$vuetify.commentoptions.report')"
                    @click.prevent="displayCommentReporters(comment.id)"
                  >
                    <BaseIcon
                      :class-name="'reporticon'"
                      name="exclamation-triangle"
                    ></BaseIcon>
                  </button>
                  <button
                    :title="$vuetify.lang.t('$vuetify.commentoptions.blocked')"
                    data-toggle="modal"
                    data-target="#modalConfirmation"
                    @click.prevent="displayBlockedComment(comment.id)"
                  >
                    <BaseIcon name="ban"></BaseIcon>
                  </button>
                  <button
                    :title="$vuetify.lang.t('$vuetify.commonoprations.delete')"
                    class="delete-icon"
                    data-toggle="modal"
                    data-target="#modalConfirmation"
                    @click.prevent="displayDeleteComment(comment.id)"
                  >
                    <BaseIcon name="trash-alt"></BaseIcon>
                  </button>
                </div>
              </div>
              <ModalConfirmation
                v-if="isDisplayDeleteComment"
                :isopen="isDisplayDeleteComment"
                :item-id="id"
                :title="$vuetify.lang.t('$vuetify.commonoprations.delete')"
                :message="$vuetify.lang.t('$vuetify.messages.deleteConfirmation')"
                @method="onDeleteComment"
                @close="close"
              ></ModalConfirmation>
              <ModalConfirmation
                v-if="isDisplayBlockedComment"
                :item-id="id"
                :isopen="isDisplayBlockedComment"
                :title="$vuetify.lang.t('$vuetify.commentoptions.blocked')"
                :message="$vuetify.lang.t('$vuetify.messages.bloackConfirmation')"
                @method="onBlockedComment"
                @close="close"
              ></ModalConfirmation>
              <CommentReporters
                v-if="isDisplayCommentReporters"
                :id="id"
                :displayCommentReporters="isDisplayCommentReporters"
                @close="close"
              ></CommentReporters>
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
import BaseIcon from '../shared/BaseIcon'
import ModalConfirmation from '../../components/shared/ModalConfirmation'
import CommentReporters from '../../components/comments/CommentReporters'

export default Vue.extend({
  name: 'CommentReports',
  components: { BaseIcon, ModalConfirmation, CommentReporters },
  props: {
    comment: {
      type: Object,
      default: null,
      required
    }
  },
  data() {
    return {
      id: '',
      isDisplayBlockedComment: false,
      isDisplayDeleteComment: false,
      isDisplayCommentReporters: false
    }
  },
  methods: {
    close() {
      this.isDisplayDeleteComment = false
      this.isDisplayCommentReporters = false
      this.isDisplayBlockedComment = false
    },
    displayCommentReporters(_id) {

      this.id = _id
      this.isDisplayCommentReporters = true

    },
    displayDeleteComment(_id) {
      this.id = _id
      this.isDisplayDeleteComment = true
    },
    displayBlockedComment(_id) {
      this.id = _id
      this.isDisplayBlockedComment = true
    },
    async onDeleteComment(_id) {
      const vm = { id: _id }
      const result = await this.$store.dispatch('comment/deleteComment', vm)
      if (result.value) {
        this.$emit('fetchCommentReports')
      }
    },
    async onBlockedComment(_id) {
      const vm = { id: _id }
      const result = await this.$store.dispatch('comment/onBlockedComment', vm)
      if (result.value) {
        this.$emit('fetchCommentReports')
      }
    }
  }
})
</script>
