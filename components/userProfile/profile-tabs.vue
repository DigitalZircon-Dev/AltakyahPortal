<template>
  <div class="tabs-box">
    <v-tabs>
      <v-tab href="#tab-1">My Tasks</v-tab>
      <v-tab href="#tab-2">My Requests</v-tab>

      <v-tab-item value="tab-1">
        <div class="tab-content">
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1">
            <template v-slot:item.calories="{ item }">
              <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
            </template>
          </v-data-table>
          <div class="card-items">
            <a href="#" class="card-item completed">
              <span class="cell-time">08:15 am</span>
              <p class="cell-title">
                Review code for teams page
                <span class="cell-status ">completed</span>
              </p>
            </a>
            <a href="#" class="card-item Canceled">
              <span class="cell-time">08:15 am</span>
              <p class="cell-title">
                Migrate sign up form
                <span class="cell-status ">Canceled</span>
              </p>
            </a>
            <a href="#" class="card-item Pending">
              <span class="cell-time">08:15 am</span>
              <p class="cell-title">
                Unknown language redirect
                <span class="cell-status ">Pending</span>
              </p>
            </a>
            <a href="#" class="card-item Progress">
              <span class="cell-time">08:15 am</span>
              <p class="cell-title">
                sharing feature failed
                <span class="cell-status ">In progress</span>
              </p>
            </a>
          </div>
        </div>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <div class="tab-content">
          <div class="card-items">
            <a href="#" class="card-item completed">
              <span class="cell-time">08:15 am</span>
              <p class="cell-title">
                Review code for teams page requests
                <span class="cell-status ">completed</span>
              </p>
            </a>
            <a href="#" class="card-item Canceled">
              <span class="cell-time">08:15 am</span>
              <p class="cell-title">
                Migrate sign up form
                <span class="cell-status ">Canceled</span>
              </p>
            </a>
            <a href="#" class="card-item Pending">
              <span class="cell-time">08:15 am</span>
              <p class="cell-title">
                Unknown language redirect
                <span class="cell-status ">Pending</span>
              </p>
            </a>
            <a href="#" class="card-item Progress">
              <span class="cell-time">08:15 am</span>
              <p class="cell-title">
                sharing feature failed
                <span class="cell-status ">In progress</span>
              </p>
            </a>
          </div>
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'profileTabs',
  data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },
}
</script>
