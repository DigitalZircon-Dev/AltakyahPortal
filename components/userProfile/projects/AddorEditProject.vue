<template>
  <div>
    <v-dialog v-model="addOrEditProject" persistent max-width="800">
      <div class="cardModal">
        <v-card>
          <v-card-title class="py-2">
            <span class="headline">
              {{ $vuetify.lang.t('$vuetify.project.addOrEditProject') }}</span
            >
            <v-spacer></v-spacer>
            <v-btn fab small icon color="red" @click.prevent="close()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" sm="12" class="py-0">
                  <v-text-field
                    v-model="$v.projectDto.projectName.$model"
                    :label="$vuetify.lang.t('$vuetify.project.projectName')"
                    required
                    class="rounded-0"
                    outlined
                    offset-y
                    dense
                  ></v-text-field>
                  <template v-if="$v.projectDto.projectName.$error">
                    <div class="input-feedback fount-color">
                      <p v-if="!$v.projectDto.projectName.required">
                        {{
                          $vuetify.lang.t(
                            '$vuetify.project.validators.projectName'
                          )
                        }}
                      </p>
                      <p v-if="!$v.projectDto.projectName.maxLength">
                        {{
                          $vuetify.lang.t(
                            '$vuetify.project.validators.projectNameMaxLength'
                          )
                        }}
                      </p>
                    </div>
                  </template>
                </v-col>

                <v-col cols="12" sm="12" class="py-0">
                  <v-checkbox
                    v-model="stillWork"
                    :label="
                      $vuetify.lang.t('$vuetify.project.isCurrentlyWorking')
                    "
                    class="ma-0"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-menu
                    v-model="menuStartDate"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="$v.projectDto.startDate.$model"
                        :label="$vuetify.lang.t('$vuetify.project.startDate')"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="$v.projectDto.startDate.$model"
                      @input="menuStartDate = false"
                    ></v-date-picker>
                  </v-menu>
                  <div
                    v-if="$v.projectDto.startDate.$error"
                    class="input-feedback fount-color"
                  >
                    {{
                      $vuetify.lang.t('$vuetify.project.validators.startDate')
                    }}
                  </div>
                  <div v-if="isDateValid" class="input-feedback fount-color">
                    {{
                      $vuetify.lang.t(
                        '$vuetify.project.validators.startDateGreaterThanEndDateError'
                      )
                    }}
                  </div>
                </v-col>
                <v-col cols="12" sm="6" class="py-0">
                  <div
                    v-if="projectDto.isCurrentlyWorking"
                    class="form-group col-md-6"
                  >
                    <P>{{ $vuetify.lang.t('$vuetify.project.present') }}</P>
                  </div>
                  <v-menu
                    v-if="!projectDto.isCurrentlyWorking"
                    v-model="menuEndDate"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="$v.projectDto.endDate.$model"
                        :label="$vuetify.lang.t('$vuetify.project.endDate')"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="$v.projectDto.endDate.$model"
                      @input="menuEndDate = false"
                    ></v-date-picker>
                  </v-menu>
                  <div
                    v-if="$v.projectDto.endDate.$error"
                    class="input-feedback fount-color"
                  >
                    {{ $vuetify.lang.t('$vuetify.project.validators.endDate') }}
                  </div>
                </v-col>

                <v-col cols="12" sm="6" md="12">
                  <multiselect
                    id="projectTeamMembers"
                    v-model="projectDto.projectTeamMembers"
                    :options="teamMembers"
                    :multiple="true"
                    :close-on-select="false"
                    :clear-on-select="false"
                    :hide-selected="true"
                    :preserve-search="true"
                    :placeholder="
                      $vuetify.lang.t(
                        '$vuetify.project.projectTeamMembersplaceholder'
                      )
                    "
                    label="memberName"
                    track-by="memberName"
                  >
                  </multiselect>
                </v-col>

                <v-col cols="12" sm="12" class="py-0">
                  <label for="Description">
                    {{ $vuetify.lang.t('$vuetify.project.description') }}</label
                  >
                  <Ckeditor
                    v-model="$v.projectDto.description.$model"
                    :value="projectDto.description"
                    :maximum-characters="3000"
                    :class="{ error: $v.projectDto.description.$error }"
                    @blur="$v.projectDto.description.$touch()"
                  ></Ckeditor>
                  <div
                    v-if="$v.projectDto.description.$error"
                    class="input-feedback fount-color"
                  >
                    {{
                      $vuetify.lang.t('$vuetify.project.validators.description')
                    }}
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" class="py-0">
                  <v-btn
                    class="rounded-0 stc_color_white--text mr-3"
                    :disabled="
                      isDateValid || !this.$v.projectDto.$invalid == false
                    "
                    depressed
                    color="stc_color_oasislight"
                    @click.prevent="save()"
                  >
                    {{
                      $vuetify.lang.t('$vuetify.commonoprations.save')
                    }}</v-btn
                  >
                  <v-btn class="rounded-0" depressed @click.prevent="close()">
                    {{
                      $vuetify.lang.t('$vuetify.commonoprations.close')
                    }}</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>
<script>
import { required, requiredIf, maxLength } from 'vuelidate/lib/validators'
import Multiselect from 'vue-multiselect'
import Ckeditor from '@/components/shared/Ckeditor'

export default {
  name: 'AddOrEditProject',
  components: { Ckeditor, Multiselect },
  props: {
    id: {
      type: String,
      default: null
    },
    isRequired: {
      type: Boolean,
      default: null
    },
    displayAddOrEditProject: {
      type: Boolean,
      default: null
    }
  },
  validations: {
    projectDto: {
      projectName: {
        required,
        maxLength: maxLength(255)
      },
      startDate: {
        required
      },
      description: {
        required,
        maxLength: maxLength(3000)
      },
      endDate: {
        requiredIf: requiredIf((vueInstance) => {
          return !vueInstance.isCurrentlyWorking
        })
      }
    }
  },
  data() {
    return {
      isDateValid: false,
      userId: this.$route.query.userId,
      modalClass: 'modal fade',
      menuStartDate: false,
      menuEndDate: false,
      addOrEditProject: this.displayAddOrEditProject,
      projectDto: {
        projectName: '',
        ProjectTeamMember: [],
        isCurrentlyWorking: false,
        startDate: '',
        endDate: '',
        description: ''
      },
      teamMembers: [],
      req: this.isRequired
    }
  },
  watch: {
    'projectDto.endDate': {
      handler(after) {
        this.isDateValid = new Date(after) < new Date(this.projectDto.startDate)
      },
      deep: true
    },
    'projectDto.startDate': {
      handler(after) {
        this.isDateValid = new Date(after) > new Date(this.projectDto.endDate)
      },
      deep: true
    }
  },
  created() {
    this.fetchProject()
    this.fetchTeamMembers()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async save() {
      if (!this.$v.projectDto.$invalid) {
        const result = await this.$store.dispatch(
          'userProfile/addOrEditProject',
          this.projectDto
        )
        if (result.value !== null) {
          this.$emit('bindprojects', result.value)
          this.$emit('close')
        }
      }
    },
    async fetchProject() {
      const projectId = this.id
      if (projectId !== '') {
        const vm = { id: this.id }
        const result = await this.$store.dispatch(
          'userProfile/fetchProject',
          vm
        )
        if (result.value) {
          this.projectDto = result.value
        }
      }
    },
    async fetchTeamMembers() {
      const result = await this.$store.dispatch('userProfile/fetchTeamMembers')
      if (result.value) {
        this.teamMembers = result.value
      }
    }
  }
}
</script>
<style scoped>
.fount-color {
  color: red;
}
</style>
