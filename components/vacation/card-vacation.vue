<template>
  <div class="card-information">
    <div class="card-header">
      Vacations
      <div class="action">
        <a href="#" class="addBtn">
          <img src="~/assets/images/card/card-plus.svg" alt="" />
          Add
        </a>
        <a href="#" class="Expand">
          <img src="~/assets/images/card/card-expand.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <p class="card-body-title">
        Balance
      </p>
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

<script>
// @ is an alias to /src
export default {
  name: 'cardVacation'
}
</script>
