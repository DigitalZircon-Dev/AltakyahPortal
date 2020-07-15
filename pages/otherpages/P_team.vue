<template>
 <v-layout class="page_layout d-block">
  <v-container class="py-0">
    <v-row>
      <v-col cols="12">
        <div class="page_section">
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
                  <!--  Team Grid View Deisgn -->
                  <teamGrid :gridview="gridview" />
                  <!--  End Team Grid View Deisgn -->

                  <!--  Team List View Deisgn -->
                  <teamList :listview="listview" />
                  <!--  End List Grid View Deisgn -->
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  </v-layout>
</template>

<script>
import teamGrid from "@/components/team/teamGrid.vue";
import teamList from "@/components/team/teamList.vue";

export default {
  components: {
    teamGrid,
    teamList
  },
  data() {
    return {
      gridview: true,
      listview: false,
      activeBtn: 0
    };
  }
};
</script>

<style lang="scss">

  .btnGroup {
    box-shadow: none !important;
    width: auto !important;
    height: auto !important;
    min-width: !important;
    margin: 0 10px;
    button.v-btn {
      min-width: auto;
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
    border: 5px solid #ddd;
    z-index: 1;
    background: #fff;
    border-radius: 50%;
    max-width: 320px;
    margin: auto ;
  }

  .memberItem.currentLevel .v-card {
    background: transparent;
  }
  .row.line-1 {
    position: relative;
  }
  .row.line-2 {
    position: relative;
  }
  .row.line-3 {
    position: relative;
  }

  .row.line-2:after {
    content: "";
    width: 100%;
    height: 2px;
    display: inline-block;
    background: #dddddd;
    position: absolute;
    top: 50%;
    z-index: 0;
  }
  .row.line-1:after {
    content: "";
    width: 100%;
    height: 2px;
    display: inline-block;
    background: #dddddd;
    position: absolute;
    top: 20%;
    z-index: 0;
  }
  .row.line-1:before {
    content: "";
    width: 2px;
    height: 190px;
    display: inline-block;
    background: #dddddd;
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
}

.row.line-2:before {
content: "";
    width: 2px;
    height: 190px;
    display: inline-block;
    background: #dddddd;
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -100px;
}
.row.line-3{
    margin-top:100px;
}

.row.line-3:after {
    content: "";
    width: 100%;
    height: 2px;
    display: inline-block;
    background: #dddddd;
    position: absolute;
    top: 0;
    z-index: 0;

}

.member-item{position:relative;margin-top: 15px;}
.member-item:before {
   content: "";
   width: 2px;
   height: 110px;
   display: block;
   background: #dddddd;
   position: absolute;
   left: 0;
   right: 0;
   margin: auto;
   top: -70px;
}


</style>
