<template>
  <div class="tabs-box">
    <v-tabs>
      <v-tab href="#tab-1">My Tasks</v-tab>
      <v-tab href="#tab-2">My Requests</v-tab>

      <v-tab-item value="tab-1">
        <div class="tab-content">
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
    </v-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'profileTabs'
}
</script>
