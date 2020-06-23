<template>
  <v-app dark>
    <!-- Header Component-->
    <Header />
    <!-- End Header Component-->
    <!-- Main Contents-->
    <section class="main-contents">
      <div class="wrapper-content">
        <!-- Sidebar Component-->    
        <Sidebar />
        <!-- End Sidebar Component-->

        <!-- Page contents-->
        <div class="page-contents">
          <div class="page-control">
            <div class="sidebar-menu">
              <a
                href="#"
                id="menuIcon"
                style="cursor:pointer"
                @click="openNav">
                <img src="images/sidebar/menu-open.svg"/></a>
              <a
                href="#"
                id="closeIcon"
                style="cursor:pointer; display: none"
                @click="closeNav">
                <img src="images/sidebar/menu-close.svg"
              /></a>      
            </div>
            <!-- breadcrumb Component-->
            <Breadcrumb />
            <!-- End breadcrumb Component-->
          </div>          
          <nuxt />
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
    return {}
  },
  methods: {
    openNav() {
  document.getElementById('mySidenav').style.width = '240px'
  document.getElementsByClassName('page-contents')[0].style.marginLeft = '240px'
  document.getElementById('menuIcon').style.display = 'none'
  document.getElementById('closeIcon').style.display = 'block'
},

 closeNav(x) {
  document.getElementById('mySidenav').style.width = '0'
  document.getElementsByClassName('page-contents')[0].style.marginLeft = 'auto'
  document.getElementById('menuIcon').style.display = 'block'
  document.getElementById('closeIcon').style.display = 'none'
}            
  }
}
</script>


