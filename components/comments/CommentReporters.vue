<template>
  <div>
    <div
      id="CommentReporters"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container">
              <div>
                <table class="grid table">
                  <tbody>
                    <tr>
                      <th data-th="#">{{ $vuetify.lang.t('$vuetify.CommentReporter.reportBy') }}</th>
                      <th data-th="#">{{ $vuetify.lang.t('$vuetify.CommentReporter.report') }}</th>
                    </tr>
                    <tr
                      v-for="commentReporter in commentReporters"
                      :key="commentReporter.id"
                    >
                      <td>{{ commentReporter.reportBy }}</td>
                      <td>{{ commentReporter.report }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <input
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              :value="$vuetify.lang.t('$vuetify.commonoprations.cancel')"
              @click.prevent="close()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommentReporters',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      commentReporters: []
    }
  },
  created() {
    this.fetchCommentReporter()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async fetchCommentReporter() {
      const vm = { commentId: this.id }
      const data = await this.$store.dispatch(
        'comment/fetchCommentReporter',
        vm
      )
      if (data.value !== null) {
        this.commentReporters = data.value
      } else {
        // eslint-disable-next-line no-undef
        $('#CommentReporters').modal('hide')
      }
    }
  }
}
</script>
