<template>
  <div
    id="modalConfirmation"
    class="modal fade"
    tabindex="-1"
    data-keyboard="false"
    data-backdrop="static"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="deleteConfirmationLabel" class="modal-title">
            {{ title }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click.prevent="close()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click.prevent="close()"
          >
            {{ $vuetify.lang.t('$vuetify.commonoprations.close') }}
          </button>
          <input
            class="btn btn-danger"
            type="submit"
            :value="title"
            @click.prevent="deleteItem()"
          />
        </div>
      </div>
    </div>
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
    }
  },
  methods: {
    deleteItem() {
      this.$emit('method', this.itemId)

      // eslint-disable-next-line no-undef
      $('#modalConfirmation').modal('hide')
      this.$emit('close')
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>
