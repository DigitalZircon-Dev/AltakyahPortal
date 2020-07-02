export const MY_FIRST_CONSTANT = 'is awesome'
export const MY_SECOND_CONSTANT = 'is also awesome'

// Vacation Services Constants
export const VACATION = {
    GET_BALANCE_BY_EMP : 'vacationBalance/ByEmployeeNumber/',
    GET_REQUESTS_BY_EMP : 'vacationRequest',
    GET_VACATION : 'vacations',
}

export const COMMENT = {
  ADD_COMMENT : 'Comment/OnCreateComment',
  FERCH_COMMENTS : 'Comment/FetchComments',
  FERCH_REPLY_COMMENTS : 'Comment/FetchReplyComments/',
  FERCH_SOURCE_URLS : 'SourceUrl/FetchSourceUrls',
  ADD_COMMENT_LIKE : 'CommentLike/OnCreateCommentLike',
  DELETE_COMMENT_LIKE : 'CommentLike/DeleteCommentLike',
  DELETE_COMMENT : 'Comment/Delete',
  ADD_COMMENT_REPORT : 'CommentReport/OnCreateCommentReport',
  FERCH_COMMENT : 'Comment/FetchComment/',
  DELETE_COMMENT_ATTACHMENT : 'CommentAttachment/DeleteAttachment',
  EDIT_COMMENT : 'Comment/OnEditComment',
  ADD_LIKE_OR_FAVORITE : 'Like/OnCreateLikeOrFavorite',
  FETCH_ATTACHMENTS : 'CommentAttachment/FetchAttachments/',
  FETCH_SOCIAL_USERS : 'Comment/FetchSocialUsers',
  ON_BLOCKED_COMMENT : 'Comment/BlockedComment',
  FETCH_COMMENT_REPORTS : 'Comment/FetchCommentReports',
  FETCH_COMMENT_REPORTER : 'CommentReport/FetchCommentReporter/',
}


export const USERPROFILE = {
  ADD_OR_EDIT_PROJECT : 'Project/OnCreateProject',
  FETCH_PROJECTS : 'Project/FetchProjects/',
  FETCHP_ROJECT : 'Project/FetchProject/',
  DELETE_PROJECT : 'Project/Delete',
  FETCH_TEAM_MEMBERS : 'ProjectTeamMember/FetchTeamMembers',
  ADD_OR_EDIT_USER_RECOMMENDATION : 'UserRecommendation/OnCreateRecommendation',
  FETCH_USER_RECOMMENDATIONS : 'UserRecommendation/FetchUserRecommendations/',
  FETCH_USER_RECOMMENDATION : 'UserRecommendation/FetchUserRecommendation/',
  DELETE_USER_RECOMMENDATION : 'UserRecommendation/Delete',
  ACTIVED_RECOMMENDATION : 'UserRecommendation/ActivedRecommendation',
  FETCH_USER_SKILLS : 'UserSkill/FetchUserSkills/',
  ADD_USER_SKILL : 'UserSkill/OnCreateUserSkill',
  DELETE_USER_SKILL : 'UserSkill/Delete',
  ON_ENDORSE : 'UserSkill/OnEndorse',
  FETCH_USER_SKILL_ENDORSES : 'UserSkill/FetchUserSkillEndorses/',
  FETCH_SKILL : 'Skill/FetchSkills',
  ADD_SKILL : 'Skill/OnCreateSkill',
}

//export default Object.freeze({
// export default {
//     VACATION,
//     GET_VACATION
// };

// export default {
//     MY_FIRST_CONSTANT : 'is awesome',
//     MY_SECOND_CONSTANT : 'is also awesome',

//     VACATION : 'vacations'
// };
