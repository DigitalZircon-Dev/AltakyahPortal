export const actions = {

  async fetchSourceUrls ({ commit }, vm) {
   try {
     const self = this

     const { data } = await self.$repositories.comment.fetchSourceUrls(vm)
     if (data.isValid) {
       return { value: data.value, error: '' }
     } else {
       return { value: null, error: data.errors }
     }
   } catch (e) {
     return { value: null, error: e.response }
   }
 },
 async fetchComments ({ commit }, vm){
   try {
     const { data } = await this.$repositories.comment.fetchComments(vm)
     if (data.items !== null) {
       return { value: data.items, error: '' }
     } else {
       return { value: null, error: data.errors }
     }
   } catch (e) {
     return { value: null, error: e.response }
   }
 },
 async addComment ({ commit }, dto) {
  try {
    const { data } = await this.$repositories.comment.addComment(dto)
    return { value: data.value, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async fetchReplyComments  ({ commit }, vm) {
  try {
    const { data } = await this.$repositories.comment.fetchReplyComments(vm)
    return { value: data, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async addCommentLike   ({ commit }, dto) {
  try {
    const { data } = await this.$repositories.comment.addCommentLike(dto)
    return { value: data.isValid, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async addLikeOrFavorite  ({ commit }, dto) {
  try {
    const { data } = await this.$repositories.comment.addLikeOrFavorite(dto)
    return { value: data.isValid, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async deleteCommentLike ({ commit }, dto) {
  try {
    const { data } = await this.$repositories.comment.deleteCommentLike(dto)
    return { value: data.value, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async deleteComment   ({ commit }, dto)  {
  try {
    const { data } = await this.$repositories.comment.deleteComment(dto)
    if (data.isValid) {
      return { value: data.value }
    } else {
      return { value: null, error: data.errors }
    }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async addCommentReport  ({ commit }, dto) {
  try {
    const { data } = await this.$repositories.comment.addCommentReport(dto)
    return { value: data.value, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async fetchComment  ({ commit }, vm) {
  try {
    const { data } = await this.$repositories.comment.fetchComment(vm)
    return { value: data, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async deleteCommentAttachment  ({ commit }, dto)  {
  try {
    const { data } = await this.$repositories.comment.deleteCommentAttachment(dto)
    return { value: data.value, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async editComment  ({ commit }, dto) {
  try {
    const { data } = await this.$repositories.comment.editComment(dto)
    if (data.isValid) {
      return { value: data.value }
    } else {
      return { value: null, error: data.errors }
    }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async fetchAttachments  ({ commit }, vm) {
  try {
    const { data } = await this.$repositories.comment.fetchAttachments(vm)
    return { value: data, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async fetchSocialUsers  ({ commit }, vm) {
  try {
    const { data } = await this.$repositories.comment.fetchSocialUsers(vm)
    return { value: data, error: '' }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async onBlockedComment  ({ commit }, dto)  {
  try {
    const { data } = await this.$repositories.comment.onBlockedComment(dto)
    if (data.isValid) {
      return { value: data.value }
    } else {
      return { value: null, error: data.errors }
    }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async fetchCommentReports  ({ commit }) {
  try {
    const { data } = await this.$repositories.comment.fetchCommentReports()
    if (data.items !== null) {
      return { value: data.items, error: '' }
    } else {
      return { value: null, error: data.errors }
    }
  } catch (e) {
    return { value: null, error: e.response }
  }
},
async fetchCommentReporter ({ commit }, vm) {
  try {
    const { data } = await this.$repositories.comment.fetchCommentReporter(vm)
    if (data.isValid) {
      return { value: data.value, error: '' }
    } else {
      return { value: null, error: data.errors }
    }
  } catch (e) {
    return { value: null, error: e.response }
  }
}

 }
// import * as actions from './comment/actions'

// export default ($repositories) => {
//   debugger
//   actions
// }


