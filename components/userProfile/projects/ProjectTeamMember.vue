<template>
  <div>
     <v-card-title class="headline">
        {{ $vuetify.lang.t('$vuetify.project.projectTeamMembers') }}</v-card-title
      >
    <v-list subheader>
      <v-list-item v-for="teamMember in teamMembers" :key="teamMember.id">
        <v-list-item-avatar>
          <v-img src="/_nuxt/assets/images/all/user-img.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="teamMember.memberName"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  name: 'TeamMembers',
  props: {
    teamMembers: {
      type: Array,
      default: null
    }
  }
}
</script>
