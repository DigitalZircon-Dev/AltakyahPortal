<template>
  <div class="profile">
    <div class="userImg">
      <img src="~/assets/images/all/user-img.png" />
    </div>
    <div class="userInfo">
      <p class="name">Muhammed Alzahrani</p>
      <p class="position">project Manager</p>
    </div>
    <div class="userAction">
      <v-btn class="btn btn-green">
        CALL
      </v-btn>
      <v-btn class="btn btn-orange">
        MESSAGE
      </v-btn>
    </div>

    <div class="userlist ">
      <v-container>
        <v-row justify="center" class="group">
          <v-col md="4" sm="3" cols="6" class="userLabel">Cell Phone</v-col>
          <v-col md="8" sm="3" cols="6" class="userVal">059651842</v-col>
        </v-row>
        <v-row justify="center" class="group">
          <v-col md="4" sm="3" cols="6" class="userLabel">Email</v-col>
          <v-col md="8" sm="3" cols="6" class="userVal"
            >Muhammed@gmail.com</v-col
          >
        </v-row>
        <v-row justify="center" class="group">
          <v-col md="4" sm="3" cols="6" class="userLabel">Account</v-col>
          <v-col md="8" sm="3" cols="6" class="userVal">@Hamido</v-col>
        </v-row>
      </v-container>
    </div>

    <div class="userActivity">
      <ul>
        <li class="topics"><span>35</span>Topics</li>
        <li class="comment"><span>24</span>Comments</li>
        <li class="voting"><span>18</span>Voting</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Profile',
  data() {
    return {
      menu: []
    }
  }
}
</script>
