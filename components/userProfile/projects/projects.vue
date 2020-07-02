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

<style scope="this api replaced by slot-scope in 2.5.0+">
.comments-details button.btn.dropdown-toggle,
.comments-details .total-comments {
  font-size: 18px;
  font-weight: 500;
  color: #5e5e5e;
}

.comments-details {
  padding: 15px 15px;
}

.comments .comments .dropdown,
.comments .dropup {
  position: relative;
}
.comment-like-color {
  color: blue;
}

.comments button {
  background-color: transparent;
  border: none;
}

.comments .comment-box {
  width: 100%;
  float: left;
  height: 100%;
  background-color: #fafafa;
  padding: 10px 10px 10px;
  border-radius: 5px;
  margin-bottom: 0px !important;

  border: 1px solid #ddd;
}

.comments .add-comment {
  background-color: transparent;
  border: none;
  position: relative;
  margin-bottom: 50px;
}

.comments .commenter-pic {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 100%;
  border: 2px solid #fff;
  overflow: hidden;
  background-color: #fff;
}

.comments .add-comment .commenter-name {
  width: 100%;
  padding-left: 75px;
  position: absolute;
  top: 20px;
  left: -64px;
}

.comments .add-comment input {
  border-top: 0px;
  border-bottom: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
  outline: 0px;
  box-shadow: none;
  border-radius: 0;
  width: 100%;
  padding: 0;
  font-weight: normal;
}

.comments .add-comment input:focus {
  border-color: #03a9f4;
  border-width: 2px;
}

.comments .add-comment button[type='submit'] {
  background-color: #03a9f4;
  color: #fff;
  margin-right: 0px;
}

.comments .add-comment button {
  background-color: #f5f5f5;
  margin: 10px 5px;
  font-size: 14px;
  text-transform: uppercase;
  float: right;
}

.comments .commenter-name .comment-time {
  font-weight: normal;
  margin-left: 8px;
  font-size: 15px;
}

.comments p.comment-txt {
  font-size: 15px;
  /* border-bottom: 1px solid #ddd;
  padding: 0px 0px 15px; */
}

.comments .commenter-name {
  display: inline-block;
  position: relative;
  top: -20px;
  left: 0px;
  font-size: 16px;
  font-weight: bold;
}

.comments .comment-meta {
  font-size: 14px;
  color: #333;
  padding: 2px 5px 0px;
  line-height: 20px;
  /* float: right; */
}

.comments .replied {
  background-color: #fff;
  width: 95%;
  float: right;
  margin-top: 15px;
}

/*======Responsive CSS=======*/
@media (max-width: 767px) {
  .comments .commenter-name {
    font-size: 13px;
    top: -5px;
  }

  .comments .commenter-pic {
    width: 40px;
    height: 40px;
  }

  .comments .commenter-name a {
    display: block;
  }

  .comments .commenter-name .comment-time {
    display: block;
    margin-left: 0px;
  }
}
.delete-icon {
  color: #dc7c7c;
}
.reporticon {
  color: yellow !important;
}
.attachment-container {
  padding: 5px;
  margin-right: -60px;
}
</style>
