// https://www.npmjs.com/package/vue-ckeditor5
// npm install vue-ckeditor5
// npm install --save @ckeditor/ckeditor5-vue @ckeditor/ckeditor5-build-classic

import Vue from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/ar'

import VueCkeditor from 'vue-ckeditor5'

const options = {
  editors: {
    classic: ClassicEditor
  },
  name: 'ckeditor'
}

Vue.use(VueCkeditor.plugin, options)
