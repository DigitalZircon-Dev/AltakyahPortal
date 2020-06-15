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
    },
    async fetch ({ store, params }) {
        // Triger Action to get Vacation Balance
        await store.dispatch('vacations/getVacationRequests');
        // Triger Action to get Vacation Requests
        await store.dispatch('vacations/getVacationBalance');
    },
}
</script>