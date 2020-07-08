

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const fetchSourceUrls = async ({ commit }, vm) => {
//   try {

//     const { data } = await this.$repositories.comment.fetchSourceUrls(vm)
//     if (data.isValid) {
//       return { value: data.value, error: '' }
//     } else {
//       // eslint-disable-next-line no-console
//       return { value: null, error: data.errors }
//     }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const fetchComments = async ({ commit }, vm) => {
//   try {
//     const { data } = await this.$repositories.comment.fetchComments(vm)
//     if (data.items !== null) {
//       return { value: data.items, error: '' }
//     } else {
//       // eslint-disable-next-line no-console
//       return { value: null, error: data.errors }
//     }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const addComment = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.addComment(dto)
//     return { value: data.value, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const fetchReplyComments = async ({ commit }, vm) => {
//   try {
//     const { data } = await this.$repositories.comment.fetchReplyComments(vm)
//     return { value: data, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const addCommentLike = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.addCommentLike(dto)
//     return { value: data.isValid, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// export const addLikeOrFavorite = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.addLikeOrFavorite(dto)
//     return { value: data.isValid, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const deleteCommentLike = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.deleteCommentLike(dto)
//     return { value: data.value, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const deleteComment = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.deleteComment(dto)
//     if (data.isValid) {
//       return { value: data.value }
//     } else {
//       return { value: null, error: data.errors }
//     }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const addCommentReport = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.addCommentReport(dto)
//     return { value: data.value, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// export const fetchComment = async ({ commit }, vm) => {
//   try {
//     const { data } = await this.$repositories.comment.fetchComment(vm)
//     return { value: data, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const deleteCommentAttachment = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.deleteCommentAttachment(dto)
//     return { value: data.value, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const editComment = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.editComment(dto)
//     if (data.isValid) {
//       return { value: data.value }
//     } else {
//       return { value: null, error: data.errors }
//     }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const fetchAttachments = async ({ commit }, vm) => {
//   try {
//     const { data } = await this.$repositories.comment.fetchAttachments(vm)
//     return { value: data, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const fetchSocialUsers = async ({ commit }, vm) => {
//   try {
//     const { data } = await this.$repositories.comment.fetchSocialUsers(vm)
//     return { value: data, error: '' }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const onBlockedComment = async ({ commit }, dto) => {
//   try {
//     const { data } = await this.$repositories.comment.onBlockedComment(dto)
//     if (data.isValid) {
//       return { value: data.value }
//     } else {
//       return { value: null, error: data.errors }
//     }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const fetchCommentReports = async ({ commit }) => {
//   try {
//     const { data } = await this.$repositories.comment.fetchCommentReports()
//     if (data.items !== null) {
//       return { value: data.items, error: '' }
//     } else {
//       return { value: null, error: data.errors }
//     }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const fetchCommentReporter = async ({ commit }, vm) => {
//   try {
//     const { data } = await this.$repositories.comment.fetchCommentReporter(vm)
//     if (data.isValid) {
//       return { value: data.value, error: '' }
//     } else {
//       return { value: null, error: data.errors }
//     }
//   } catch (e) {
//     return { value: null, error: e.response }
//   }
// }
