<template>
  <v-app dark>
    <!-- Header Component-->
    <Header />
    <!-- End Header Component-->
    <!-- Main Contents-->
    <section class="main-contents">
      <div class="wrapper-content">

<!-- Sidebar -->

        <!-- End Sidebar -->
        <Sidebar :drawer='drawer'/>
        <!-- Page contents-->
        <div class="page-contents">
        <v-main>
          <div class="page-control">
            <v-container class="pb-0">
            <v-row>
            <v-col md="12" cols="12" class="py-0">

            <div class="sidebar-menu">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"
            ><img src="~/assets/images/sidebar/menu-open.svg" width="18"
            /></v-app-bar-nav-icon>
            </div>

            <!-- breadcrumb Component-->
            <Breadcrumb />
            <!-- End breadcrumb Component-->
            </v-col>
            </v-row>
            </v-container>
          </div>
          <nuxt />
          </v-main>
        </div>
        <!-- End Page contents-->
      </div>
    </section>
    <!-- End Main Contents-->

    <!-- Footer Component-->
    <Footer />
    <!-- End Footer Component-->
  </v-app>
</template>


<script>
import Header from '@/components/shared/header.vue'
import Sidebar from '@/components/shared/sidebar.vue'
import Breadcrumb from '@/components/shared/breadcrumb.vue'
// import Profile from '@/components/userProfile/Profile.vue'
// import profileTabs from '@/components/userProfile/profile-Tabs.vue'
// import ProfileReports from '@/components/userProfile/profile-reports.vue'
// import profileCharts from '@/components/userProfile/profile-charts.vue'
// import cardVacation from '@/components/vacation/card-vacation.vue'
// import cardAttendance from '@/components/attendance/card-attendance.vue'
// import cardPerformance from '@/components/performance/card-performance.vue'
// import cardSkills from '@/components/projects/card-skills.vue'
// import cardProjects from '@/components/projects/card-projects.vue'
// import cardTeam from '@/components/userProfile/card-team.vue'
// import cardTasks from '@/components/eservices/card-tasks.vue'
// import cardRequests from '@/components/eservices/card-requests.vue'
// import cardFavourites from '@/components/userProfile/card-favourites.vue'
// import cardCalendar from '@/components/events/card-calendar.vue'
// import cardToDoList from '@/components/userProfile/card-toDoList.vue'
// import cardEventSchdule from '@/components/events/card-eventSchdule.vue'
import Footer from '@/components/shared/footer.vue'
// import userHtml from '@/components/userProfile/userprofilehtml.vue'

export default {
  //props: ['drawer'],
  components: {
    Header,
    Sidebar,
    Breadcrumb,
    // Profile,
    // ProfileReports,
    // profileTabs,
    // profileCharts,
    // cardVacation,
    // cardAttendance,
    // cardPerformance,
    // cardSkills,
    // cardProjects,
    // cardTeam,
    // cardTasks,
    // cardRequests,
    // cardFavourites,
    // cardCalendar,
    // cardToDoList,
    // cardEventSchdule,
    Footer,
    // userHtml
  },
  data() {
    return {
      drawer: false,
      // items: [
      //   { text: "Contacts" },
      //   {
      //     text: "More",
      //     model: false,
      //     children: [
      //       { text: "Import" },
      //       { text: "Export" },
      //       { text: "Print" },
      //       { text: "Undo changes" },
      //       { text: "Other contacts" }
      //     ]
      //   }
      // ],
      // admins: [["sub Link 1"], ["sub Link 2"]]
    };

  }

}
</script>



