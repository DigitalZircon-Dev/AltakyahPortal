<template>
<div class="toDoList">

    <ul class="todolist-items">
      <li  v-for="(uploadFile, index) in uploadFiles"
            :key="index">
        <span class="toDo-item-time">{{ uploadFile.fileName }}</span>

        <v-btn class="toDo-item-option"
       @click.prevent="download(uploadFile.id, uploadFile.fileName)">
                <fa :icon="['fas', 'download']" />
      </v-btn>
      </li>

    </ul>
<div class="userAction">

      <v-btn class="btn btn-orange"
      @click.prevent="displayCommentAttachment(!isdisplayCommentAttachment)">
        {{$vuetify.lang.t('$vuetify.commonoprations.cancel')}}
      </v-btn>
    </div>
  </div>

</template>
<script>
import axios from 'axios'

export default {
  name: 'MultipleUploads',
  props: {
    id: {
      type: String,
      default: ''
    },
    isdisplayCommentAttachment: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uploadFiles: []
    }
  },
  async created() {
    const vm = { commentId: this.id }
    const data = await this.$store.dispatch('comment/fetchAttachments', vm)
    if (data.value !== null) {
      this.uploadFiles = data.value
    }
  },
  methods: {
    async download(id, fileName) {
      const vm = { attachmentId: id }
      const httpClient = axios.create({
        baseURL: 'https://localhost:44368/api/app',
        withCredentials: false,
        responseType: 'arraybuffer'
      })

      const data = await httpClient.get(
        '/CommentAttachment/DownloadAttachment/' + vm.attachmentId
      )

      if (data.data !== null && data.data.byteLength > 0) {
        const url = window.URL.createObjectURL(new Blob([data.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
      }
    },
    displayCommentAttachment(isdisplayCommentAttachment) {
      this.$emit('displayCommentAttachment', isdisplayCommentAttachment)
    }
  }
}
</script>
<style scoped>
.attachment-container {
  padding: 5px;
  margin-right: -60px;
}
</style>
