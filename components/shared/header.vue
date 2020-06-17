<template>
  <!-- Start Header -->
  <header class="header">
    <!-- TopBar -->
    <div class="topBar">
      <div class="topBar-wrapper">
        <div id="logo">
          <a href="#" to="/"> <img src="images/header/header-logo.svg"/></a>
        </div>

        <!-- User Login Section -->
        <div id="UserSection">
          <a class="" href="#">
            <span>Muhammed</span>
            <img alt="" src="images/header/header-arrow-down.svg" />
            <img alt="" src="images/header/header-user.svg" class="Avatar" />
          </a>
        </div>

        <!-- Quick Links -->
        <div id="quickLinks">
          <div class="headerSearch">
            <a href="#" to="/"> <img src="images/header/header-search.svg"/></a>
          </div>

          <div class="headerMsg">
            <a href="#" to="/">
              <img src="images/header/header-message.svg" />
              <span class="counter">2</span>
            </a>
          </div>

          <div class="headerNotification">
            <a href="#" to="/">
              <img src="images/header/header-notification.svg" />
              <span class="counter">2</span>
            </a>
          </div>

          <div class="headerDirectory">
            <a href="#" to="/">
              <img src="images/header/header-directory.svg"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="mainMenu">
      <div class="menuWrapper">
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
          </ul>
        </nav>

        <nav class="sub-navbar">
          <ul>
            <li>
              <a href="#" class="nav-links">
                <img src="images/header/header-chatbot.svg" />
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
      </div>
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
