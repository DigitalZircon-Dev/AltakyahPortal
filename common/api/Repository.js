import VacationRepository from './VacationRepository'
import CommentRepository from './CommentRepository'
import UserProfileRepository from './UserProfileRepository'



export default($axios) =>({
    vacation: VacationRepository($axios),
    comment: CommentRepository($axios),
    userProfile:UserProfileRepository($axios)
})
