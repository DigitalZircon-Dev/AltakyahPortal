<template>
  <footer class="footer">
    <v-container class="pa-0">
      <v-row>
        <v-col md="12" cols="12" class="py-2">
          <span class="copyright"
            >Copyright © 2020 stcs. All rights reserved.</span
          >
          <ul class="social-icons">
            <li>
              <a href="http://www.facebook.com"
                ><img src="~/assets/images/social/social-facebook.svg"
              /></a>
            </li>
            <li>
              <a href="http://www.twitter.com"
                ><img src="~/assets/images/social/social-twitter.svg"
              /></a>
            </li>
            <li>
              <a href="http://www.youtube.com"
                ><img src="~/assets/images/social/social-youtube.svg"
              /></a>
            </li>
            <li>
              <a href="http://www.skype.com"
                ><img src="~/assets/images/social/social-skype.svg"
              /></a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Footer",
  data() {
    return {
      menu: []
    };
  }
};
</script>
