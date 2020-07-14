import helper from '../../common/helpers/Utils'

export const commentMixins = {
  methods: {
    OpneSocialUsers(id, isdisplaySocialUser, socialUsersTypeId) {
      this.parentId = id
      this.socialUsersTypeId = socialUsersTypeId
      this.isdisplaySocialUser = isdisplaySocialUser
    },
    close(isdisplaySocialUser) {
      this.isdisplaySocialUser = isdisplaySocialUser
    },
    showMoreReply() {
      this.moreReply = !this.moreReply
    },
    displayCommentReply(isShow, id) {
      this.commentId = id
      this.isDisplayCommentReply = isShow
      this.isDisplayCommentReport = false
      this.isDisplayEditComment = false
      this.isDisplayCommentAttachment = false
    },
    async onLiked(id, isLiked) {
      const vm = { commentId: id, userLiked: 'thussein' }
      if (!isLiked) {
        const response = await this.$store.dispatch(
          'comment/deleteCommentLike',
          vm
        )

        if (response.value !== null) {
          this.comment.countLike -= 1
          this.comment.isLiked = false
        }
      } else {
        const response = await this.$store.dispatch(
          'comment/addCommentLike',
          vm
        )

        if (response.value) {
          this.comment.countLike += 1
          this.comment.isLiked = true
        }
      }
    },
    async addCommentReply(commentReplyDto, files) {
      const childrens = this.comment.commentReplies ?? []
      commentReplyDto.sourceUrl.fullPath = helper.getPageUrl()
      const formData = helper.convertObjectToFormData(commentReplyDto)

      if (files !== null) {
        Array.from(Array(files.length).keys()).map((i) => {
          formData.append('attachments', files[i], files[i].name)
        })
      }

      formData.append('sourceUrl.fullUrl', helper.getPageUrl())
      formData.append('sourceUrl.urlTitle', document.title)
      formData.append('sourceUrl.siteCollection', 'siteCollection')

      const data = await this.$store.dispatch('comment/addComment', formData)
      if (data.value !== null) {
        childrens.push(data.value)
        this.comment.commentReplies = childrens
        this.comment.commentReplyCount += 1
        this.comment.isHasReplies = true

        // eslint-disable-next-line no-console
        console.log('تم إضافة التعليق بنجاح')
      }
    },
    async fetchReplyComments(id) {
      const self = this
      const vm = { replyId: id }
      const data = await this.$store.dispatch('comment/fetchReplyComments', vm)
      if (data.value !== null) {
        self.comment.commentReplies = data.value
      }
    },
    async deleteComment(id) {
      const vm = { id }
      const result = await this.$store.dispatch('comment/deleteComment', vm)
      if (result.value) {
        this.isDeleteCommentReply = true
        this.$emit('deleteComment', id)

        // TO DO change this work around
        this.comment.isDeleted = true
        if (this.comment.commentReplyCount > 0) {
          this.comment.commentReplyCount -= 1
        }
      }
    },
    async saveCommentReport(commentReportDto) {
      const data = await this.$store.dispatch(
        'comment/addCommentReport',
        commentReportDto
      )

      if (data.value !== null) {
        // eslint-disable-next-line no-console
        console.log('تم إضافة البلاغ بنجاح')
      }
    },
    displayCommentReport(isShow, id) {
      this.commentId = id
      this.isDisplayCommentReport = isShow
      this.isDisplayCommentReply = false
      this.isDisplayEditComment = false
      this.isDisplayCommentAttachment = false
    },
    displayEditComment(isShow, id) {
      this.commentId = id
      this.isDisplayEditComment = isShow
      this.isDisplayCommentReport = false
      this.isDisplayCommentReply = false
      this.isDisplayCommentAttachment = false
    },
    async editComment(commentEditDto, files) {
      const formData = helper.convertObjectToFormData(commentEditDto)
      if (files !== null) {
        Array.from(Array(files.length).keys()).map((i) => {
          formData.append('attachments', files[i], files[i].name)
        })
      }

      const data = await this.$store.dispatch('comment/editComment', formData)

      if (data.value !== null) {
        this.comment.commentText = data.value.commentText
        this.comment.isHasAttachments = data.value.isHasAttachments
        // eslint-disable-next-line no-console
        console.log('تم التعديل التعليق بنجاح')
      }
    },
    displayCommentAttachment(isShow) {
      this.isDisplayCommentAttachment = isShow
      this.isDisplayEditComment = false
      this.isDisplayCommentReport = false
      this.isDisplayCommentReply = false
    }
  }
}
