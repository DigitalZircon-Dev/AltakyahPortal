<template>
  <div class="card-information projectsBx">
    <div class="card-header">
      <p>Projects</p>
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

          <div class="cardModal2">
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
                      <v-list>
                        <v-list-group
                          v-for="item in items"
                          :key="item.title"
                          v-model="item.active"
                          no-action
                          class="projectItem"
                        >
                          <template v-slot:activator>
                            <div class="projectHeader" >
                              <img
                              src="~/assets/images/all/projects-icon.svg"
                              alt=""
                              width="20px"
                              class="mx-1"
                              />
                              {{item.title}}
                            </div>
                          </template>
                          <v-divider></v-divider>

                          <v-list-item
                            v-for="subItem in item.items"
                            :key="subItem.desc"
                            class="px-0"
                          >
                            <div class="pCard">
                              <ul class="proList">
                                <li>
                                  <h2 class="subtitle-2">Project Status</h2>
                                  <span class="caption">{{ item.status }}</span>
                                </li>
                                <li>
                                  <h2 class="subtitle-2">Project Date</h2>
                                  <span class="caption">{{
                                    item.startDate
                                  }}</span
                                  ><span class="caption">{{
                                    item.endDate
                                  }}</span>
                                </li>
                                <li>
                                  <h2 class="subtitle-2">
                                    Project Description
                                  </h2>
                                  <p class="caption">{{ subItem.desc }}</p>
                                </li>
                                <li>
                                  <v-btn
                                    depressed
                                    flat
                                    dense
                                    outlined

                                    class="text-capitalize rounded-0 stc_color_silver--text mx-1"
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
                                    outlined
                                    class="text-capitalize rounded-0 stc_color_coral--text mx-1"
                                  >
                                    <img
                                      src="~/assets/images/all/ic-trash.svg"
                                      alt=""
                                      width="18px"
                                      class="ma-1"
                                    />
                                    Delete
                                  </v-btn>
                                </li>
                              </ul>
                            </div>
                          </v-list-item>
                        </v-list-group>
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
      endDate: false,

      items: [
        {
          title: "Ministry of Finance",
          active: false,
          status: "Completed",
          startDate: "23-07-2019",
          endDate: "01-08-2020",
          items: [
            {
              desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s"
            }
          ]
        },

        {
          title: "Cafe et dessert",
          active: false,
          status: "Still Working",
          startDate: "23-07-2019",
          endDate: "01-08-2020",
          items: [
            {
              desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s"
            }
          ]
        },

        {
          title: "CMA Project",
          active: false,
          status: "Still Working",
          startDate: "23-07-2019",
          endDate: "01-08-2020",
          items: [
            {
              desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s"
            }
          ]
        },

        {
          title: "Now training Co",
          active: false,
          status: "Still Working",
          startDate: "23-07-2019",
          endDate: "01-08-2020",
          items: [
            {
              desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s"
            }
          ]
        },

        {
          title: "Project name here",
          active: false,
          status: "Still Working",
          startDate: "23-07-2019",
          endDate: "01-08-2020",
          items: [
            {
              desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.pCard {

}
.projectItem{
    border-bottom: 1px solid #eee;
}
.projectHeader{
  flex: 1;
}
ul.proList {
    list-style: none;
}
ul.proList li{
    padding: 10px 0;
    border-bottom: 1px dotted #eee;
}
</style>
