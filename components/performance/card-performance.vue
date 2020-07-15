<template>
  <div class="card-information performanceBx">
    <div class="card-header">
      <p>Performance</p>
    </div>
    <div class="card-body">
      <v-sheet class="mx-auto" >
        <v-slide-group
          show-arrows
          :prev-icon="prevIcon ? 'mdi-minus' : undefined"
          :next-icon="nextIcon ? 'mdi-plus' : undefined"
        >
          <v-slide-item
            v-for="n in years"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-layout
              class="full-view"
              :input-value="active"
              depressed
              @click="toggle"
            >
              <div class="performance-contents">
                <span class="report-value">{{ n }}</span>
                <p class="report-value">Exceeded Expectations</p>
                <div class="progress-steps">
                  <span class="step done"></span>
                  <span class="step done"></span>
                  <span class="step done"></span>
                  <span class="step done"></span>
                  <span class="step "></span>
                </div>
                <p class="ftr-performance">
                  Next Review Date: 31 December{{ n + 1}}
                </p>
              </div>
            </v-layout>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    years:[2019,2018,2017,2016]
  })
};
</script>

<<style lang="scss">
.performanceBx .v-item-group {
  position: static;
}
.performanceBx .v-slide-group__next {
  position: absolute;
  top: 14px;
  right: 15px;
  background: #ffc107;
  border-radius: 20px;
  min-width: 40px;
}

.performanceBx .v-slide-group__prev {
  position: absolute;
  top: 14px;
  right: 60px;
  background: #cccccc;
  border-radius: 20px;
  min-width: 40px;
}
.performanceBx .v-slide-group__next i {
  color: #fff;
  font-size: 18px;
}

.performanceBx .v-slide-group__prev i {
  color: #fff;
  font-size: 18px;
}
.performanceBx .full-view {
    width: 341px;
}


.performance-contents {
  width:100%;
 span{

   &.report-value {
    font-size: 22px;
    display: block;
    margin-top: 10px;
    font-family: stc medium;
}
 }
    .progress-steps{
          display: flex;
          flex-wrap: wrap;
          margin-top: 35px;
          span{
            &.step {
              display: inline-block;
              width: 20px;
              height: 6px;
              background: #ddd;
              border-radius: 5px;
              flex: 1;
              margin-right: 5px;
              &.done {
                background: #00c48c;
            }
          }
          }
      }
    p.ftr-performance {
    font-size: 14px;
    margin-top: 5px;
    }

}




</style>
