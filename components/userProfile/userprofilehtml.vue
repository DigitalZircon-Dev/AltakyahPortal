<template>
  <v-main>
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

            <div class="profile-tasks-requests">
              <!-- tabs tasks&requests Component-->
              <profileTabs />
              <!-- End tabs tasks&requests Component-->

              <!-- Profile chart Component-->
              <profileCharts />
              <!-- End Profile chart Component-->
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
          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Vacation Component-->
            <cardVacation />
            <!-- End Card Vacation Component-->
          </v-col>

          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Attendance Component-->
            <cardAttendance />
            <!-- End Card Attendance Component-->
          </v-col>

          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Performance Component-->
            <cardPerformance />
            <!-- End Card Performance Component-->
          </v-col>

          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Skills Component-->
            <cardSkills />
            <!-- End Card Skills Component-->
          </v-col>

          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Projects Component-->
            <cardProjects />
            <!-- End Card Projects Component-->
          </v-col>

          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Team Component-->
            <cardTeam />
            <!-- End Card Team Component-->
          </v-col>

          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Tasks Component-->
            <cardTasks />
            <!-- End Card Tasks Component-->
          </v-col>

          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Requests Component-->
            <cardRequests />
            <!-- End Card Requests Component-->
          </v-col>

          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card Favourites Component-->
            <cardFavourites />
            <!-- End Card Favourites Component-->
          </v-col>
        </v-row>

        <!-- Start Events-->
        <v-row>
          <v-col md="12" cols="12">
            <div class="sectionTitle">
              Events
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card calendar Component-->
            <cardCalendar />
            <!-- End Card calendar Component-->
          </v-col>
          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card toDoList Component-->
            <cardToDoList />
            <!-- End Card toDoList Component-->
          </v-col>
          <v-col md="4" cols="12" sm="12" xs="12">
            <!-- Card eventSchdule Component-->
            <cardEventSchdule />
            <!-- End Card eventSchdule Component-->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>
<script>
// import Header from '@/components/shared/header.vue'
// import Sidebar from '@/components/shared/sidebar.vue'
// import Breadcrumb from '@/components/shared/breadcrumb.vue'
import Profile from "@/components/userProfile/Profile.vue";
import profileTabs from "@/components/userProfile/profile-Tabs.vue";
import ProfileReports from "@/components/userProfile/profile-reports.vue";
import profileCharts from "@/components/userProfile/profile-charts.vue";
import cardVacation from "@/components/vacation/card-vacation.vue";
import cardAttendance from "@/components/attendance/card-attendance.vue";
import cardPerformance from "@/components/performance/card-performance.vue";
import cardSkills from "@/components/projects/card-skills.vue";
import cardProjects from "@/components/projects/card-projects.vue";
import cardTeam from "@/components/userProfile/card-team.vue";
import cardTasks from "@/components/eservices/card-tasks.vue";
import cardRequests from "@/components/eservices/card-requests.vue";
import cardFavourites from "@/components/userProfile/card-favourites.vue";
import cardCalendar from "@/components/events/card-calendar.vue";
import cardToDoList from "@/components/userProfile/card-toDoList.vue";
import cardEventSchdule from "@/components/events/card-eventSchdule.vue";
// import Footer from '@/components/shared/footer.vue'

export default {
   //props: ['drawer'],
  components: {
    Profile,
    ProfileReports,
    profileTabs,
    profileCharts,
    cardVacation,
    cardAttendance,
    cardPerformance,
    cardSkills,
    cardProjects,
    cardTeam,
    cardTasks,
    cardRequests,
    cardFavourites,
    cardCalendar,
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
