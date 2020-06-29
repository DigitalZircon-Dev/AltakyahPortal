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
    <div v-if="errorMaximumFile" class="alert alert-warning" role="alert">
      {{ $vuetify.lang.t('$vuetify.multipleuploads.maximumfileerror') }} ({{ maximumFile }}) .
    </div>
    <div class="container attachment-container">
      <div class="col-md-8 order-md-6 mb-6">
        <ul class="list-group mb-3">
          <li
            v-for="(uploadFile, index) in uploadFiles"
            :key="index"
            :class="
              uploadFile.invalidMessage
                ? 'list-group-item d-flex justify-content-between lh-condensed error-message'
                : 'list-group-item d-flex justify-content-between lh-condensed'
            "
          >
            <div>
              <h6 class="my-0">{{ uploadFile.fileName }}</h6>
              <small class="text-muted error-message">{{
                uploadFile.invalidMessage
              }}</small>
            </div>
            <span class="text-muted">
              <button
                :title="$vuetify.lang.t('$vuetify.commonoprations.delete')"
                type="button"
                class="delete-icon"
                @click.prevent="
                  deleteFile(uploadFile.lastModified, uploadFile.id)
                "
              >
                <fa :icon="['fas', 'trash-alt']" />
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
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

      if (cointFiles > this.maximumFile) {
        this.errorMaximumFile = true
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
.delete-icon {
  color: #dc7c7c;
}
.error-message {
  color: #dc7c7c !important;
}
.attachment-container {
  padding: 5px;
  margin-right: -60px;
}
</style>
