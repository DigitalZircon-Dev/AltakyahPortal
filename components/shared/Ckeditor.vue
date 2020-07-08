<template>
  <div>
    <ckeditor
      ref="ckeditor5"
      v-model="text"
      tag-name="textarea"
      name="ckeditor"
      :config="editorConfig"
      type="classic"
      class="reporticon"
      @input="onEditorInput"
      @keyup="onKeyup"
    />
    <span class="count-characters">
      {{ countCharacters }}/{{ maximumCharacters }}
      {{ $vuetify.lang.t('$vuetify.ckeditor.countcharacters') }}</span
    >
  </div>
</template>

<script>
import helper from '@/helpers/Utils'

export default {
  name: 'Ckeditor5',
  props: {
    value: {
      type: String,
      default: ''
    },
    maximumCharacters: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      text: this.value,
      oldText: '',
      countCharacters: 0,
      isDisabled: true,
      editorConfig: {
        language: {
          ui: 'ar', // The UI will be in English.
          content: 'ar' // But the content will be edited in Arabic.
        }
      }
    }
  },
  watch: {
    value() {
      this.text = this.value
      if (this.text !== '') {
        this.countCharacters = helper.stripHtml(this.text).length
      }
    }
  },
  methods: {
    onEditorInput() {
      this.$emit('input', this.text)
    },
    onKeyup() {
      const inputData = helper.stripHtml(
        this.$refs.ckeditor5.instance.getData()
      )

      this.countCharacters = inputData.length

      if (inputData.length > this.maximumCharacters) {
        this.text = this.oldText
        this.$refs.ckeditor5.instance.setData(this.oldText)

        return ''
      }
      this.oldText = this.$refs.ckeditor5.instance.getData()
    }
  }
}
</script>

<style scoped>
.reporticon {
  background: #ffc107 !important;
}
.count-characters {
  color: #f12e40;
}
</style>
