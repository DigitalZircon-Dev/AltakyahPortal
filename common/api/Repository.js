import VacationRepository from './VacationRepository'
import TestRepository from './TestRepository'

export default($axios) =>({
    vacation: VacationRepository($axios),
    test: TestRepository($axios)
})