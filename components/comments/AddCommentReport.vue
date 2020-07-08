<template
  ><div>
    <form>
      <div class="comment-box add-comment reply-box">
        <span class="commenter-pic">
          <img src="~/assets/images/all/user-img.png" class="img-fluid" />
        </span>
        <span class="commenter-name">
          <a href="#">{{ commentReportDto.createdBy }}</a>
        </span>
        <br />
        <input
          id="commentText"
          v-model="$v.commentReportDto.report.$model"
          type="text"
          class="form-control text-input"
          :class="{ error: $v.commentReportDto.report.$error }"
          :placeholder="$vuetify.lang.t('$vuetify.commentoptions.reportplaceholder')"
          @blur="$v.commentReportDto.report.$touch()"
        />
        <br />
        <div class="userAction">
      <v-btn class="btn btn-green"
       :disabled="this.$v.commentReportDto.$invalid"
      @click.prevent="addCommentReport()"
      >
        {{$vuetify.lang.t('$vuetify.commentoptions.report')}}
      </v-btn>
      <v-btn  color="error"
        class="mr-4"
      @click.prevent="showCommentReport(!isShow)">
        {{$vuetify.lang.t('$vuetify.commonoprations.cancel')}}
      </v-btn>
    </div>
      </div>
    </form>
  </div>
</template>
<script>
import Vue from 'vue'
import { required } from 'vuelidate/lib/validators'
export default Vue.extend({
  name: 'AddCommentReport',
  components: {},
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required
    },
    commentId: {
      type: String,
      default: '',
      required
    }
  },
  data() {
    return {
      commentReportDto: {
        report: '',
        commentId: ''
      }
    }
  },
  validations: {
    commentReportDto: {
      report: {
        required
      }
    }
  },
  created() {},
  methods: {
    showCommentReport() {
      this.$emit('showCommentReport', !this.isShow, this.commentId)
    },
    addCommentReport() {
      this.commentReportDto.commentId = this.commentId
      this.$emit('addCommentReport', this.commentReportDto)
      this.showCommentReport()
    }
  }
})
</script>
<style scoped>
.fount-color {
  color: red;
}
</style>
