<template>
  <div class="card-information favouriteBx">
    <div class="card-header">
      Favourites
      <div class="action">
        <v-dialog
          v-model="expandFavourite"
          persistent
          max-width="700px"
          transition="scale-transition"
          origin="center center"
          content-class="commonModal"
          @keydown.esc="expandFavourite = false"
          @click:outside="expandFavourite = false"
        >
          <template v-slot:activator="{ on, attrs }">
            <a
              href="javascript:void(0)"
              v-bind="attrs"
              v-on="on"
              class="Expand"
            >
              <img src="~/assets/images/card/card-expand.svg" alt="" />
            </a>
          </template>

          <div class="cardModal">
            <v-card>
              <v-card-title class="py-2">
                <span class="headline">Favourite</span>
                <v-spacer></v-spacer>
                <v-btn
                  fab
                  small
                  icon
                  @click="expandFavourite = false"
                  color="red"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="px-0">
                <v-container class="py-0">
                  <v-row>
                    <v-col cols="12" sm="12" class="py-0 ">
                      <v-tabs v-model="tab" class="favModal">
                        <v-tabs-slider
                          color="transparent"
                        ></v-tabs-slider>
                        <v-tab
                        v-for="i in tabItm.length-1"
                        :key="i"
                        :href="`#tab-${tabItm[i]}`"
                        class="itmFav"
                        >
                        {{tabItm[i]}}
                        </v-tab>

                      </v-tabs>
                    </v-col>
                  </v-row>
                  <v-row>

                    <v-tabs-items v-model="tab" class="full-width">
                    <v-tab-item
                    v-for="i in  tabItm.length-1"
                    :key="i"
                    :value="`tab-${tabItm[i]}`"
                    >

                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="12" class="py-0">
                              <v-list>
                                <v-list-item>
                                  <img
                                    src="~/assets/images/all/bookmark.svg"
                                    alt=""
                                    width="24px"
                                    class="ma-1"
                                  />
                                  <v-list-item-content>
                                    <v-list-item-title>
                                      Little details in UX design: Tabs vs.
                                      Accordions
                                    </v-list-item-title>
                                  </v-list-item-content>
                                  <v-list-item-action class="float-right">
                                    <v-btn
                                      depressed
                                      flat
                                      dense
                                      text
                                      class="text-capitalize rounded-0"
                                    >
                                      <img
                                        src="~/assets/images/all/ic-trash.svg"
                                        alt=""
                                        width="18px"
                                        class="ma-1"
                                      />
                                      Delete
                                    </v-btn>
                                  </v-list-item-action>
                                </v-list-item>
                                <v-divider></v-divider>

                                <v-list-item>
                                  <img
                                    src="~/assets/images/all/bookmark.svg"
                                    alt=""
                                    width="24px"
                                    class="ma-1"
                                  />
                                  <v-list-item-content>
                                    <v-list-item-title>
                                      Little details in UX design: Tabs vs.
                                      Accordions
                                    </v-list-item-title>
                                  </v-list-item-content>
                                  <v-list-item-action class="float-right">
                                    <v-btn
                                      depressed
                                      flat
                                      dense
                                      text
                                      class="text-capitalize rounded-0"
                                    >
                                      <img
                                        src="~/assets/images/all/ic-trash.svg"
                                        alt=""
                                        width="18px"
                                        class="ma-1"
                                      />
                                      Delete
                                    </v-btn>
                                  </v-list-item-action>
                                </v-list-item>
                                <v-divider></v-divider>

                                <v-list-item>
                                  <img
                                    src="~/assets/images/all/bookmark.svg"
                                    alt=""
                                    width="24px"
                                    class="ma-1"
                                  />
                                  <v-list-item-content>
                                    <v-list-item-title>
                                      Little details in UX design: Tabs vs.
                                      Accordions
                                    </v-list-item-title>
                                  </v-list-item-content>

                                  <v-list-item-action class="float-right">
                                    <v-btn
                                      depressed
                                      flat
                                      dense
                                      text
                                      class="text-capitalize rounded-0"
                                    >
                                      <img
                                        src="~/assets/images/all/ic-trash.svg"
                                        alt=""
                                        width="18px"
                                        class="ma-1"
                                      />
                                      Delete
                                    </v-btn>
                                  </v-list-item-action>
                                </v-list-item>
                                <v-divider></v-divider>

                                <v-list-item>
                                  <img
                                    src="~/assets/images/all/bookmark.svg"
                                    alt=""
                                    width="24px"
                                    class="ma-1"
                                  />
                                  <v-list-item-content>
                                    <v-list-item-title>
                                      Little details in UX design: Tabs vs.
                                      Accordions
                                    </v-list-item-title>
                                  </v-list-item-content>

                                  <v-list-item-action class="float-right">
                                    <v-btn
                                      depressed
                                      flat
                                      dense
                                      text
                                      class="text-capitalize rounded-0"
                                    >
                                      <img
                                        src="~/assets/images/all/ic-trash.svg"
                                        alt=""
                                        width="18px"
                                        class="ma-1"
                                      />
                                      Delete
                                    </v-btn>
                                  </v-list-item-action>
                                </v-list-item>
                              </v-list>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-tab-item>

                    </v-tabs-items>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </div>
        </v-dialog>
      </div>
    </div>
    <div class="card-body">
      <ul class="Favourite-list">
        <li>
          <img src="~/assets/images/all/bookmark.svg" alt="" />
          <p>Microsoft Team</p>
        </li>
        <li>
          <img src="~/assets/images/all/bookmark.svg" alt="" />
          <p>Document Library</p>
        </li>
        <li>
          <img src="~/assets/images/all/bookmark.svg" alt="" />
          <p>Promotions</p>
        </li>
        <li>
          <img src="~/assets/images/all/bookmark.svg" alt="" />
          <p>Microsoft</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "cardFavourites",
  data() {
    return {
      expandFavourite: false,
      tab: "",
      tabItm :["","all","services","topics","links"]
      };
  }
};
</script>

<style lang="scss" >
.favModal a.itmFav {
  font-size: 14px;
  background: transparent;
  border-radius: 0px;
  color: #673ab7 !important;
  border: 1.5px solid #673ab7;
  padding: 9px 20px;
  height: 35px;
  margin: 0 10px;
  text-transform: capitalize;
}
.favModal a.itmFav.v-tab--active {
  background: #673ab7;
  color: #fff !important;
}
.full-width {
  width: 100%;
}
</style>
