// npm i nuxt-fontawesome
// npm i @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome
//npm install --save @fortawesome/free-solid-svg-icons

<template>
  <div>
    <v-icon :color="color">{{name}}</v-icon>
    <slot></slot>
  </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators'
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      default: '',
      required
    },
    className: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 22
    },
    color :{
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.reporticon {
  color: #ffc107 !important;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
