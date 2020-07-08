<template
  ><div>
    <form>
      <div class="comment-box add-comment reply-box">
        <span class="commenter-pic">
          <img src="~/assets/images/all/user-img.png" class="img-fluid" />
        </span>
        <span class="commenter-name">
          <a href="#">{{ commentDto.createdBy }}</a>
        </span>
        <br />
        <Ckeditor
          v-model="$v.commentDto.commentText.$model"
          :value="commentDto.commentText"
        ></Ckeditor>
        <MultipleUploads
          @deleteFile="removeFile"
          @selectFiles="bindfiles"
        ></MultipleUploads>
        <br />
<div class="userAction">
      <v-btn class="btn btn-green"
       :disabled="this.$v.commentDto.$invalid"
       @click.prevent="addComment()"
      >
        {{$vuetify.lang.t('$vuetify.sourceoptions.comment')}}
      </v-btn>
      <v-btn  color="error"
        class="mr-4"
      @click.prevent="showcomment(!isShow)">
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
  name: 'AddComment',
  components: { MultipleUploads, Ckeditor },
  props: {
    isShow: {
      type: Boolean,
      default: false,
      required
    },
    commentParentId: {
      type: String,
      default: '',
      required
    }
  },
  data() {
    return {
      commentDto: {
        CreationTime: new Date().toLocaleString(),
        sourceUrl: {
          fullUrl: '',
          urlTitle: '',
          siteCollection: ''
        },
        commentText: '',
        countLikes: 0,
        attachment: null,
        commentParentId: ''
      },
      liked: false,
      commentAttachments: []
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
    showcomment() {
      this.$emit('showcomment', !this.isShow)
    },
    addComment() {
      if (!this.$v.commentDto.$invalid) {
        this.commentDto.commentParentId = this.commentParentId
        this.$emit('addComment', this.commentDto, this.commentAttachments)
        this.showcomment()
      }
    },
    bindfiles(files) {
      this.commentAttachments.push(files)
    },
    removeFile(index) {
      this.commentAttachments.splice(index, 1)
    }
  }
})
</script>
<style scoped>
.fount-color {
  color: red;
}
</style>
