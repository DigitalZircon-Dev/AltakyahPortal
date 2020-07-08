<template>
  <div class="profile-report">
    <ul>
      <li class="user-points">
        <span class="report-caption">User Points</span>
        <span class="report-value">67.15</span>
        <span class="report-degree">Point</span>
      </li>

      <li class="performances">
        <span class="report-caption">Performances</span>
        <span class="report-value">2019</span>
        <p class="report-value">Exceeded Expectations</p>
        <div class="progress-steps">
           <span class="step done"></span>
           <span class="step done"></span>
           <span class="step done"></span>
           <span class="step done"></span>
           <span class="step "></span>
        </div>

      </li>

      <!-- <li>
        <span class="report-caption">Attendance</span>
        <span class="report-value">90%</span>
        <span class="report-degree">Week</span>
      </li> -->

      <li class="vacations">
        <span class="report-caption">Vacations</span>
        <span class="report-value">28</span>
        <span class="report-degree">Day</span>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ProfileReports',
  data() {
    return {
      menu: []
    }
  }
}
</script>
