import operationTypes from '@/common/enums/operationTypes'
import helper from '../../common/helpers/Utils'
export const commentsMixins = {
  methods: {
    OpneSocialUsers(id, isdisplaySocialUsers, socialUsersTypeId) {
      this.parentId = id
      this.socialUsersTypeId = socialUsersTypeId
      this.isdisplaySocialUsers = isdisplaySocialUsers
    },
    close(isdisplaySocialUsers) {
      this.isdisplaySocialUsers = isdisplaySocialUsers
    },
    async addComment(commentDto, files) {
      commentDto.sourceUrl.fullPath = helper.getPageUrl()
      const formData = helper.convertObjectToFormData(commentDto)
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
        const self = this
        self.comments.push(data.value)
        self.sourceUrl.countComment += 1
        self.sourceUrl.id = data.value.sourceUrlId
      }
    },
    bindfiles(files) {
      this.commentAttachments.push(files)
    },
    removeFile(lastModified) {
      const index = this.commentAttachments.findIndex(
        (f) => f.lastModified === lastModified
      )
      this.commentAttachments.splice(index, 1)
    },
    async fetchComments() {
      this.searchvm.fullUrl = helper.getPageUrl()
      const data = await this.$store.dispatch(
        'comment/fetchComments',
        this.searchvm
      )
      if (data.value !== null) {
        this.comments = data.value
      }
    },
    deleteComment(id) {
      const index = this.comments.findIndex((f) => f.id === id)
      this.comments.splice(index, 1)
      this.sourceUrl.countComment -= 1
    },
    displayComment(isDisplayComment) {
      this.isDisplayComment = isDisplayComment
    },
    async fetchSourceUrls() {
      const self = this
      self.searchvm.fullUrl = helper.getPageUrl()
      const data = await this.$store.dispatch(
        'comment/fetchSourceUrls',
        this.searchvm
      )
      if (data.value !== null) {
        this.sourceUrl = data.value
      }
    },
    async onLike(_isLike) {
      const likeDto = {
        fullUrl: helper.getPageUrl(),
        isLike: _isLike,
        sourceUrl: {
          fullUrl: '',
          urlTitle: '',
          siteCollection: '',
          topicId:''
        }
      }
      const formData = helper.convertObjectToFormData(likeDto)
      formData.append('sourceUrl.fullUrl', helper.getPageUrl())
      formData.append('sourceUrl.UrlTitle', document.title)
      formData.append('sourceUrl.siteCollection', 'siteCollection')
      const data = await this.$store.dispatch(
        'comment/onLike',
        formData
      )
      if (data.value) {
        this.sourceUrl.countLike = _isLike
        ? this.sourceUrl.countLike + 1
        : this.sourceUrl.countLike - 1
      this.sourceUrl.isLiked = _isLike
      }
    },
    async onFavorite(_isFavorite) {
      const likeDto = {
        fullUrl: helper.getPageUrl(),
        isFavorite: _isFavorite,
        sourceUrl: {
          fullUrl: '',
          urlTitle: '',
          siteCollection: ''
        }
      }
      const formData = helper.convertObjectToFormData(likeDto)
      formData.append('sourceUrl.fullUrl', helper.getPageUrl())
      formData.append('sourceUrl.UrlTitle', document.title)
      formData.append('sourceUrl.siteCollection', 'siteCollection')
      const data = await this.$store.dispatch(
        'comment/onFavorite',
        formData
      )
      if (data.value) {
        this.sourceUrl.countFavorite = _isFavorite
            ? this.sourceUrl.countFavorite + 1
            : this.sourceUrl.countFavorite - 1
          this.sourceUrl.isFavorite = _isFavorite
      }
    }
  }
}
