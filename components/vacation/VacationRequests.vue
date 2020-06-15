<template>
    <v-card class="mx-auto" max-width="500">
        <v-card-text>
            <div>
                <div class="text--primary">Vacation Requests</div>
                <div class="text--primary">
                  {{ $store.state.vacations.Ip}}
                </div>
                <br>                
                 <v-data-table      
                  :headers="headers"            
                  :items="Requests"
                  :items-per-page="5"
                  class="elevation-1">
                  <template v-slot:header.name="{ header }">
                        {{ header.text.toUpperCase() }}
                    </template>
                    <template v-slot:item.Days="{ item }">
                        <v-chip :color="getColor(item.Days)" dark>{{ item.Days }}</v-chip>
                    </template>
                  </v-data-table>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        //headers: []
      }
    },
    computed: {
      headers(){
        return[
          {text: 'Type',align: 'start',sortable: false,value: 'vacationType.nameEn',class: 'deep-purple'},
          { text: 'Start Date', value: 'startDate', class: 'deep-purple'},
          { text: 'End Date', value: 'endDate', class: 'deep-purple' },
          { text: 'Days ', value: 'numberOfDays' ,class: 'deep-purple'}          
        ]
      },
        ...mapState({
        Requests: state => state.vacations.Requests,
        }),
    },
     async fetch ({ store, params }) {
      console.log('fetch from vacation request');
      await store.dispatch('vacations/getVacationRequests');
    },
    created(){
      //this.$store.dispatch('vacations/getVacationRequests');
    },
    methods: {
      getColor (calories) {
        if (calories > 5) return 'red'
        else if (calories > 3) return 'orange'
        else return 'green'
      },
    },
  }
</script>