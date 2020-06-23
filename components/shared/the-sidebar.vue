<template>
  <!-- Start Sidebar -->
  <aside id="mySidenav" class="sidenav">
    <div class="sidebarTitle">
      Main Menu
    </div>
    <v-list class="sidenav-items" tag="ul">

      <v-list-item tag="li" class="active sidenav-item"
            v-for="item in menu"
            :key="item.title" 
            :to="item.link" 
            router link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

      <v-list-item tag="li" class="active sidenav-item">
        <v-list-item-title to="/" link>Profile</v-list-item-title>
      </v-list-item>

      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/vacation" link>Vacations</v-list-item-title>
      </v-list-item>

      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/" link>Leave/Absence</v-list-item-title>
      </v-list-item>

      <v-list-group class="sidenav-group">
        <template class="sidenav-header" v-slot:activator>
          <v-list-item tag="li" class="sidenav-item">
            <v-list-item-title to="/" link>MyTeam</v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item
          v-for="(admin, i) in admins"
          :key="i"
          tag="li"
          class="sidenav-item"
        >
          <v-list-item-title v-text="admin[0]" to="/" link></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group class="sidenav-group">
        <template class="sidenav-header" v-slot:activator>
          <v-list-item tag="li" class="sidenav-item">
            <v-list-item-title to="/" link>Personal</v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item
          v-for="(admin, i) in admins"
          :key="i"
          tag="li"
          class="sidenav-item"
        >
          <v-list-item-title v-text="admin[0]" to="/" link></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group class="sidenav-group">
        <template class="sidenav-header" v-slot:activator>
          <v-list-item tag="li" class="sidenav-item">
            <v-list-item-title to="/" link>Pay</v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item
          v-for="(admin, i) in admins"
          :key="i"
          tag="li"
          class="sidenav-item"
        >
          <v-list-item-title v-text="admin[0]" to="/" link></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/" link>Employee Requests</v-list-item-title>
      </v-list-item>

      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/" link>Employment History</v-list-item-title>
      </v-list-item>

      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/" link>Tasks</v-list-item-title>
      </v-list-item>

      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/" link>Requests</v-list-item-title>
      </v-list-item>

      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/" link>Performance</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="sidebarTitle">
      Sub Menu
    </div>

    <v-list class="sidenav-items" tag="ul">
      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/" link> Projects</v-list-item-title>
      </v-list-item>

      <v-list-item tag="li" class="sidenav-item">
        <v-list-item-title to="/" link> Skills& Expertise</v-list-item-title>
      </v-list-item>
    </v-list>
  </aside>
  <!-- End Sidebar -->
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Sidebar',
  data() {
    return {
      menu: [
        { title: "Profile", link: "/", hasSub: false },
        { title: "Vacation", link: "/vacation", hasSub: true },
      ],
      admins: [['sub Link 1'], ['sub Link 2']]
    }
  }
}
</script>
