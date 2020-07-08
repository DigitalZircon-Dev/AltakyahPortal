<template>
  <div class="card-information recomendationBx">
    <div class="card-header">
      <span class="title-reco">Recommendations</span>
      <v-tabs v-model="Recotabs" class="tabs-recommendation">
        <v-tab href="#tab-1" class="received"
          ><img src="~/assets/images/all/Received.svg" alt="" /> Received</v-tab
        >
        <v-tab href="#tab-2" class="given"
          ><img src="~/assets/images/all/Given.svg" alt="" /> Given</v-tab
        >
      </v-tabs>
    </div>

    <div class="card-body recommendation-content">
      <v-tabs>
        <v-tabs-items v-model="Recotabs">
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
    Recotabs: ""
  })
};
</script>

<style lang="scss">
a.received img {
  width: 12px;
  margin-right: 5px;
}

a.given img {
  width: 12px;
  margin-right: 5px;
}
a.received {
  font-size: 10px;
}
a.given {
  font-size: 10px;
}
.tabs-recommendation {
  width: auto;
  flex: unset;
  position: absolute;
  right: 0;
  top: 8px;
}

.tabs-recommendation .v-tabs-bar {
  height: 30px;
}
.tabs-recommendation .v-tabs-bar .v-tab.v-tab:after {
  height: 12px;
}

.recommendation-content .v-tabs-bar {
  display: none;
}
</style>
