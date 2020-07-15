<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <userHtml/>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/common/Logo.vue'
// import VuetifyLogo from '~/components/common/VuetifyLogo.vue'
import userHtml from '@/components/Design/userprofilehtml.vue'

export default {
  components: {
    //Logo,
    //VuetifyLogo,
    userHtml
  }
}
</script>
