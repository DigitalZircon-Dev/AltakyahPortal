<template>
    <div class="card-information attendanceBx">
                    <div class="card-header">
                      Attendance
                    </div>
                    <div class="card-body">
                      <p class="card-body-title">
                        This Week
                      </p>
                      <p class="card-body-target">
                        78%
                      </p>

                      <div class="vertical">
                        <div class="progress-bar">
                          <div class="progress-track">
                            <div
                              class="progress-fill"
                              style="height: 60%; top: 40%;"
                            >
                              <span class="progress-val">M</span>
                            </div>
                          </div>
                        </div>
                        <div class="progress-bar">
                          <div class="progress-track">
                            <div
                              class="progress-fill"
                              style="height: 90%; top: 10%;"
                            >
                              <span class="progress-val">T</span>
                            </div>
                          </div>
                        </div>
                        <div class="progress-bar">
                          <div class="progress-track">
                            <div
                              class="progress-fill"
                              style="height: 80%; top: 20%;"
                            >
                              <span class="progress-val">W</span>
                            </div>
                          </div>
                        </div>
                        <div class="progress-bar">
                          <div class="progress-track">
                            <div
                              class="progress-fill"
                              style="height: 40%; top: 60%;"
                            >
                              <span class="progress-val">T</span>
                            </div>
                          </div>
                        </div>
                        <div class="progress-bar">
                          <div class="progress-track">
                            <div
                              class="progress-fill"
                              style="height: 34%; top: 66%;"
                            >
                              <span class="progress-val">F</span>
                            </div>
                          </div>
                        </div>
                        <div class="progress-bar">
                          <div class="progress-track">
                            <div
                              class="progress-fill"
                              style="height: 82%; top: 18%;"
                            >
                              <span class="progress-val">S</span>
                            </div>
                          </div>
                        </div>
                        <div class="progress-bar">
                          <div class="progress-track">
                            <div
                              class="progress-fill"
                              style="height: 0%; top: 0%;"
                            >
                              <span class="progress-val">S</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
</template>


<script>
// @ is an alias to /src
export default {
  name: 'cardAttendance',
}
</script>
