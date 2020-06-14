import VacationRepository from './VacationRepository'

export default($axios) =>({
    vacation: VacationRepository($axios)
})