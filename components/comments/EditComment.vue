<template
  ><div>
    <form>
      <div class="comment-box add-comment reply-box">
        <span class="commenter-pic">
          <img src="~/assets/images/all/user-img.png" class="img-fluid" />
        </span>
        <span class="commenter-name">
          <a href="#">{{ commentDto.commentBy }}</a>
        </span>
        <br />
        <Ckeditor
          v-model="$v.commentDto.commentText.$model"
          :value="commentDto.commentText"
          :class="{ error: $v.commentDto.commentText.$error }"
        />
        <MultipleUploads
          :id="commentId"
          :maximum-file="3"
          :files="commentDto.commentAttachments"
          @deleteFile="deleteFile"
          @selectFiles="bindfiles"
        ></MultipleUploads>
        <br />

<div class="userAction">
      <v-btn class="btn btn-green"
       :disabled="this.$v.commentDto.$invalid"
       @click.prevent="editComment()"
      >
        {{$vuetify.lang.t('$vuetify.commonoprations.edit')}}
      </v-btn>
      <v-btn  color="error"
        class="mr-4"
      @click.prevent="displayEditComment(!isShow)">
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
import MultipleUploads from '@/components/shared/MultipleUploads.vue'
import Ckeditor from '@/components/shared/Ckeditor'

export default Vue.extend({
  components: { MultipleUploads, Ckeditor },
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
      commentDto: this.fetchComment(),
      commentAttachments: [],
      isLoad: false
    }
  },
  validations: {
    commentDto: {
      commentText: {
        required
      }
    }
  },
  created() {},
  methods: {
    async fetchComment() {
      const vm = { id: this.commentId }
      const data = await this.$store.dispatch('comment/fetchComment', vm)
      if (data.value !== null) {
        this.commentDto = data.value
        if (this.commentDto.commentParentId === null) {
          this.commentDto.commentParentId = ''
        }
      }
    },
    displayEditComment() {
      this.$emit('displayEditComment', !this.isShow)
    },
    editComment() {
      if (!this.$v.commentDto.$invalid) {
        this.$emit('editComment', this.commentDto, this.commentAttachments)
        this.displayEditComment()
      }
    },
    bindfiles(files) {
      this.commentAttachments.push(files)
    },
    async deleteFile(lastModified, id) {
      const index = this.commentAttachments.findIndex(
        (f) => f.lastModified === lastModified
      )
      this.commentAttachments.splice(index, 1)

      if (id !== '') {
        const vm = { id }
        const response = await this.$store.dispatch(
          'comment/deleteCommentAttachment',
          vm
        )
        if (response.value) {
          // eslint-disable-next-line no-console
          console.log('تم حذف المرفق بنجاح')
        }
      }
    }
  }
})
</script>
<style scoped>
.fount-color {
  color: red;
}
</style>
