<template>
  <div class="card-information skillsBx">
    <div class="card-header">
      Skills & Endorse
      <div class="action">
        <v-dialog
          v-model="addSkill"
          persistent
          max-width="700px"
          transition="scale-transition"
          origin="center center"
          content-class="commonModal"
          @keydown.esc="addSkill = false"
          @click:outside="addSkill = false"
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
                <span class="headline">New Skill</span>
                <v-spacer></v-spacer>
                <v-btn fab small icon @click="addSkill = false" color="red">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container class="py-0">
                  <v-row>
                    <v-col cols="12" sm="12" class="py-0">
                      <v-autocomplete
                        :items="[
                          'Skill 1',
                          'Skill 2',
                          'Skill 3',
                          'Skill 4',
                          'Skill 5'
                        ]"
                        label="Skill Name"
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
                      <v-row>
                        <v-chip class="ma-1">SQL</v-chip>
                        <v-chip class="ma-1">Back-End Web Development</v-chip>
                        <v-chip class="ma-1">User Experience</v-chip>
                        <v-chip class="ma-1">User Experience Design</v-chip>
                        <v-chip class="ma-1">Mobile Application</v-chip>
                        <v-chip class="ma-1">Fron-end Coding</v-chip>
                        <v-chip class="ma-1">Responsive Web Design</v-chip>
                        <v-chip class="ma-1">Mobile Application Design</v-chip>
                        <v-chip class="ma-1">Web Standard</v-chip>
                        <v-chip
                          class="ma-1"
                          close
                          v-if="Design"
                          @click:close="Design = false"
                          >Front-end Design</v-chip
                        >
                      </v-row>
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
                        @click="addSkill = false"
                        >Add</v-btn
                      >
                      <v-btn
                        class="rounded-0"
                        depressed
                        @click="addSkill = false"
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
          v-model="expandSkill"
          persistent
          max-width="700px"
          transition="scale-transition"
          origin="center center"
          content-class="commonModal"
          @keydown.esc="expandSkill = false"
          @click:outside="expandSkill = false"
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
                <span class="headline">Skills & Endorsement</span>
                <v-spacer></v-spacer>
                <v-btn fab small icon @click="expandSkill = false" color="red">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="px-0">
                <v-container class="py-0">
                  <v-row>
                    <v-expansion-panels flat>
                      <v-expansion-panel accordion v-if="expanditm">
                        <v-expansion-panel-header disable-icon-rotate>
                          Telecommunications
                          <span class="d-inline mx-2">
                            <v-chip>5</v-chip>
                          </span>
                          <template v-slot:actions>
                            <v-btn
                              depressed
                              flat
                              dense
                              text
                              class="text-capitalize rounded-0"
                              @click="expanditm = false"
                            >
                              <img
                                src="~/assets/images/all/ic-trash.svg"
                                alt=""
                                width="18px"
                                class="ma-1"
                              />
                              Delete
                            </v-btn>
                          </template>
                        </v-expansion-panel-header>
                        <v-divider></v-divider>
                        <v-expansion-panel-content>
                          <v-list>
                            <template v-for="item in endorse">
                              <v-list-item :key="item.avatar">
                                <v-list-item-avatar class="mx-1">
                                  <v-img
                                    :src="item.avatar"
                                    max-width="32px"
                                    width="32px"
                                    max-height="32px"
                                  ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                  <v-list-item-title>
                                    {{ item.endorseName }}
                                  </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-divider :key="item.avatar"></v-divider>
                            </template>
                          </v-list>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </div>

        </v-dialog>
      </div>
    </div>
    <div class="card-body">
      <div class="skill-items">
        <v-chip class="ma-1 itm" :class="{toggled: isToggled}" @click="isToggled = !isToggled">SQL<v-avatar>.5</v-avatar></v-chip>
        <v-dialog
          v-model="SkillRate"
          persistent
          max-width="700px"
          transition="scale-transition"
          origin="center center"
          content-class="commonModal"
          @keydown.esc="SkillRate = false"
          @click:outside="SkillRate = false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-chip class="ma-1 itm " v-bind="attrs" v-on="on"
              >Mobile Application Design<v-avatar>.12</v-avatar>
            </v-chip>
          </template>

          <div class="cardModal">
            <v-card>
              <v-card-title class="py-2">
                <span class="headline">Skills& Endorsements </span>
                <v-spacer></v-spacer>
                <v-btn fab small icon @click="SkillRate = false" color="red">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container class="py-0">
                  <v-row>
                    <v-col cols="12" sm="12" class="py-0">
                      <div class="title">
                        How good is Mobile Application Design ?
                      </div>

                      <v-radio-group v-model="radioGroup">
                        <v-radio
                          v-for="n in 3"
                          :key="n"
                          :label="skillQuesttion[n]"
                          :value="n"
                        ></v-radio>
                      </v-radio-group>

                      <div class="title my-3">
                        How do you know about Ahmed's webdesign skills? ?
                      </div>

                      <v-select
                        :items="[
                          'My Friend ',
                          'work With Him',
                          'FreeLance Project'
                        ]"
                        required
                        class="rounded-0"
                        outlined
                        offset-y
                        dense
                      ></v-select>
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
                        @click="SkillRate = false"
                        >Submit</v-btn
                      >
                      <v-btn
                        class="rounded-0"
                        depressed
                        @click="SkillRate = false"
                        >Cancel</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-actions>
            </v-card>
          </div>
        </v-dialog>

        <v-chip class="ma-1 itm"
          >Responsive Web Design<v-avatar>.3</v-avatar></v-chip
        >
        <v-chip class="ma-1 itm">jQuery<v-avatar>.2</v-avatar></v-chip>
        <v-chip class="ma-1 itm">Photoshop<v-avatar>.6</v-avatar></v-chip>
        <v-chip class="ma-1 itm"
          >Front End Deisgn<v-avatar>.9</v-avatar></v-chip
        >
        <v-chip class="ma-1 itm">Illustrator<v-avatar>.8</v-avatar></v-chip>
        <v-chip class="ma-1 itm">Graphic Design<v-avatar>.4</v-avatar></v-chip>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "cardSkills",
  data() {
    return {
      addSkill: false,
      SkillRate: false,
       isToggled: false,
      expandSkill: false,
        selection: 2,
      Design: true,
      expanditm: true,
      expanditm1: true,
      expanditm2: true,
      skillQuesttion: ["", "Good", "Very Good", "Highly Skilled"],

      endorse: [
        {
          avatar: "/_nuxt/assets/images/all/myteam-user.svg",
          endorseName: "Zakaria Bahah",
          divider: true,
          inset: true
        },

        {
          avatar: "/_nuxt/assets/images/all/myteam-user.svg",
          endorseName: "Magd Muhammed",
          divider: true,
          inset: true
        },

        {
          avatar: "/_nuxt/assets/images/all/myteam-user.svg",
          endorseName: "Mahmoud Mokhtar",
          divider: true,
          inset: true
        },

        {
          avatar: "/_nuxt/assets/images/all/myteam-user.svg",
          endorseName: "Ahmed Abdumonem",
          divider: true,
          inset: true
        },

        {
          avatar: "/_nuxt/assets/images/all/myteam-user.svg",
          endorseName: "Sanaa Gameel",
          divider: true,
          inset: true
        }
      ]
    };
  }
};
</script>
