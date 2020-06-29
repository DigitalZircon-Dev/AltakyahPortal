<template
  ><div v-if="!comment.isDeleted">
    <div :class="repliedClass">
      <span class="commenter-pic">
        <img src="~/assets/images/all/user-img.png" class="img-fluid" />
      </span>

      <span class="commenter-name">
        <a href="#">{{ comment.commentBy }}</a>
        <span class="comment-time">{{ comment.createdOn }}</span>
      </span>
      <p class="comment-txt more" v-html="comment.commentText"></p>

      <!-- comment options -->
      <CommentOptions
        :comment-dto="comment"
        @displayCommentReply="displayCommentReply"
        @onLiked="onLiked"
        @OpneSocialUsers="OpneSocialUsers"
        @fetchReplyComments="fetchReplyComments"
        @displayCommentReport="displayCommentReport"
        @displayEditComment="displayEditComment"
        @deleteComment="deleteComment"
        @displayCommentAttachment="displayCommentAttachment"
      ></CommentOptions>
      <!--end comment options -->

      <SocialUsers
        v-if="isdisplaySocialUser"
        :id="parentId"
        :social-users-type-id="comment.socialUsersTypeId"
        :isdisplay-social-users="isdisplaySocialUser"
        @close="close"
      ></SocialUsers>

      <!-- add comment report -->
      <AddCommentReport
        v-if="
          isDisplayCommentReport &&
            !isDisplayCommentReply &&
            !isDisplayEditComment &&
            !isDisplayCommentAttachment
        "
        :is-show="isDisplayCommentReport"
        :comment-id="commentId"
        @showCommentReport="displayCommentReport"
        @addCommentReport="saveCommentReport"
      ></AddCommentReport>
      <!--end add comment report -->

      <!-- add comment reply -->
      <AddComment
        v-if="
          isDisplayCommentReply &&
            !isDisplayCommentReport &&
            !isDisplayEditComment &&
            !isDisplayCommentAttachment
        "
        :is-show="isDisplayCommentReply"
        :comment-parent-id="commentId"
        @showcomment="displayCommentReply"
        @addComment="addCommentReply"
      ></AddComment>
      <!--end add comment reply -->

      <!-- edit comment -->
      <EditComment
        v-if="
          isDisplayEditComment &&
            !isDisplayCommentReport &&
            !isDisplayCommentReply &&
            !isDisplayCommentAttachment
        "
        :is-show="isDisplayEditComment"
        :comment-id="commentId"
        @displayEditComment="displayEditComment"
        @editComment="editComment"
      ></EditComment>
      <!--end edit comment -->

      <!--  download files -->
<br>
      <DownloadFiles
        v-if="
          isDisplayCommentAttachment &&
            !isDisplayEditComment &&
            !isDisplayCommentReport &&
            !isDisplayCommentReply
        "
        :id="comment.id"
        :isdisplay-comment-attachment="isDisplayCommentAttachment"
        @displayCommentAttachment="displayCommentAttachment"
      ></DownloadFiles>
      <!--end download files -->

      <!-- display childrens -->
      <div
        v-for="commentReply in comment.commentReplies"
        :key="commentReply.id"
      >
        <comment
          :key="commentReply.id"
          :comment="commentReply"
          :replied-class="commentReplyClass"
        ></comment>
      </div>
      <!--end display childrens -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
import AddComment from '../comments/AddComment.vue'
import EditComment from '../comments/EditComment.vue'
import AddCommentReport from '../comments/AddCommentReport.vue'
import CommentOptions from '../comments/commentOptions'
import DownloadFiles from '../comments/DownloadFiles.vue'
import SocialUsers from '../comments/SocialUsers.vue'

import { commentMixins } from '../../mixins/comment/commnetMixins'

export default Vue.extend({
  name: 'Comment',
  components: {
    AddComment,
    CommentOptions,
    AddCommentReport,
    EditComment,
    DownloadFiles,
    SocialUsers
  },
  mixins: [commentMixins],
  props: {
    comment: {
      type: Object,
      default: null,
      required
    },
    repliedClass: {
      type: String,
      default: '',
      required
    }
  },
  data() {
    return {
      parentId: '',
      moreReply: false,
      liked: false,
      isdisplaySocialUser: false,
      isDisplayCommentReply: false,
      isDisplayCommentAttachment: false,
      isDisplayCommentReport: false,
      isDisplayEditComment: false,
      commentReplyClass: 'comment-box replied',
      commentId: null,
      id: null,
      className: 'comment-like',
      commentDto: null,
      commentAttachments: []
    }
  },
  computed: {
    likeClassName() {
      return this.comment.isliked ? 'comment-like-color' : 'comment-like'
    }
  }
})
</script>
