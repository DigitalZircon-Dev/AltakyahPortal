import VacationRepository from './VacationRepository'
import CommentRepository from './CommentRepository'

export default($axios) =>({
    vacation: VacationRepository($axios),
    comment: CommentRepository($axios)

})
