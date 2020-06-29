import operationTypes from '@/enums/operationTypes'
import helper from '../../helpers/Utils'
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
    async addLikeOrFavorite(_isLikeOrFavorite, _operationTypeId) {
      const likeDto = {
        fullUrl: helper.getPageUrl(),
        isLikeOrFavorite: _isLikeOrFavorite,
        OperationType: _operationTypeId,
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
        'comment/addLikeOrFavorite',
        formData
      )
      if (data.value) {
        if (_operationTypeId === operationTypes.FAVORITE) {
          this.sourceUrl.countFavorite = _isLikeOrFavorite
            ? this.sourceUrl.countFavorite + 1
            : this.sourceUrl.countFavorite - 1
          this.sourceUrl.isFavorite = _isLikeOrFavorite
        } else {
          this.sourceUrl.countLike = _isLikeOrFavorite
            ? this.sourceUrl.countLike + 1
            : this.sourceUrl.countLike - 1
          this.sourceUrl.isLiked = _isLikeOrFavorite
        }
      }
    }
  }
}
