/* eslint-disable no-debugger */
<template>
  <div>
    <p>
      أعلنت وزارة الداخلية السعودية عن إطلاق مبادرة "عودة" والتي تمكن من يرغب من
      المقيمين من حاملي تأشيرتي (الخروج والعودة، والنهائي) من السفر جواً
      لبلدانهم، وذلك من خلال تقديم طلبات العودة إلى بلدانهم إلكترونياً عبر منصة
      أبشر.
    </p>
    <comments></comments>
  </div>
</template>

<script>
import Vue from 'vue'
import comments from '../../components/comments/Comments'

export default Vue.extend({
  components: { comments }
})
</script>
