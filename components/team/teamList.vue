<template>
  <div class="listview" :v-model="listview" v-if="listview">
    <v-row class="line-1">
      <v-col class="memberItem upLevel mx-auto" cols="12" sm="6" md="4" lg="3">
        <v-card class="text-center" flat>
          <v-card-media>
            <v-badge
              bordered
              color="stc_color_oasislight"
              offset-x="20"
              offset-y="20"
            >
              <v-avatar size="100" class="memberImg">
                <img src="~/assets/images/all/member-1.png" alt="" />
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
                <img src="~/assets/images/all/member-1.png" alt="" />
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
                <v-card class="py-8 text-center" flat @click="toggle">
                  <v-card-media>
                    <v-badge
                      bordered
                      color="stc_color_coral"
                      offset-x="20"
                      offset-y="20"
                    >
                      <v-avatar size="100" class="memberImg">
                        <img src="~/assets/images/all/member-1.png" alt="" />
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
                  <v-row class="fill-height" align="center" justify="center">
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
</template>

<script>
export default {
  name: "teamList",
  props:['listview'],
  data() {
    return {
      model: null,
    };
  }
};
</script>
