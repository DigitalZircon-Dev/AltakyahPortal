import createRepository from '~/common/api/repository.js'

export default (ctx, inject) => {
  inject('RepositoryPlugin', createRepository(ctx.$axios))
}
