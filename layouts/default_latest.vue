<template>
 <v-app>
    <Header />
    <div class="containerwrapper">
      <v-navigation-drawer v-model="drawer" app color="primary" dark="">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="subtitle-2" color="primary"
              ><p color="primary">Main Menu</p></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list>
          <v-list-item
            v-for="item in menu"
            :key="item.title" 
            :to="item.link" 
            router link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group dark color="white">
            <template v-slot:activator>
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

      <v-content>
        <div class="breadCrump">
          <span class="actionBtn">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </span>
          <v-breadcrumbs :items="breadCrumb" large></v-breadcrumbs>
        </div>
        <v-container fluid>
          <v-row>
             <nuxt />
          </v-row>
        </v-container>
      </v-content>
    </div>

    <v-footer color="primary">
      <span class="white--text text-center">
        Copyright © 2020 stcs. All rights reserved.
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '~/components/common/Header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      clipped: false,
      dialog: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      admins: [["sub Link 1"], ["sub Link 2"]],
      breadCrumb: [
      { text: "Home" },
      { text: "Sub Page" },
      { text: "Current Page" },
    ],
    menu: [
        { title: "Profile", link: "/profile", hasSub: false },
        { title: "Vacation", link: "/vacation", hasSub: true },
      ],
      languageLabel: {
        Arabic: {
          Title:'عربي',
          Lang:'ar'
          },
        English:{
          Title: 'English',
          Lang: 'en'
        }
      },
      isArabic: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods:{
    lang() {
      console.log(this.$vuetify.lang.current);
      console.log(this.isArabic);
      this.isArabic = !this.isArabic;
      console.log(this.isArabic); 
      if(this.isArabic){
        this.$vuetify.lang.current ='ar' ;
        this.$vuetify.rtl = true;
      }else {
        this.$vuetify.lang.current ='en';
        this.$vuetify.rtl = false;
      }
      console.log(this.$vuetify.lang.current);
    }
  },
  created() {
   }
}
</script>
<style lang="scss" scoped>
.containerwrapper {
  position: relative;
  min-height: 400px;
}
.containerwrapper header,
.containerwrapper nav {
  position: absolute !important;
}
.containerwrapper nav {
  bottom: 0px;
  height: auto !important;
}
span.actionBtn {
  float: left;
  margin: 10px;
}
.menuHeaderTitle {
  color: #8e9aa0;
  margin-bottom: 0;
}
</style>
