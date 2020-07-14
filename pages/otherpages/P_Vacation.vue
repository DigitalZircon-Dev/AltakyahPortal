<template>
  <div class="profile-section">
    <v-container class="py-0">
      <v-row>
        <v-col cols="12">
          <!-- Card Vacation Component-->
          <cardVacation />
          <!-- End Card Vacation Component-->
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card class="vRequests">
            <v-card-title class="py-2">
              Vacation Requests
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>

            <div class="dtItems">
            <v-data-table
                :headers="headers"
                :items="vacationRequests"
                class="vacationRequestTbl px-4"
                :search="search"
                :items-per-page="5"


              >

                <template v-slot:item.statusText="{ item }">
                  <v-chip :color="getColor(item.statusText)" >{{ item.statusText}}</v-chip>
                </template>


              </v-data-table>
            <!-- end -->


            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import cardVacation from "@/components/vacation/card-vacation.vue";

export default {
  components: {
    cardVacation
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id" ,divider :true , class:"stc_color_purple stc_color_white--text tdTbl" },
        { text: "Title", value: "title" ,divider :true , class:"stc_color_purple stc_color_white--text tdTbl" },
        { text: "Date", value: "date" ,divider :true , class:"stc_color_purple stc_color_white--text tdTbl" },
        { text: "Start Date", value: "date" ,divider :true , class:"stc_color_purple stc_color_white--text tdTbl" },
        { text: "End Date", value: "date" ,divider :true , class:"stc_color_purple stc_color_white--text tdTbl" },
        { text: "Status", value: "statusText" ,divider :true , class:"stc_color_purple stc_color_white--text tdTbl" },
        { text: "Options", value: "" ,divider :true , class:"stc_color_purple stc_color_white--text tdTbl" },

      ],
      vacationRequests: [
        {
          id: "#10184",
          title: "Review code for team page",
          statusText: "completed",
          author: "Muhammed Gamal Zaky",
          date: "04 April 2020"
        },
        {
          id: "#10657",
          title: "Review code for team page",
          statusText: "completed",
          author: "Muhammed Gamal Zaky",
          date: "04 April 2020"
        },
        {
          id: "#16677",
          title: "Review code for team page",
          statusText: "rejected",
          author: "Muhammed Gamal Zaky",
          date: "04 April 2020"
        },
        {
          id: "#23777",
          title: "Review code for team page",
          statusText: "Progress",
          author: "Muhammed Gamal Zaky",
          date: "04 April 2020"
        },
        {
          id: "#11277",
          title: "Review code for team page",
          statusText: "rejected",
          author: "Muhammed Gamal Zaky",
          date: "04 April 2020"
        },
        {
          id: "#10747",
          title: "Review code for team page",
          statusText: "completed",
          author: "Muhammed Gamal Zaky",
          date: "04 April 2020"
        },
        {
          id: "#10752",
          title: "Review code for team page",
          statusText: "rejected",
          author: "Muhammed Gamal Zaky",
          date: "04 April 2020"
        }
      ]
    };
  },
  methods: {
    getColor(statusText) {
      if (statusText == "completed") return "stc_color_oasislight";
      else if (statusText == "pending") return "stc_color_silver";
      else if (statusText == "rejected") return "stc_color_coral";
      else return "stc_color_silver";
    }
  }
};
</script>
<style lang="scss" scoped>
.vRequests.v-sheet.v-card{
  border-radius: 0 !important;
}
.vacationRequestTbl *{
  color:#fff !important;
}

</style>
