<template>
  <div>
    <SourceOptions
      :source-url="sourceUrl"
      @onLike="onLike"
      @onFavorite="onFavorite"
      @displayComment="displayComment"
      @OpneSocialUsers="OpneSocialUsers"
    ></SourceOptions>

    <SocialUsers
      v-if="isdisplaySocialUsers"
      :id="parentId"
      :social-users-type-id="socialUsersTypeId"
      :isdisplay-social-users="isdisplaySocialUsers"
      @close="close"
    ></SocialUsers>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="comments">
            <div class="comment-box add-comment">
              <!-- add comment reply -->
              <AddComment
                v-if="isDisplayComment"
                :is-show="isDisplayComment"
                :comment-parent-id="id"
                @addComment="addComment"
                @showcomment="displayComment(!isDisplayComment)"
              ></AddComment>
              <!--end add comment reply -->
            </div>
            <comment
              v-for="comment in comments"
              :key="comment.id"
              :comment="comment"
              :replied-class="commentClass"
              @addCommentReply="addComment"
              @deleteComment="deleteComment"
            ></comment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import AddComment from '../comments/AddComment'
import comment from '../../components/comments/comment'
import { commentsMixins } from '../../mixins/comment/commnetsMixins'
import SourceOptions from '../../components/comments/SourceOptions'
import SocialUsers from '../../components/comments/SocialUsers'

export default Vue.extend({
  name: 'Comments',
  components: { comment, SourceOptions, AddComment, SocialUsers },
  mixins: [commentsMixins],
  data() {
    return {
      id: '',
      parentId: '',
      isDisplayComment: false,
      isDisabled: true,
      isdisplaySocialUsers: false,
      socialUsersTypeId: '',
      comments: [],
      sourceUrl: {
        id: '',
        countFavorite: 0,
        countLike: 0,
        countComment: 0
      },
      commentClass: 'comment-box',
      searchvm: {
        fullUrl: '',
        pageNumber: 1
      }
    }
  },
  created() {
    this.fetchComments(this.searchvm)
    this.fetchSourceUrls()
  }
})
</script>

<style>
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
  color: #db3700;
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
  margin-bottom: 15px;
  border-radius: 5px;
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
