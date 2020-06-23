<template>
  <!-- Start Header -->
  <header class="header">
    <!-- TopBar -->
    <div id="topBar">
      <v-container tag="div">
        <v-row class="wrapper">
          <!-- Logo -->
          <div id="logo">
            <a href="#">
              <img
                :src="require('@/assets/logo.svg')"
                alt=""
                @click="$vuetify.goTo(0)"
            /></a>
          </div>

          <v-spacer></v-spacer>

          <!-- Quick Links -->
          <div id="quickLinks">
            <div class="headerSearch">
              <v-btn icon color="#4f008c" large
                ><img
                  alt=""
                  :src="require('@/assets/images/header/header-search.svg')"
              /></v-btn>
            </div>

            <div class="headerMsg">
              <v-btn icon color="#4f008c" large
                ><img
                  alt=""
                  :src="require('@/assets/images/header/header-message.svg')"
              /></v-btn>
            </div>

            <div class="headerNotification">
              <v-btn icon color="#4f008c" large
                ><img
                  alt=""
                  :src="
                    require('@/assets/images/header/header-notification.svg')
                  "
              /></v-btn>
            </div>

            <div class="headerDirectory">
              <v-btn icon color="#4f008c" large>
                <img
                  alt=""
                  :src="require('@/assets/images/header/header-directory.svg')"
                />
              </v-btn>
            </div>
          </div>

          <!-- User Login Section -->
          <div id="UserSection">
            <a class="" href="#">
              <span>Muhammed</span>
              <img
                alt=""
                :src="require('@/assets/images/header/header-arrow-down.svg')"
              />
            </a>
            <img
              alt=""
              :src="require('@/assets/images/header/header-user.svg')"
            />
          </div>
        </v-row>
      </v-container>
    </div>

    <!-- MenuBar -->
    <div id="MenuBar">
      <v-container tag="div" class="py-0">
        <v-row class="wrapper">
          <!-- Main  Menu Links -->
          <v-toolbar-items class=" d-none d-md-block  mainMenu">
            <v-btn
              v-for="item in menu"
              :key="item.title"
              :to="item.link"
              depressed
              :data-text="item.title"
            >
              {{ item.title }}
              <img
                alt=""
                v-show="item.hasSub"
                :src="
                  require('@/assets/images/header/header-arrow-down-white.svg')
                "
              />
            </v-btn>
          </v-toolbar-items>

          <v-spacer></v-spacer>

          <div class="spportMenu">
            <v-btn link depressed>
              chatBot
            </v-btn>
            <v-btn @click="lang" v-show="!isArabic" link depressed>
              {{languageLabel.Arabic.Title}}
            </v-btn>
            <v-btn @click="lang" v-show="isArabic" link depressed>
              {{languageLabel.English.Title}}
            </v-btn>
          </div>

          <!-- Mobile  Menu Links -->
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" class="d-sm-block d-md-none mobileBtn">
                <v-icon dark>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="item in menu"
                :key="item.title"
                :to="item.link"
                depressed
              >
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-container>
    </div>
  </header>
  <!-- End Header -->

</template>

<script>
// @ is an alias to /src
export default {
  name: "Header",
  data() {
    return {
      menu: [
        { title: "Home", link: "/", hasSub: false },
        { title: "Company", link: "/page1", hasSub: true },
        { title: "E-Services", link: "/page2", hasSub: true },
        { title: "Community", link: "/page3", hasSub: true },
        { title: "Promotions", link: "/page4", hasSub: true },
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
    };
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
  }
};
</script>
<style lang="scss" scoped>
div#topBar {
  padding: 5px 0 3px;
}
#logo img {
  width: auto;
  height: 42px;
}
.wrapper {
  padding: 0 15px;
}
div#quickLinks img {
  width: 26px;
}
div#quickLinks > div {
  display: inline-block;
  margin-right: 20px;
  border-right: 1px solid #ddd;
  padding-right: 20px;
  text-align: center;
}
div#UserSection {
  vertical-align: middle;
}
div#UserSection a {
  color: #3f0070;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  padding: 10px 14px 0px 0px;
}
div#UserSection a span {
  margin: 0 8px;
}
div#UserSection a img {
  width: 16px;
  position: relative;
  top: 3px;
}
div#UserSection img {
  width: 42px;
}
div#MenuBar {
  background-color: #3f0070;
}
.mainMenu a {
  background: transparent !important;
  color: #fff !important;
  padding: 15px 25px !important;
  overflow: hidden;
}
.mainMenu a img {
  width: 12px;
  margin-left: 15px;
}
.mobileBtn {
  color: #fff !important;
  margin: 5px !important;
}
.spportMenu button {
  height: 47px !important;
  background: transparent !important;
  color: #fff !important;
}
</style>
