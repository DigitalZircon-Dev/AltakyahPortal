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
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
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

  .row.line {
    position: relative;
  }
  .row.line-1 {
    position: relative;
  }
  .row.line:after {
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
  .memberItem .upLevel .memberImg {
    border: 4px solid #ddd !important;
  }
}
</style>
