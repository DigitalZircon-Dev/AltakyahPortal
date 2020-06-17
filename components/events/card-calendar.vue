<template>
  <div class="calendar-base">
    <div class="year">April 2020</div>
    <!-- year -->

    <div class="calenderAction">
      <div class="triangle-left"></div>
      <!--triangle -->
      <div class="triangle-right"></div>
      <!--  triangle -->
    </div>

    <div class="days">SUN MON TUE WED THU FRI SAT</div>
    <!-- days -->

    <div class="num-dates">
      <div class="first-week"><span>26 27 28 29 30 31</span> 01</div>
      <!-- first week -->
      <div class="second-week">
        02 03 <span class="current-day">04</span> 05 06 07 08
      </div>
      <!-- week -->
      <div class="third-week">09 10 11 12 13 14 15</div>
      <!-- week -->
      <div class="fourth-week">
        16 17 18 <span class="event">19</span> 20 21 22
      </div>
      <!-- week -->
      <div class="fifth-week">
        23 24 25 26 <span class="event">27</span> 28 29
      </div>
      <!-- week -->
      <div class="sixth-week">30 <span>01 02 03 04 05 06</span></div>
      <!-- week -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'cardCalendar'
}
</script>
