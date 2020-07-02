<template>
  <div class="card-information">
    <div class="card-header">
      Projects
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
        Latest Projects
      </p>
      <p class="card-body-target">
        24
      </p>
      <ul class="project-list">
        <li><a href="#">AwalNet </a></li>
        <li><a href="#">CMA Project </a></li>
        <li><a href="#">Ministry of Finance</a></li>
        <li><a href="#">NUMU </a></li>
        <li><a href="#">Cafe ET dessert</a></li>
        <li><a href="#">Now training Co</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'cardProjects'
}
</script>
