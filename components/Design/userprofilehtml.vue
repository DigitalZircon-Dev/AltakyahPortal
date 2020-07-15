<template>
    <div class="profile-section">
      <v-container class="py-0">
        <v-row>
          <v-col cols="12" md="4" lg="4" xl="3">
          <!-- Profile Component-->
          <Profile />
          <!-- End Profile Component-->
          </v-col>

          <v-col cols="12" md="8" lg="8" xl="9">
            <!-- Profile Reports Component-->
            <ProfileReports />
            <!-- End Profile Reports Component-->

            <div class="profile-tasks-requests">
              <v-container class="px-0">
               <v-row>
              <!-- tabs tasks&requests Component-->
              <profileTasks />
              <!-- End tabs tasks&requests Component-->

              <!-- Profile chart Component-->
              <profileRequests />
              <!-- End Profile chart Component-->
               </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
        <!-- Start Summary-->
        <v-row>
          <v-col md="12" cols="12">
            <div class="sectionTitle">
              Summary
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" lg="4">
            <!-- Card Tasks Component-->
            <cardTasks />
            <!-- End Card Tasks Component-->
          </v-col>

          <v-col cols="12" md="6" lg="4">
              <!-- Card Requests Component-->
            <cardRequests />
            <!-- End Card Requests Component-->
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <!-- Card Vacation Component-->
            <cardVacation />
            <!-- End Card Vacation Component-->
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <!-- Card Skills Component-->
            <cardSkills />
            <!-- End Card Skills Component-->
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <!-- Card Projects Component-->
            <cardProjects />
            <!-- End Card Projects Component-->
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <!-- Card Recommendations-->
            <cardRecommendations />
            <!-- End Card Recommendations-->
          </v-col>




          <v-col cols="12" md="6" lg="4">
 <!-- Card Performance Component-->
            <cardPerformance />
            <!-- End Card Performance Component-->
          </v-col>


          <v-col cols="12" md="6" lg="4">
            <!-- Card Team Component-->
            <cardTeam />
            <!-- End Card Team Component-->
          </v-col>


       <v-col cols="12" md="6" lg="4">
            <!-- Card Favourites Component-->
            <cardFavourites />
            <!-- End Card Favourites Component-->
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <!-- Card KBI  Component-->
            <cardKbi />
            <!-- End Card KBI Component-->
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <!-- Card toDoList Component-->
            <cardToDoList />
            <!-- End Card toDoList Component-->
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <!-- Card eventSchdule Component-->
            <cardEventSchdule />
            <!-- End Card eventSchdule Component-->
          </v-col>

        </v-row>


      </v-container>
    </div>
</template>
<script>
// import Header from '@/components/shared/header.vue'
// import Sidebar from '@/components/shared/sidebar.vue'
// import Breadcrumb from '@/components/shared/breadcrumb.vue'
import Profile from "@/components/userProfile/Profile.vue";
import ProfileReports from "@/components/userProfile/profile-reports.vue";
import profileTasks from "@/components/userProfile/profile-tasks.vue";
import profileRequests from "@/components/userProfile/profile-requests.vue";
import cardTasks from "@/components/eservices/card-tasks.vue";
import cardRequests from "@/components/eservices/card-requests.vue";
import cardVacation from "@/components/vacation/card-vacation.vue";
//import cardAttendance from "@/components/attendance/card-attendance.vue";
import cardSkills from "@/components/projects/card-skills.vue";
import cardProjects from "@/components/projects/card-projects.vue";
import cardRecommendations from "@/components/userProfile/card-recommendations.vue";
import cardPerformance from "@/components/performance/card-performance.vue";
import cardTeam from "@/components/userProfile/card-team.vue";
import cardFavourites from "@/components/Design/card-favourites.vue";
import cardKbi from "@/components/Design/card-kbi.vue";
import cardToDoList from "@/components/userProfile/card-toDoList.vue";
import cardEventSchdule from "@/components/events/card-eventSchdule.vue";
// import Footer from '@/components/shared/footer.vue'

export default {
   //props: ['drawer'],
    components: {
    Profile,
    ProfileReports,
    profileTasks,
    profileRequests,
    cardTasks,
    cardRequests,
    cardVacation,
    //cardAttendance,
    cardSkills,
    cardProjects,
    cardRecommendations,
    cardPerformance,
    cardTeam,
    cardFavourites,
    cardKbi,
    cardToDoList,
    cardEventSchdule
  },
  data() {
    return {
      miniVariant: false,
      drawer: false,
      clipped: false
    };
  },
  methods: {}
};
</script>
