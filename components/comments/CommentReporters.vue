<template>
  <div>
    <v-dialog v-model="commentReporters" persistent max-width="500">
      <v-card>
        <v-card-text>
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
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="error"
            class="mr-4" @click="close">
            {{ $vuetify.lang.t('$vuetify.commonoprations.close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'CommentReporters',
  props: {
    id: {
      type: String,
      default: ''
    },
      displayCommentReporters: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      commentReporters: [],
      commentReporters: this.displayCommentReporters
    }
  },
  created() {
    this.fetchCommentReporter()
  },
  methods: {
    close() {
      this.commentReporters = false
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
        this.close()
      }
    }
  }
}
</script>
