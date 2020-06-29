import {VACATION, MY_FIRST_CONSTANT} from '../constants'


export default ($axios) => ({
  all() {
    return $axios.get(`${VACATION.GET_VACATION}`)
  },

  show(id) {
    return $axios.get(`${VACATION.GET_VACATION}/${id}`)
  },

  create(payload) {
    return $axios.post(`${VACATION.GET_VACATION}`, payload)
  },

  update(id, payload) {
    return $axios.post(`${VACATION.GET_VACATION}/${id}`, payload)
  },

  delete(id) {
    return $axios.delete(`${VACATION.GET_VACATION}/${id}`)
  },

  async getBalanceByEmpolyeeNumber(EmployeeNumber)
  {
    debugger
    var BalanceByEmpNumURL= VACATION.GET_BALANCE_BY_EMP + EmployeeNumber;
    const balance = await $axios.$get(BalanceByEmpNumURL);
    return balance;
  },

  async getRequestsByEmpolyeeNumber(EmployeeNumber){
    return await $axios.$get(VACATION.GET_REQUESTS_BY_EMP);
  }
})
