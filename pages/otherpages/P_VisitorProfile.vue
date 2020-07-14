<template>
  <div class="profile-section">
    <v-container class="py-0">
      <v-row>
      <v-col md="4" lg="4" xl="3" cols="12">
      <!-- Profile Component-->
      <Profile />
      <!-- End Profile Component-->
      </v-col>

      <v-col md="8" lg="8" xl="9" cols="12">
      <!-- Profile Reports Component-->
      <ProfileReports />
      <!-- End Profile Reports Component-->

      <v-row class="py-5">
           <v-col>
            <!-- Card Skills Component-->
            <cardSkills />
            <!-- End Card Skills Component-->
          </v-col>

          <v-col >
            <!-- Card Projects Component-->
            <cardProjects />
            <!-- End Card Projects Component-->
          </v-col>
      </v-row>

      </v-col>
      <v-col cols="12">
            <!-- Card Projects Component-->
            <cardRecommendations />
            <!-- End Card Projects Component-->
          </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <!-- Card Vacation Component-->

          <!-- End Card Vacation Component-->
        </v-col>
      </v-row>


    </v-container>
  </div>
</template>

<script>
import Profile from "@/components/userProfile/Profile.vue";
import ProfileReports from "@/components/userProfile/profile-reports.vue";
import cardSkills from "@/components/userProfile/skills/card-skills.vue";
import cardProjects from "@/components/projects/card-projects.vue";
import cardRecommendations from "@/components/userProfile/card-recommendations.vue";

export default {
  components: {
    Profile,
    ProfileReports,
    cardSkills,
    cardProjects,
    cardRecommendations
  },
  data() {
  }

};
</script>


<style lang="scss" scoped>

</style>
