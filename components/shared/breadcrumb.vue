<template>
  <div class="breadcrumb">
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon class="icon-chevron-right">mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Breadcumb',
  data() {
    return {
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        },
        {
          text: 'Dashboard',
          disabled: false,
          href: '/'
        },
        {
          text: 'Profile',
          disabled: true,
          href: '/'
        }
      ]
    }
  }
}
</script>
