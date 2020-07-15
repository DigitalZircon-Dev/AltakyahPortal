<template>
  <div class="card-information requestsBx">
    <div class="card-header">
      <p>Requests</p>
    </div>
    <div class="card-body">
      <div class="requests-box">
        <ul class="request-list">
          <li><span class="sp-pending">58 pending </span></li>
          <li><span class="sp-new">08 new </span></li>
          <li>
            <span class="sp-completed">58 completed </span>
          </li>
          <li><span class="sp-rejected">08 rejected </span></li>
        </ul>
        <div class="request-chart">
          <img src="~/assets/images/all/fixed-chart-img.png" alt="" /><span>98</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'cardRequests'
}
</script>
