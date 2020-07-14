<template>
<v-col cols="12" md="6" lg="6" xl="6">
<div class="RequestBox">
   <v-card  flat class="requestCard ">
      <v-card-title class="RequestHeader py-2">
         My Requests
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
         :headers="headers"
         :items="tasks"
        :search="search"
          class="requestsTable px-2"
         :items-per-page="4"
        hide-default-header
        hide-default-footer
      >
        <template v-slot:item ="{item}" >
            <div class="requestItems">
                <a href="#" v-bind:class="`${item.statusText}`">
                <span class="cell-id">{{ item.id}}</span>
                <p class="cell-title">{{ item.title}} </p>
                <span class="cell-status float-right">{{ item.statusText}}</span>
                <div class="author-info float-left">
                <span class="cell-author ">{{ item.author}}</span>
                <span class="cell-date ">{{ item.date}}</span>
                </div>
                </a>
            </div>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
</div>
</v-col>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'profileRequests',

    data () {
    return {
      search: '',
      headers: [
      { text: 'id', value: 'id'},
      { text: 'title', value: 'title' },
      { text: 'status', value: 'statusText'},
      { text: 'Author', value: 'author' },
      { text: 'Date', value: 'date' },
      ],
      tasks: [
        {
          id: '#10184',
          title: 'Review code for team page',
          statusText : "completed",
          author: "Muhammed Gamal Zaky",
          date: "04 April 2020",
        },
        {
         id: '#10657',
            title: 'Review code for team page',
            statusText : "Canceled",
            author: "Muhammed Gamal Zaky",
            date: "04 April 2020",
        },
        {
         id: '#16677',
            title: 'Review code for team page',
            statusText : "Pending",
            author: "Muhammed Gamal Zaky",
            date: "04 April 2020",
        },
        {
         id: '#23777',
            title: 'Review code for team page',
            statusText : "Progress",
            author: "Muhammed Gamal Zaky",
            date: "04 April 2020",
        },
        {
         id: '#11277',
            title: 'Review code for team page',
            statusText : "completed",
            author: "Muhammed Gamal Zaky",
            date: "04 April 2020",
        },
        {
         id: '#10747',
            title: 'Review code for team page',
            statusText : "completed",
            author: "Muhammed Gamal Zaky",
            date: "04 April 2020",
        },
        {
         id: '#10752',
            title: 'Review code for team page',
            statusText : "completed",
            author: "Muhammed Gamal Zaky",
            date: "04 April 2020",
        }
      ]

    }
  }, methods: {
         getColor (statusText) {
        if (statusText == 'completed') return 'green'
        else if (statusText == 'pending') return 'orange'
        else if (statusText == 'late') return 'red'
        else return 'gray'
      },
    },
}
</script>

