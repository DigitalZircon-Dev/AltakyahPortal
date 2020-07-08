<template>
  <div class="card-information vacationBx">
    <div class="card-header">
      Vacations Balance
      <div class="action">
        <v-dialog
          v-model="addVacation"
           persistent max-width="700px"
          transition="scale-transition"
          origin="center center"
          content-class="vacationModal"
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
              <span class="headline">New Vacation</span>
              <v-spacer></v-spacer>
              <v-btn fab small icon @click="addVacation = false" color="red" >
              <v-icon >mdi-close</v-icon>
              </v-btn>
              </v-card-title>
               <v-divider></v-divider>
              <v-card-text>
                <v-container class="py-0">
                  <v-row>
                    <v-col cols="12" sm="12" class="py-0">
                      <v-select
                        :items="[
                          'Half Day leave ',
                          'Day leave',
                          'personal leave'
                        ]"
                        label="Absence Type *"
                        required
                        class="rounded-0"
                        outlined
                        offset-y
                        dense
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" class="py-0">
                      <v-select
                        :items="['Choose One ', 'Choose Two', 'Choose Three ']"
                        label="Reason *"
                        required
                        class="rounded-0"
                        outlined
                        offset-y
                        dense
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-0">
                      <!-- If You Want To User Label You Can Add this Below Tag (V-input)
                  <v-input>Absence Type </v-input>
                  -->
                      <v-text-field
                        label="Start Date *"
                        required
                        class="rounded-0"
                        outlined
                        offset-y
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="py-0">
                      <v-text-field
                      label="End Date *"
                      required
                      class="rounded-0"
                      outlined
                      offset-y
                      dense

                      ></v-text-field>
                    </v-col>


                    <v-col cols="12" sm="12" class="py-0">
                    <v-autocomplete
                    :items="[
                    'Ahmed Hendawee',
                    'Ahmed Ali',
                    'Mohammed Fathy',
                    'Bassim Ali',
                    'Zakaria',
                    'Sara',
                    ]"
                    label="Replaced By"
                    class="rounded-0"
                    offset-y
                    outlined
                    dense
                    ></v-autocomplete>
                    </v-col>


                    <v-col cols="12" sm="12" class="py-0">
                    <v-textarea
                    label="Notes"
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
                 <v-btn  class="rounded-0 stc_color_white--text mr-3" depressed color="stc_color_oasislight"   @click="addVacation = false">Submit</v-btn>
                <v-btn  class="rounded-0" depressed   @click="addVacation = false">Cancel</v-btn>
                     </v-col>
                  </v-row>
                  </v-container>
              </v-card-actions>
            </v-card>
          </div>
        </v-dialog>
        <a href="/otherpages/P_vacation" class="Expand">
          <img src="~/assets/images/card/card-expand.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <p class="card-body-info">
        <span class="card-body-label">
          28
          <span>Day Remaining</span>
        </span>
        <span class="card-body-value">
          40
          <span>Day</span>
        </span>
      </p>
      <div class="progress-bar horizontal">
        <div class="progress-track">
          <div class="progress-fill" style="width: 75%;"></div>
        </div>
      </div>
      <p class="card-progress-footer">
        <span class="card-progress-label">
          12
          <span>Day Used</span>
        </span>
      </p>
    </div>
  </div>
</template>
<style lang="scss">
.vacationModalCard {
  border-radius: 50px;
}
</style>
<script>
// @ is an alias to /src
export default {
  name: "cardVacation",
  data() {
    return {
      addVacation: false,
      showMessages: false
    };
  }

};
</script>

<style lang="scss">
  .v-text-field--outlined.v-input--is-focused fieldset{
    border-color: #ccc !important;
      border-width:1px;
  }

  .v-text-field--outlined fieldset {
  border-color: #e8e8e8 !important;
  border-width:1px;
    }

.vacationModal {
    border-radius: 0 !important;
}

.cardModal .v-sheet.v-card{
  border-radius: 0 !important;
}

</style>
