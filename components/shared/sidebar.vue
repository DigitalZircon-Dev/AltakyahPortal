<template>
  <!-- Sidebar -->
  <div class="navSideBar">
          <v-navigation-drawer v-model="drawer" app absolute color="primary" height="100%" width="15%">
          <v-list dense>
        <v-list-item class="sidebarTitle">
        <v-list-item-content>
        <v-list-item-title >  Main Menu</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
        <v-list-item link class="active sidenav-item"
            v-for="item in menu"
            :key="item.title"
            :to="item.link"
            router>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group >
            <template v-slot:activator class="navtitle">
              <v-list-item-content >
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
  props: ['drawer'],
  data() {
    return {
      drawer: false,
       menu: [
        { title: "Profile", link: "/", hasSub: false },
        { title: "Vacation", link: "/vacation", hasSub: true },
        { title: "More", link: "/myteam",
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
      // items: [
      //   { text: "Contacts" },
      //   {
      //     text: "More",
      //     model: false,
      //     children: [
      //       { text: "Import" },
      //       { text: "Export" },
      //       { text: "Print" },
      //       { text: "Undo changes" },
      //       { text: "Other contacts" }
      //     ]
      //   }
      // ],
      admins: [["sub Link 1"], ["sub Link 2"]]
    };
  },
};
</script>
