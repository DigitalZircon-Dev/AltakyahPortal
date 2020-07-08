<template>
  <div>
    <input
      id="multipleFiles"
      ref="multipleFiles"
      :disabled="isdisabled"
      type="file"
      multiple=""
      accept="image/jpeg,image/png,image/gif','image/jpg"
      @change="selectFiles($event.target.files)"
    />
    <div >
      <div>
        <v-alert  v-model="alert" outlined type="warning" border="left" dismissible v-if="errorMaximumFile">
          {{ $vuetify.lang.t('$vuetify.multipleuploads.maximumfileerror') }} ({{
            maximumFile
          }}) .
        </v-alert>
      </div>
    </div>
    <br />
    <v-card max-width="500">
      <v-list v-if="uploadFiles.length > 0" subheader>
        <v-list-item v-for="(uploadFile, index) in uploadFiles" :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="uploadFile.fileName"></v-list-item-title>
            <small class="text-muted error-message">{{
              uploadFile.invalidMessage
            }}</small>
          </v-list-item-content>
          <v-btn
            icon
            @click.prevent="deleteFile(uploadFile.lastModified, uploadFile.id)"
          >
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import _ from 'lodash'
import helper from '@/helpers/Utils'

export default {
  name: 'MultipleUploads',
  props: {
    files: {
      type: Array,
      default: null
    },
    id: {
      type: String,
      default: ''
    },
    maximumFile: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      uploadFiles: this.files || [],
      attachemnts: [],
      alert: true,
      message: '',
      errorMaximumFile: false,
      isdisabled: this.files?.length >= this.maximumFile ?? false
    }
  },
  watch: {
    files() {
      if (this.files !== null) {
        this.uploadFiles = this.files
      }
    }
  },
  methods: {
    selectFiles(attachemnt) {

      this.errorMaximumFile = false
      this.attachemnts = attachemnt

      const cointFiles = parseInt(
        this.attachemnts.length + this.uploadFiles.length
      )
     debugger
      if (cointFiles > this.maximumFile) {
        this.errorMaximumFile = true
        this.alert = true
        return
      }

      // disabled file upload if count of files greater than maximumFile
      this.isdisabled = cointFiles >= this.maximumFile

      _.forEach(this.attachemnts, (file) => {
        this.uploadFiles.push({
          id: '',
          fileName: file.name,
          file,
          invalidMessage: helper.validateImage(file),
          lastModified: file.lastModified
        })
        if (helper.validateImage(file) === '') {
          this.$emit('selectFiles', file)
        }
      })
    },
    deleteFile(lastModified, id) {
      const index = this.uploadFiles.findIndex(
        (f) => f.lastModified === lastModified
      )
      this.uploadFiles.splice(index, 1)
      this.$emit('deleteFile', lastModified, id)
      this.isdisabled = this.uploadFiles.length > this.maximumFile
    }
  }
}
</script>
<style scoped>
.error-message {
  color: #dc7c7c !important;
}
</style>
