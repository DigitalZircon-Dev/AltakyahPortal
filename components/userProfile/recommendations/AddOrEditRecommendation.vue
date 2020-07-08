<template>
  <div>
    <v-dialog v-model="addOrEditRecommendation" persistent max-width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          {{
            $vuetify.lang.t('$vuetify.recommendations.addOrEditRecommendation')
          }}
        </v-card-title>
        <v-card-text>
          <form>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <label for="Description">
                  {{
                    $vuetify.lang.t('$vuetify.recommendations.recommendation')
                  }}</label
                >
                <Ckeditor
                  v-model="$v.userRecommendationDto.recommendation.$model"
                  :value="userRecommendationDto.recommendation"
                  :class="{
                    error: $v.userRecommendationDto.recommendation.$error
                  }"
                  @blur="$v.userRecommendationDto.recommendation.$touch()"
                ></Ckeditor>
                <div
                  v-if="$v.userRecommendationDto.recommendation.$error"
                  class="input-feedback fount-color"
                >
                  {{
                    $vuetify.lang.t(
                      '$vuetify.recommendations.validators.recommendation'
                    )
                  }}
                </div>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            :disabled="!this.$v.userRecommendationDto.$invalid == false"
            @click.prevent="save"
          >
            {{ $vuetify.lang.t('$vuetify.commonoprations.save') }}
          </v-btn>
          <v-btn color="error" @click.prevent="close()">
            {{ $vuetify.lang.t('$vuetify.commonoprations.close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Ckeditor from '@/components/shared/Ckeditor'

export default {
  name: 'AddOrEditRecommendation',
  components: { Ckeditor },
  props: {
    userRecommendationDto: {
      type: Object,
      default: null,
      required
    },
    displayaddOrEditRecommendation: {
      type: Boolean,
      default: null
    }
  },
  validations: {
    userRecommendationDto: {
      recommendation: {
        required
      }
    }
  },
  data() {
    return {
      addOrEditRecommendation: this.displayaddOrEditRecommendation,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async save() {
      const result = await this.$store.dispatch(
        'userProfile/addOrEditUserRecommendation',
        this.userRecommendationDto
      )
      if (result.value) {
        this.$emit('bindRecommendations', result.value)
        this.addOrEditRecommendation = false
      }
    }
  }
}
</script>
<style scoped>
.modal-dialog {
  max-width: 674px !important;
  margin: 1.75rem auto;
}
.datepicker {
  z-index: 1100 !important;
}
#ui-datepicker-div {
  width: 30% !important;
}
</style>
