<template>
  <div class="gridview" :v-model="gridview" v-if="gridview">
    <v-text-field
      filled
      solo
      flat
      dense
      depressed
      label="Search..."
      append-icon="mdi-account-search"
      class="searchTxt .d-block"
    ></v-text-field>

    <v-row>
      <v-col
        class="memberItem"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="member in members"
        :key="member"
      >
        <v-card class="py-8 text-center stc_color_mtea" flat>
          <v-card-media>
            <v-badge
              bordered
              :color="`${member.statusColor}`"
              offset-x="20"
              offset-y="20"
            >
              <v-avatar size="100" class="memberImg">
                <img src="~/assets/images/all/member-1.png" :alt="member.alt" />
              </v-avatar>
            </v-badge>
          </v-card-media>
          <v-card-title class="justify-center">
            <div>
              <h3 class="memberName">
                {{ member.memberName }}
              </h3>
              <div class="memberPosition">
                {{ member.memberPosition }}
              </div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn
              depressed
              color="stc_color_oasislight"
              :href="member.memberViewURL"
              class="memberView stc_color_white--text"
              >View Profile</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "teamGrid",
  props:['gridview'],
   data() {
    return {
      members: [
        {
          statusColor: "stc_color_oasislight",
          imageURL: "/_nuxt/assets/images/all/member-1.png",
          alt: "Zakaria Bahah",
          memberName: "Zakaria Bahah",
          memberPosition: "Senior Team Leader",
          memberViewURL: "/otherpages/P_VisitorProfile"
        },
        {
          statusColor: "stc_color_coral",
          imageURL: "~/assets/images/all/member-2.png",
          alt: "Ahmed Muthyb",
          memberName: "Ahmed Muthyb",
          memberPosition: "Senior Team Leader",
          memberViewURL: "/otherpages/P_VisitorProfile"
        },
        {
          statusColor: "stc_color_oasislight",
          imageURL: "~/assets/images/all/member-3.png",
          alt: "Muhammed Alharbi",
          memberName: "Muhammed Alharbi",
          memberPosition: "Senior Team Leader",
          memberViewURL: "/otherpages/P_VisitorProfile"
        },
        {
          statusColor: "stc_color_coral",
          imageURL: "~/assets/images/all/member-4.png",
          alt: "Saleh Badr",
          memberName: "Saleh Badr ",
          memberPosition: "Senior Team Leader",
          memberViewURL: "/otherpages/P_VisitorProfile"
        },
        {
          statusColor: "stc_color_oasislight",
          imageURL: "~/assets/images/all/member-5.png",
          alt: "Abdulrahman Ahmed",
          memberName: "Abdulrahman Ahmed",
          memberPosition: "Senior Team Leader",
          memberViewURL: "/otherpages/P_VisitorProfile"
        },
        {
          statusColor: "stc_color_coral",
          imageURL: "~/assets/images/all/member-6.png",
          alt: "Muhammed Ali",
          memberName: "Muhammed Ali",
          memberPosition: "Senior Team Leader",
          memberViewURL: "/otherpages/P_VisitorProfile"
        },
        {
          statusColor: "stc_color_oasislight",
          imageURL: "~/assets/images/all/member-7.png",
          alt: "Magd Rashed",
          memberName: "Magd Rashed",
          memberPosition: "Senior Team Leader",
          memberViewURL: "/otherpages/P_VisitorProfile"
        },
        {
          statusColor: "stc_color_coral",
          imageURL: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          alt: "Ahmed Ali",
          memberName: "Ahmed Ali",
          memberPosition: "Senior Team Leader",
          memberViewURL: "/otherpages/P_VisitorProfile"
        }
      ]
    };
  }
};
</script>
