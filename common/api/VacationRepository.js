import VACATION from '../constants'
const resource = '/vacations'

export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },

  show(id) {
    return $axios.get(`${resource}/${id}`)
  },

  create(payload) {
    return $axios.post(`${resource}`, payload)
  },

  update(id, payload) {
    return $axios.post(`${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`)
  },

  async getBalancebyEmpolyeeNumber(EmployeeNumber)
  {
    var BalanceByEmpNumURL= VACATION.GET_BALANCE_BY_EMP + EmployeeNumber;    
    //const balance = await this.$axios.$get(BalanceByEmpNumURL);
    const balance = await this.$axios.$get(`${VACATION.GET_BALANCE_BY_EMP}/${EmployeeNumber}`);
    return balance;
  }
})