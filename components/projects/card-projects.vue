<template>
  <div class="card-information projectsBx">
    <div class="card-header">
      Projects
      <div class="action">
        <v-dialog
          v-model="addProject"
          persistent
          max-width="700px"
          transition="scale-transition"
          origin="center center"
          content-class="commonModal"
          @keydown.esc="addProject = false"
          @click:outside="addProject = false"
        >
          <template v-slot:activator="{ on, attrs }">
            <a
              href="javascript:void(0)"
              class="addBtn"
              v-bind="attrs"
              v-on="on"
            >
              <img src="~/assets/images/card/card-plus.svg" alt="" />
              Add
            </a>
          </template>

          <div class="cardModal">
            <v-card>
              <v-card-title class="py-2">
                <span class="headline">New Project</span>
                <v-spacer></v-spacer>
                <v-btn fab small icon @click="addProject = false" color="red">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container class="py-0">
                  <v-row>
                    <v-col cols="12" sm="12" class="py-0">
                      <v-text-field
                        label="Project Name *"
                        required
                        class="rounded-0"
                        outlined
                        offset-y
                        dense
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" class="py-0">
                      <v-checkbox
                        v-model="stillWork"
                        label="Still Working"
                        class="ma-0"
                      ></v-checkbox>
                    </v-col>

                    <v-col cols="12" sm="6" class="py-0">
                      <v-menu
                        ref="startDate"
                        v-model="startDate"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="Sdate"
                            v-on="on"
                            label="Start Date *"
                            required
                            readonly
                            class="rounded-0"
                            outlined
                            offset-y
                            dense
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="Sdate" no-title scrollable>
                          <div class="flex-grow-1"></div>
                          <v-btn text color="primary" @click="startDate = false"
                            >Cancel</v-btn
                          >
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.startDate.save(date)"
                            >OK</v-btn
                          >
                        </v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="12" sm="6" class="py-0">
                      <v-menu
                        ref="endDate"
                        v-model="endDate"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="Edate"
                            v-on="on"
                            label="End Date *"
                            required
                            readonly
                            class="rounded-0"
                            outlined
                            offset-y
                            dense
                          ></v-text-field>
                        </template>
                        <v-date-picker v-model="Edate" no-title scrollable>
                          <div class="flex-grow-1"></div>
                          <v-btn text color="primary" @click="endDate = false"
                            >Cancel</v-btn
                          >
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.endDate.save(date)"
                            >OK</v-btn
                          >
                        </v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="12" sm="12" class="py-0">
                      <v-autocomplete
                        :items="[
                          'Ahmed Hendawee',
                          'Ahmed Ali',
                          'Mohammed Fathy',
                          'Bassim Ali',
                          'Zakaria',
                          'Sara'
                        ]"
                        label="Members"
                        class="rounded-0"
                        offset-y
                        outlined
                        dense
                        flat
                        multiple
                        chips
                        small-chips
                        solo
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="12" class="py-0">
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
                        @click="addProject = false"
                        >Save</v-btn
                      >
                      <v-btn
                        class="rounded-0"
                        depressed
                        @click="addProject = false"
                        >Cancel</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-actions>
            </v-card>
          </div>
        </v-dialog>

        <v-dialog
          v-model="expandProjects"
          persistent
          max-width="700px"
          transition="scale-transition"
          origin="center center"
          content-class="commonModal"
          @keydown.esc="expandProjects = false"
          @click:outside="expandProjects = false"
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
                <span class="headline">Projects List</span>
                <v-spacer></v-spacer>
                <v-btn
                  fab
                  small
                  icon
                  @click="expandProjects = false"
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
                      <v-list two-line>
                        <div v-for="project in 5" :key="project" >
                          <v-list-item>
                            <img
                              src="~/assets/images/all/lightbulb.svg"
                              alt=""
                              width="24px"
                              class="ma-1"
                            />
                            <v-list-item-content>
                              <v-list-item-title>
                                Project Title Here
                              </v-list-item-title>
                              <v-list-item-subtitle
                                >23-10-2017</v-list-item-subtitle
                              >
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
      <ul class="project-list">
        <li>
          <a href="#"
            ><span class="icon-project"
              ><img src="~/assets/images/all/projects-icon.svg" alt=""/></span
            >AwalNet
          </a>
        </li>
        <li>
          <a href="#"
            ><span class="icon-project"
              ><img src="~/assets/images/all/projects-icon.svg" alt=""/></span
            >CMA Project
          </a>
        </li>
        <li>
          <a href="#"
            ><span class="icon-project"
              ><img src="~/assets/images/all/projects-icon.svg" alt=""/></span
            >Ministry of Finance</a
          >
        </li>
        <li>
          <a href="#"
            ><span class="icon-project"
              ><img src="~/assets/images/all/projects-icon.svg" alt=""/></span
            >NUMU
          </a>
        </li>
        <li>
          <a href="#"
            ><span class="icon-project"
              ><img src="~/assets/images/all/projects-icon.svg" alt=""/></span
            >Cafe ET dessert</a
          >
        </li>
        <li>
          <a href="#"
            ><span class="icon-project"
              ><img src="~/assets/images/all/projects-icon.svg" alt=""/></span
            >Now training Co</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      stillWork: true,
      addProject: false,
      expandProjects: false,

      // Calendar Variables
      Sdate: new Date().toISOString().substr(0, 10),
      Edate: new Date().toISOString().substr(0, 10),
      startDate: false,
      endDate: false
    };
  }
};
</script>
