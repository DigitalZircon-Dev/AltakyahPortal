<template>
  <div class="card-information KbiBx">
    <div class="card-header">
     KPI
      <div class="action">
        <a href="#" class="Expand">
          <img src="~/assets/images/card/card-expand.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <ul class="Kbi-list">
        <li   v-for="kpi in lastKPI"
            :key="kpi.id">
          <img src="~/assets/images/all/pen.svg" alt="" />
          <p>{{kpi.description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "cardKPI",
  data() {
    return {
      lastKPI:[]
    };
  },
  created() {
    this.fetchLastFavourites()
  },
   methods: {
    async fetchLastFavourites(_socialTypeId) {
      const vm = { userId: this.$route.query.userId}
      const result = await this.$store.dispatch(
        'userProfile/fetchLastKPI',
        vm
      )
      if (result.value) {
        this.lastKPI = result.value
      }
    }
   }

};
</script>

