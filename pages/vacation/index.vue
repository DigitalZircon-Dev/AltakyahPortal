<template>
    <div>
        <Vacation-Balance/>
         <br>
        <Vacation-Requests />
    </div>
</template>

<script>

import VacationBalance from '~/components/vacation/VacationBalance.vue'
import VacationRequests from '~/components/vacation/VacationRequests.vue'

export default {
    components: {
        VacationRequests,
        VacationBalance
    }
}
</script>