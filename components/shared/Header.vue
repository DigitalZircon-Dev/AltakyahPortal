<template>
  <!-- Start Header -->
  <header class="header">
    <!-- TopBar -->
    <div class="topBar">
        <v-container class="pa-0">
        <v-row>
        <v-col md="12" cols="12" class="py-0">
        <div id="logo">
          <a href="#" to="/"> <img src="~/assets/images/header/header-logo.svg"/></a>
        </div>

        <!-- User Login Section -->
        <div id="UserSection">
          <a class="" href="#">
            <span>Muhammed</span>
            <img alt="" src="~/assets/images/header/header-arrow-down.svg" />
            <img alt="" src="~/assets/images/header/header-user.svg" class="Avatar" />
          </a>
        </div>

        <!-- Quick Links -->
        <div id="quickLinks">
          <div class="headerSearch">
            <a href="#" to="/"> <img src="~/assets/images/header/header-search.svg"/></a>
          </div>

          <div class="headerMsg">
            <a href="#" to="/">
              <img src="~/assets/images/header/header-message.svg" />
              <span class="counter">2</span>
            </a>
          </div>

          <div class="headerNotification">
            <a href="#" to="/">
              <img src="~/assets/images/header/header-notification.svg" />
              <span class="counter">2</span>
            </a>
          </div>

          <div class="headerDirectory">
            <a href="#" to="/">
              <img src="~/assets/images/header/header-directory.svg"
            /></a>
          </div>
        </div>
           </v-col>
</v-row>
</v-container>
      </div>

    <div class="mainMenu">
<v-container class="pa-0">
<v-row>
   <v-col md="12" cols="12" class="py-0">
        <nav class="navbar">
          <ul class="main-nav" id="js-menu">
            <li>
              <a href="#" class="nav-links active">Home</a>
            </li>
            <li>
              <a href="#" class="nav-links dropdown">Company</a>
            </li>
            <li>
              <a href="#" class="nav-links dropdown">E-Services</a>
            </li>
            <li>
              <a href="#" class="nav-links dropdown">Community</a>
            </li>
            <li>
              <a href="#" class="nav-links dropdown">Promotions </a>
            </li>
             <li>
               <a href="comments" class="nav-links dropdown">Comments </a>
                  <!-- <nuxt-link :to="$i18n.path('comments' ) "
                    class="nav-links"
                  >
                    Comments
                  </nuxt-link> -->
            </li>
          </ul>
        </nav>

        <nav class="sub-navbar">
          <ul>
            <li>
              <a href="#" class="nav-links">
                <img src="~/assets/images/header/header-chatbot.svg" />
              </a>
            </li>
            <li>
              <!-- <a href="#" class="nav-links">
                العربية
              </a> -->
              <LangSwitcher/>
            </li>
          </ul>

        </nav>
   </v-col>
</v-row>
</v-container>
      </div>
  </header>
  <!-- End Header -->
</template>

<script>
// @ is an alias to /src
import LangSwitcher from '@/components/shared/LangSwitcher.vue'

export default {
  components: {
    LangSwitcher,
  },
  name: 'Header',
  data() {
    return {
      menu: []
    }
  }
}
</script>
