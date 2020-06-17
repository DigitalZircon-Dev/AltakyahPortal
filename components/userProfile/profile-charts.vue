<template>
  <div class="report-info-box">
    <div class="flex-wrapper">
      <div class="single-chart">
        <svg viewBox="0 0 36 36" class="circular-chart shape-green">
          <path
            class="circle-bg"
            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            class="circle"
            stroke-dasharray="75, 100"
            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="18" class="percentage">75%</text>
          <text x="18" y="24" class="percentage-text">
            Task
          </text>
        </svg>
        <p class="chart-info-text">110<span>Task</span></p>
      </div>

      <div class="single-chart">
        <svg viewBox="0 0 36 36" class="circular-chart shape-orange">
          <path
            class="circle-bg"
            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            class="circle"
            stroke-dasharray="50, 100"
            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="18" class="percentage">50%</text>
          <text x="18" y="24" class="percentage-text">
            Ongoing
          </text>
        </svg>
        <p class="chart-info-text">75<span>Task</span></p>
      </div>

      <div class="single-chart">
        <svg viewBox="0 0 36 36" class="circular-chart shape-coral">
          <path
            class="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            class="circle"
            stroke-dasharray="25, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="18" class="percentage">25%</text>
          <text x="18" y="24" class="percentage-text">
            Inreview
          </text>
        </svg>
        <p class="chart-info-text">35<span>Task</span></p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'profileCharts'
}
</script>
