<template>
  <div class="card-information tasksBx">
    <div class="card-header">
      <p>Tasks</p>
    </div>
    <div class="card-body">
      <div class="tasks-box">
        <ul class="task-list">
          <li><span class="sp-pending">58 pending </span></li>
          <li><span class="sp-new">08 new </span></li>
          <li>
            <span class="sp-completed">58 completed </span>
          </li>
          <li><span class="sp-rejected">08 rejected </span></li>
        </ul>
        <div class="task-chart">
          <img src="~/assets/images/all/fixed-chart-img.png" alt="" /><span>157</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'cardTasks'
}
</script>
