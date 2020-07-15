<template>
  <div class="card-information projectsBx">
    <div class="card-header">
    <p>{{ $vuetify.lang.t('$vuetify.project.projectTitle') }}</p>
      <div class="action">
        <a href="#" class="addBtn" @click.prevent="showAddProject">
          <img src="~/assets/images/card/card-plus.svg" alt="" />
          Add
        </a>
        <a href="#" class="Expand">
          <img src="~/assets/images/card/card-expand.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <ul class="project-list">
        <li v-for="project in projects" :key="project.id">
          <a href="#"><span class="icon-project"><img src="~/assets/images/all/projects-icon.svg" alt=""></span>{{project.projectName}} </a></li>

      </ul>
    </div>
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
  name: 'cardProjects',
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
      const self = this
      const index = self.projects.findIndex((f) => f.id === projectDto.id)
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
