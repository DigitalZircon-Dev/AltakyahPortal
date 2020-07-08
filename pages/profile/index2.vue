/* eslint-disable no-debugger */
<template>
  <div >
  <UserSkills/>
    <Projects/>

     <Recommendations/>
  </div>

</template>

<script>
import Vue from 'vue'
import UserSkills from '../../components/userProfile/userSkills/UserSkills'
import Projects from '../../components/userProfile/projects/projects'
import Recommendations from '../../components/userProfile/recommendations/Recommendations'

export default Vue.extend({
  components: { UserSkills,Projects,Recommendations }
})
</script>
