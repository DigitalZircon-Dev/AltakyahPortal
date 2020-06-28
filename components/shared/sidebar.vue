<template>
  <!-- Sidebar -->
  <div class="navSideBar">
    <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      color="primary"
      height="100%"
      width="15%"
    >
      <v-list dense>
        <v-list-item class="sidebarTitle">
          <v-list-item-content>
            <v-list-item-title> Main Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Vacations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group>
          <template v-slot:activator class="navtitle">
            <v-list-item-content>
              <v-list-item-title>MyTeam</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(admin, i) in admins" :key="i" link>
            <v-list-item-title v-text="admin[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!-- End Sidebar -->
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: false,
      items: [
        { text: "Contacts" },
        {
          text: "More",
          model: false,
          children: [
            { text: "Import" },
            { text: "Export" },
            { text: "Print" },
            { text: "Undo changes" },
            { text: "Other contacts" }
          ]
        }
      ],
      admins: [["sub Link 1"], ["sub Link 2"]]
    };
  },
   props: ['drawer'],
};
</script>
