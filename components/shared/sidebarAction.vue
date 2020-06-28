<template>
          <div class="sidebar-menu">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"
        ><img src="~/assets/images/sidebar/menu-open.svg" width="18"
        /></v-app-bar-nav-icon>
        </div>
</template>

<script>
export default {
  name: "SidebarMenu",

};
</script>
