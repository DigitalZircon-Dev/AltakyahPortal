<template>
  <div class="card-information KbiBx">
    <div class="card-header">
     KPI
      <div class="action">
     <v-dialog
          v-model="expandKbi"
          persistent
          max-width="700px"
          transition="scale-transition"
          origin="center center"
          content-class="commonModal"
          @keydown.esc="expandKbi = false"
          @click:outside="expandKbi = false"
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
                <span class="headline">Kbi List</span>
                <v-spacer></v-spacer>
                <v-btn
                  fab
                  small
                  icon
                  @click="expandKbi = false"
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
                      <v-list>
                        <div v-for="project in 5" :key="project" >
                          <v-list-item>
                            <img
                              src="~/assets/images/all/pen.svg"
                              alt=""
                              width="24px"
                              class="ma-1"
                            />
                            <v-list-item-content>
                              <v-list-item-title>
                               KPI item dummy text here
                              </v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-action class="d-flex flex-row">
                              <v-btn
                                depressed
                                flat
                                dense
                                text
                                class="text-capitalize rounded-0"
                              >
                                <img
                                  src="~/assets/images/all/ic-edit.svg"
                                  alt=""
                                  width="18px"
                                  class="ma-1"
                                />
                                Edit
                              </v-btn>
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
                        </div>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </div>
        </v-dialog>
      </div>
    </div>
    <div class="card-body">
      <ul class="Kbi-list">
        <li>
          <img src="~/assets/images/all/pen.svg" alt="" />
          <p>KPI item dummy text here</p>
        </li>
        <li>
          <img src="~/assets/images/all/pen.svg" alt="" />
          <p>KPI item dummy text here</p>
        </li>
        <li>
          <img src="~/assets/images/all/pen.svg" alt="" />
          <p>KPI item dummy text here</p>
        </li>
        <li>
          <img src="~/assets/images/all/pen.svg" alt="" />
          <p>KPI item dummy text here</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
expandKbi: false,

    }
  }
}
</script>
