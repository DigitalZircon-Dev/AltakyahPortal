<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-card-title class="headline">
          {{ $vuetify.lang.t('$vuetify.project.projectTitle') }}
           <v-btn icon @click.prevent="showAddProject" color="purple">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
          </v-card-title
        >

        <v-col v-for="project in projects" :key="project.id" cols="12">
          <v-card class="mx-auto">
            <v-card-title
              class="headline"
              v-text="project.projectName"
            ></v-card-title>
            <v-card-subtitle>
              {{ project.startDate }} /
              <span v-if="project.isCurrentlyWorking">{{
                $vuetify.lang.t('$vuetify.project.present')
              }}</span>
              {{ project.endDate }}
            </v-card-subtitle>
            <ProjectTeamMember
              v-if="project.projectTeamMembers.length > 0"
              :team-members="project.projectTeamMembers"
            ></ProjectTeamMember>
            <v-card-text>
              <p class="comment-txt more" v-html="project.description"></p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="project.isAllowedDelete"
                icon
                @click.prevent="displayDeleteProject(project.id)"
              >
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>

              <v-btn
                v-if="project.isAllowedEdit"
                icon
                color="purple"
                @click.prevent="showEditProject(project.id)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AddorEditProject
      v-if="isDisplayAddorEditProject"
      :id="id"
      :display-add-or-edit-project="isDisplayAddorEditProject"
      :is-required="false"
      :project-dto="projectItem"
      @bindprojects="bindprojects"
      @close="close"
    ></AddorEditProject>
    <ModalConfirmation
      v-if="isDisplayDeleteProject"
      :display-add-or-edit-project="isDisplayAddorEditProject"
      :isopen="isDisplayDeleteProject"
      :item-id="id"
      :title="$vuetify.lang.t('$vuetify.commonoprations.delete')"
      :message="$vuetify.lang.t('$vuetify.messages.deleteConfirmation')"
      @method="onDeleteProject"
      @close="close"
    ></ModalConfirmation>
  </div>
</template>
<script>
import Vue from 'vue'
import AddorEditProject from '../projects/AddorEditProject'
import ProjectTeamMember from '../projects/ProjectTeamMember'
import BaseIcon from '../../shared/BaseIcon'
import ModalConfirmation from '@/components/shared/ModalConfirmation'

export default Vue.extend({
  name: 'Projects',
  components: {
    AddorEditProject,
    ProjectTeamMember,
    BaseIcon,
    ModalConfirmation
  },
  data() {
    return {
      id: '',
      userId: this.$route.query.userId,
      isDisplayAddorEditProject: false,
      isDisplayDeleteProject: false,
      teamMember: null,
      projectItem: {
        projectName: '',
        projectTeamMembers: [],
        isCurrentlyWorking: false,
        startDate: '',
        endDate: '',
        description: ''
      },
      projects: []
    }
  },
  created() {
    this.fetchProjects()
  },
  methods: {
    close() {
      this.isDisplayAddorEditProject = false
      this.isDisplayDeleteProject = false
      this.id = ''
    },
    async fetchProjects() {
      const vm = { userId: this.$route.query.userId }
      const result = await this.$store.dispatch('userProfile/fetchProjects', vm)
      if (result.value) {
        this.projects = result.value
      }
    },
    showAddProject() {
      this.isDisplayAddorEditProject = true
    },
    showEditProject(_id) {
      this.id = _id
      this.isDisplayAddorEditProject = true
    },
    bindprojects(projectDto) {
      const index = this.projects.findIndex((f) => f.id === projectDto.id)
      if (index === -1) {
        this.projects.push(projectDto)
        // this.$notify({
        //   title: this.$vuetify.lang.t('$vuetify.project.projectTitle'),
        //   text: this.$vuetify.lang.t('$vuetify.project.notifications.save'),
        //   closeOnClick: true,
        //   type: 'success'
        // })
      } else {
        Object.assign(this.projects[index], projectDto)
        // this.$notify({
        //   title: this.$vuetify.lang.t('$vuetify.project.projectTitle'),
        //   text: this.$vuetify.lang.t('$vuetify.project.notifications.edit'),
        //   closeOnClick: true,
        //   type: 'success'
        // })
      }
    },
    displayDeleteProject(_id) {
      this.id = _id
      this.isDisplayDeleteProject = true
    },
    async onDeleteProject(_id) {
      const vm = { id: _id }
      const result = await this.$store.dispatch('userProfile/deleteProjec', vm)
      if (result.value) {
        const index = this.projects.findIndex((f) => f.id === _id)
        this.projects.splice(index, 1)
        // this.$notify({
        //   title: this.$vuetify.lang.t('$vuetify.project.projectTitle'),
        //   text: this.$vuetify.lang.t('$vuetify.project.notifications.delete'),
        //   closeOnClick: true,
        //   type: 'error'
        // })
      }
    }
  }
})
</script>

