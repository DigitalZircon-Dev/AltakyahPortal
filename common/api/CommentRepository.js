import {COMMENT} from '../constants'
import helper from '../../common/helpers/Utils'


export default ($axios) => ({
  async addComment(commentDto) {
    return await $axios.post(COMMENT.ADD_COMMENT, commentDto)
  },

  async fetchComments(vm) {
    const params = helper.getParams(vm)
    return await $axios.get(COMMENT.FERCH_COMMENTS, params)
  },

  async fetchSourceUrls(vm) {
    const params = helper.getParams({ fullUrl: vm.fullUrl })
    return await $axios.get(COMMENT.FERCH_SOURCE_URLS, params)
  },

  async fetchReplyComments(vm) {
    return await $axios.get(COMMENT.FERCH_REPLY_COMMENTS + vm.replyId)
  },

  async addCommentLike(commentLikeDto) {
    return await $axios.post(
      COMMENT.ADD_COMMENT_LIKE,
      commentLikeDto
    )
  },

  async deleteCommentLike(commentLikeDto) {
    return await $axios.post(
      COMMENT.DELETE_COMMENT_LIKE,
      commentLikeDto
    )
  },

  async deleteComment(dto) {
    return await $axios.post(COMMENT.DELETE_COMMENT, dto)
  },

  async addCommentReport(commentReportDto) {
    return await $axios.post(
      COMMENT.ADD_COMMENT_REPORT,
      commentReportDto
    )
  },
  async fetchComment(vm) {
    return await $axios.get(COMMENT.FERCH_COMMENT + vm.id)
  },
  async deleteCommentAttachment(dto) {
    return await $axios.post(COMMENT.DELETE_COMMENT_ATTACHMENT, dto)
  },

  async editComment(commentDto) {
    return await $axios.post(COMMENT.EDIT_COMMENT, commentDto)
  },
  async onLike(dto) {
    return await $axios.post(COMMENT.On_LIKE, dto)
  },
  async onFavorite(dto) {
    return await $axios.post(COMMENT.On_FAVORITE, dto)
  },
  async fetchAttachments(vm) {
    return await $axios.get(
      COMMENT.FETCH_ATTACHMENTS + vm.commentId
    )
  },

  async fetchSocialUsers(vm) {
    const params = helper.getParams(vm)
    return await $axios.get(COMMENT.FETCH_SOCIAL_USERS, params)
  },

  async onBlockedComment(dto) {
    return await $axios.post(COMMENT.ON_BLOCKED_COMMENT, dto)
  },

  async fetchCommentReports() {
    return await $axios.get(COMMENT.FETCH_COMMENT_REPORTS)
  },

  async fetchCommentReporter(vm) {
    return await $axios.get(
      COMMENT.FETCH_COMMENT_REPORTER + vm.commentId
    )
  },
  async fetchLastFavourites(vm) {
    return await $axios.get(COMMENT.FETCH_LAST_FAVOURITES + vm.userId)
  },
  async fetchFavourites(vm) {
    const params = helper.getParams(vm)
    return await $axios.get(COMMENT.FETCH_FAVOURITES , params)
  },
  async deleteFavorite(vm) {
    return await $axios.post(COMMENT.DELETE_FAVOURITE , vm)
  }

})
