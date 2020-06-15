<template>
    <v-card class="mx-auto" max-width="500">
        <v-card-text>
            <div class="mx-0">
                <div class="d-inline text--primary">Vacation Balance</div>
                <v-btn text color="pink darken-1 d-inline float-right">
                    <v-icon>mdi-plus-circle-outline</v-icon>Add Vacation
                </v-btn>
            </div>
            <v-divider class="mx-0"></v-divider>
            <p>Balance ({{VacationBalance.year}})</p>
            <div>
                <div class="d-inline text--primary title">{{ VacationBalance.remainingDays}}</div>
                <p class='d-inline'>Days Remainings</p> 
                <p class="d-inline float-right">{{TotalDays}} Day</p>
            </div>            
            <v-progress-linear color="pink darken-1" :value="VacationBalance.remainingDays"></v-progress-linear>
            <p class='subtitle-2'>{{VacationBalance.consumedDays}} Days Used</p>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    computed: {
        ...mapState({            
            VacationBalance: state => state.vacations.VacationBalance
        }),
        ...mapGetters({
            TotalDays: 'vacations/TotalDays'
        })
    },
     async fetch ({ store, params }) {
        console.log('fetch from vacation balance ');
        await store.dispatch('vacations/getVacationBalance');
    },
    created() {
        //this.$store.dispatch('vacations/getVacationBalance');
    }
}
</script>