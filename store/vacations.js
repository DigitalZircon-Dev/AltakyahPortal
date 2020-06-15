export const state = () => ({
    TotalDays: 40,
    ConsumedDays: 12,
    RemainingDays: 28,
    Requests: [ ],
    VacationBalance:{}
})

export const getters = {
    TotalDays: state => {
        if(state.VacationBalance.consumedDays){
        var total = state.VacationBalance.consumedDays + state.VacationBalance.remainingDays;
        console.log('total value: ' + total);
        return total;
        }else{
            return '';
        }
    }
}

export const mutations = {
    SETBalance(state, balance) {
        console.log('inside setBalance');
        state.VacationBalance = balance;
        console.log(state.VacationBalance);
    },
    SETRequests(state, requests){
        console.log('inside SetRequests');
        state.Requests.push(...requests);        
    }
}

export const actions = {
    async getVacationBalance({ commit }){
        // console.log('inside vacaiton Balance');
        //var BalanceByEmpNumURL='http://localhost:44306/api/app/vacationBalance/ByEmployeeNumber/10133';
        //const balance = await this.$axios.$get(BalanceByEmpNumURL);

        const balance = await this.$repositories.vacation.getBalanceByEmpolyeeNumber()

        console.log(balance);
        commit('SETBalance', balance);
    },
    async getVacationRequests({ commit }){
        var RequestByEmpNumURL = '';
        const requests = await this.$axios.$get('http://localhost:44306/api/app/vacationRequest');
        console.log(requests.items);
        commit('SETRequests', requests.items);
    }
}

/*
    var x = {
        Type: 'Annual',
        startDate: '11 June 2019',
        endDate: '22 June 2019',
        numberOfDays: '11'
    };
*/