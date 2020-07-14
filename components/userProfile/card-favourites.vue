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
             @click.prevent="fetchFavourites('tab-all',allFavourites)"
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
                  @click.prevent="expandFavourite = false"
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
                        <v-tab href="#tab-all" class="itmFav active" @click.prevent="fetchFavourites('tab-all',allFavourites)">
                          <span class="active" >
                            ALL
                          </span>
                        </v-tab>
                        <v-tab href="#tab-services" class="itmFav" @click.prevent="fetchFavourites('tab-services',services)"
                          >Services</v-tab
                        >
                        <v-tab href="#tab-topics" class="itmFav" @click.prevent="fetchFavourites('tab-topics',topic)">Topics</v-tab>
                        <v-tab href="#tab-links" class="itmFav" @click.prevent="fetchFavourites('tab-links',portal)">Portal</v-tab>
                      </v-tabs>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-tabs-items v-model="tab" class="full-width">
                      <v-tab-item :value='tabName'>
                        <v-container>
                          <v-row>
                            <v-col cols="12" sm="12" class="py-0">
                              <v-list>
                                <v-list-item
                                 v-for="favourite in favourites"
                                 :key="favourite.id">

                                  <img
                                    src="~/assets/images/all/bookmark.svg"
                                    alt=""
                                    width="24px"
                                    class="ma-1"
                                  />
                                  <v-list-item-content>
                                    <v-list-item-title>
                                     {{favourite.favoriteName}}
                                    </v-list-item-title>
                                  </v-list-item-content>
                                  <v-list-item-action class="float-right" v-if="favourite.isAllowedDelete">
                                    <v-btn depressed  dense text class="text-capitalize rounded-0"
                                    @click.prevent="deleteFavourite(favourite.id)">
                                      <v-icon color="stc_color_coral">mdi-playlist-remove</v-icon
                                      >Delete
                                    </v-btn>
                                  </v-list-item-action>
                                </v-list-item>
                                <v-divider></v-divider>
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
        <li
            v-for="favourite in lastFavourites"
            :key="favourite.id">
          <img src="~/assets/images/all/bookmark.svg" alt="" />
          <p>{{favourite.favoriteName}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import socialTypes from '../../common/enums/socialTypes.js'

export default {
  name: "cardFavourites",
  data() {
    return {
      expandFavourite: false,
      lastFavourites:[],
      favourites:[],
      allFavourites:socialTypes.ALL,
       portal:socialTypes.PORTAL,
       topic:socialTypes.TOPIC,
       services:socialTypes.SERVICES,
      tabName:'tab-all',
      tab: ""
    };
  },
  created() {
    this.fetchLastFavourites()
  },
   methods: {
    async fetchLastFavourites(_socialTypeId) {
      const vm = { userId: this.$route.query.userId}
      const result = await this.$store.dispatch(
        'comment/fetchLastFavourites',
        vm
      )
      if (result.value) {
        this.lastFavourites = result.value
      }
    },
    async fetchFavourites(_tabName,_socialTypeId){
     this.tabName=_tabName
     const vm = { userId: this.$route.query.userId,socialTypeId : _socialTypeId}
      const result = await this.$store.dispatch(
        'comment/fetchFavourites',
        vm
      )
      if (result.value) {
        this.favourites = result.value
      }
   },
      async deleteFavourite(_id) {
      const vm = { id: _id}
      const result = await this.$store.dispatch(
        'comment/deleteFavorite',
        vm
      )
      if (result.value) {
        const index = this.favourites.findIndex((f) => f.id === _id)
        this.favourites.splice(index, 1)
      }
    },
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
