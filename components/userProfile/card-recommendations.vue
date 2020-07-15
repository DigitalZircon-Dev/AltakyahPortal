<template>
  <div class="card-information recomendationBx">
    <div class="card-header">
      <p>Recommendations</p>
      <v-tabs v-model="Recotabs" class="tabs-recommendation">
        <v-tab
          href="#tab-1"
          class="received"
          ><img src="~/assets/images/all/Received.svg" alt="" /> Received</v-tab
        >
        <v-tab href="#tab-2" class="given"
          ><img src="~/assets/images/all/Given.svg" alt="" /> Given</v-tab
        >
      </v-tabs>
      <v-dialog
        v-model="addRecomend"
        persistent
        max-width="700px"
        transition="scale-transition"
        origin="center center"
        content-class="commonModal"
        @keydown.esc="addRecomend = false"
        @click:outside="addRecomend = false"
      >
        <template v-slot:activator="{ on, attrs }">
          <a
            href="javascript:void(0)"
            class="addBtn d-flex"
            v-bind="attrs"
            v-on="on"
          >
            <img src="~/assets/images/card/card-plus.svg" alt="" />
          </a>
        </template>

        <div class="cardModal">
          <v-card>
            <v-card-title class="py-2">
              <span class="headline">New Recomendation</span>
              <v-spacer></v-spacer>
              <v-btn fab small icon @click="addRecomend = false" color="red">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container class="py-0">
                <v-row>
                    <v-col cols="12" sm="12" class="pa-0">
                    <v-textarea
                    label="Description"
                    class="rounded-0 ma-0 pa-0"
                    outlined
                    offset-y
                    dense
                    rows="3"
                    ></v-textarea>
                    </v-col>

                </v-row>
              </v-container>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" class="py-0">
                    <v-btn
                      class="rounded-0 stc_color_white--text mr-3"
                      depressed
                      color="stc_color_oasislight"
                      @click="addRecomend = false"
                      >Add</v-btn
                    >
                    <v-btn
                      class="rounded-0"
                      depressed
                      @click="addRecomend = false"
                      >Cancel</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </div>
      </v-dialog>
    </div>

    <div class="card-body recommendation-content">
      <v-tabs>
        <v-tabs-items
          v-model="Recotabs"
          slider-color="transparent"
          active-class="activeTab"
          right
        >
          <v-tab-item value="tab-1">
            <v-card flat>
              <ul class="recommendation-list">
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Magd Muhammed <span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Zakaria Bahah<span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Muhammed Hussin<span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Bassim Alzahrani<span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Ahmed Hendawee<span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
              </ul>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card flat>
              <ul class="recommendation-list">
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Magd Muhammed <span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Zakaria Bahah<span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Muhammed Hussin<span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Bassim Alzahrani<span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
                <li>
                  <img src="~/assets/images/all/myteam-user.svg" alt="" />
                  <p>Ahmed Hendawee<span class="date">04/04/2020</span></p>
                  <span
                    >Hendawee is a well connected professional that always takes
                    the time to support anyone is his network</span
                  >
                </li>
              </ul>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    Recotabs: "",
    addRecomend: false
  })
};
</script>

<style lang="scss">
a.received img {
  width: 12px;
  margin-right: 3px;
}

a.given img {
  width: 12px;
  margin-right: 3px;
}
a.received {
  font-size: 10px;
  text-transform: capitalize;
  padding: 0;
  min-width: 80px;
}
a.given {
  font-size: 10px;
  text-transform: capitalize;
  padding: 0;
  min-width: 80px;
}

.tabs-recommendation .v-slide-group__wrapper {
  position: relative;
}

.tabs-recommendation .v-tabs-bar {
  height: 24px;
  margin: 0px 5px;
}
.tabs-recommendation .v-tabs-bar .v-tab.v-tab:after {
  height: 12px;
}

.recommendation-content .v-tabs-bar {
  display: none;
}
</style>
