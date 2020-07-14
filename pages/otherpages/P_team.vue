<template>
  <v-container class="py-0">
    <v-row>
      <v-col cols="12">
        <v-layout class="page_section d-block">
          <div class="pageHeader">
            <div class="pageTitle">
              <v-divider vertical class="remBorder"></v-divider>

              <h2 class="title d-inline">
                My Team
              </h2>
            </div>
            <div></div>
            <v-bottom-navigation :value="activeBtn" class="btnGroup">
              <v-btn
                small
                text
                color="stc_color_purple"
                @click="(gridview = true), (listview = false)"
              >
                <v-icon>mdi-view-grid-outline</v-icon>
              </v-btn>
              <v-btn
                small
                text
                color="stc_color_purple"
                @click="(listview = true), (gridview = false)"
              >
                <v-icon>mdi-sitemap</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </div>

          <div class="pageContents">
            <v-container class="px-5 py-0">
              <v-row>
                <v-col cols="12">
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
                                <img
                                  src="~/assets/images/all/member-1.png"
                                  :alt="member.alt"
                                />
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
                  <div class="listview" :v-model="listview" v-if="listview">
                    <v-row class="line-1">
                      <v-col
                        class="memberItem upLevel mx-auto"
                        cols="12"
                        sm="6"
                        md="4"
                        lg="3"
                      >
                        <v-card class="text-center" flat>
                          <v-card-media>
                            <v-badge
                              bordered
                              color="stc_color_oasislight"
                              offset-x="20"
                              offset-y="20"
                            >
                              <v-avatar size="100" class="memberImg">
                                <img
                                  src="~/assets/images/all/member-1.png"
                                  alt=""
                                />
                              </v-avatar>
                            </v-badge>
                          </v-card-media>
                          <v-card-title class="justify-center">
                            <div>
                              <h3 class="memberName">Emad Muhammed</h3>
                              <div class="memberPosition">Presedent</div>
                            </div>
                          </v-card-title>
                          <v-card-actions class="justify-center">
                            <v-btn
                              depressed
                              color="stc_color_oasislight"
                              href="#"
                              class="memberView stc_color_white--text"
                              >View Profile</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row class="line">
                      <v-col
                        class="memberItem currentLevel mx-auto"
                        cols="12"
                        sm="6"
                        md="4"
                        lg="4"
                      >
                        <v-card class="text-center " flat>
                          <v-card-media>
                            <v-badge
                              bordered
                              color="stc_color_oasislight"
                              offset-x="35"
                              offset-y="20"
                            >
                              <v-avatar size="150" class="memberImg">
                                <img
                                  src="~/assets/images/all/member-1.png"
                                  alt=""
                                />
                              </v-avatar>
                            </v-badge>
                          </v-card-media>
                          <v-card-title class="justify-center">
                            <div>
                              <h3 class="memberName">Bassim Alzahrani</h3>
                              <div class="memberPosition">Manager</div>
                            </div>
                          </v-card-title>
                          <v-card-actions class="justify-center">
                            <v-btn
                              depressed
                              color="stc_color_coral"
                              href="#"
                              class="memberView stc_color_white--text"
                              >You</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                          <v-layout>
                          <v-slide-group
                            v-model="model"
                            class="pa-4"
                            prev-icon="mdi-arrow-left-circle-outline"
                            next-icon="mdi-arrow-right-circle-outline"
                            show-arrows
                          >
                            <v-slide-item
                              v-for="n in 8"
                              :key="n"
                              v-slot:default="{ active, toggle }"
                            >
                              <v-col cols="3">
                                <v-card
                                  class="py-8 text-center"
                                  flat
                                  @click="toggle"
                                >
                                  <v-card-media>
                                    <v-badge
                                      bordered
                                      color="stc_color_coral"
                                      offset-x="20"
                                      offset-y="20"
                                    >
                                      <v-avatar size="100" class="memberImg">
                                        <img
                                          src="~/assets/images/all/member-1.png"
                                          alt=""
                                        />
                                      </v-avatar>
                                    </v-badge>
                                  </v-card-media>
                                  <v-card-title class="justify-center">
                                    <div>
                                      <h3 class="memberName">member Name</h3>
                                      <div class="memberPosition">
                                        member Position
                                      </div>
                                    </div>
                                  </v-card-title>
                                  <v-card-actions class="justify-center">
                                    <v-btn
                                      depressed
                                      color="stc_color_oasislight"
                                      href="#"
                                      class="memberView stc_color_white--text"
                                      >View Profile</v-btn
                                    >
                                  </v-card-actions>
                                  <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                  >
                                    <v-scale-transition>
                                      <v-icon
                                        v-if="active"
                                        color="white"
                                        size="48"
                                        v-text="'mdi-close-circle-outline'"
                                      ></v-icon>
                                    </v-scale-transition>
                                  </v-row>
                                </v-card>
                              </v-col>
                            </v-slide-item>
                          </v-slide-group>
                          </v-layout>

                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cardVacation from "@/components/vacation/card-vacation.vue";

export default {
  components: {
    cardVacation
  },
  data() {
    return {
      gridview: true,
      listview: false,
      activeBtn: 0,
      model: null,
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
<style lang="scss">
.page_section {
  background-color: white;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  font-family: "STC Regular";
  position: relative;
  min-height: 1000px;
  .pageHeader {
    padding: 25px 0;
    display: flex;
    .pageTitle {
      position: relative;
      color: #3f0070;
      flex: 1;
      height: 30px;
      .remBorder {
        border-width: 4px;
        border-color: #ff375e !important;
      }

      .title {
        font-size: 28px !important;
        padding: 0 15px;
        position: relative;
      }
    }
  }
  .btnGroup {
    box-shadow: none !important;
    width: auto !important;
    height: auto !important;
    margin: 0 10px;
    button.v-btn {
      max-width: 40px !important;
      width: 40px !important;
      min-width: 40px;
      height: 40px;
    }
  }
  .searchTxt .v-input__slot {
    background: #eff3f6 !important;
  }

  .memberItem .v-card {
    border-radius: 0 !important;
  }

  .memberName {
    font-size: 16px;
    font-weight: normal;
    color: #1d242c;
    font-family: "stc medium" !important;
  }

  .memberPosition {
    font-size: 14px;
    font-weight: normal;
    color: #8e9a9f;
  }
  .memberView {
    text-transform: capitalize;
  }
  .memberItem.upLevel {
    margin-bottom: 50px;
    z-index: 1;
  }
  .memberItem.currentLevel {
    border-radius: 50% !important;
    border: 5px solid #ddd;
    padding: 45px;
    z-index: 1;
    background: #fff;
  }

  .memberItem.currentLevel .v-card {
    background: transparent;
  }

  .row.line{position: relative;}
  .row.line-1{position: relative;}
  .row.line:after {content: "";width: 100%;height: 2px;display: inline-block;background: #dddddd;position: absolute;top: 50%;z-index: 0;}
  .row.line-1:after {content: "";width: 100%;height: 2px;display: inline-block;background: #dddddd;position: absolute;top: 20%;z-index: 0;}
   .memberItem .upLevel .memberImg{
    border: 4px solid #ddd !important;
  }
}
</style>
