<template>
<div >
    <v-dialog
         persistent
        v-model="modalConfirmation"
        max-width="500"
      >
        <v-card>
  <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
       {{ title }}
        </v-card-title>
          <v-card-text>
           {{ message }}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="error"
              text
              @click="close"
            >
               {{ $vuetify.lang.t('$vuetify.commonoprations.close') }}
            </v-btn>

            <v-btn
              color="purple "
              text
              @click="deleteItem"
            >
              {{title}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</div>

</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  props: {
    itemId: {
      type: String,
      required,
      default: null
    },
    title: {
      type: String,
      required,
      default: null
    },
    message: {
      type: String,
      required,
      default: null
    },
      isopen: {
      type: Boolean,
      required,
      default: false
    },
  },
   data() {
    return {
      modalConfirmation: this.isopen
    }
  },
  destroyed() {
     this.modalConfirmation=false
  },
  methods: {
    deleteItem() {

      this.$emit('method', this.itemId)
      this.modalConfirmation=false
      this.$emit('close')
    },
    close() {
      this.modalConfirmation=false
      this.$emit('close')
    }
  }
}
</script>
