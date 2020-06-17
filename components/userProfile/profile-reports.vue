<template>
  <div class="profile-report">
    <ul>
      <li>
        <span class="report-caption">User Points</span>
        <span class="report-value">67.15</span>
        <span class="report-degree">Point</span>
      </li>

      <li>
        <span class="report-caption">Performances</span>
        <span class="report-value">87.15 %</span>
        <span class="report-degree">2020</span>
      </li>

      <li>
        <span class="report-caption">Attendance</span>
        <span class="report-value">90%</span>
        <span class="report-degree">Week</span>
      </li>

      <li>
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
