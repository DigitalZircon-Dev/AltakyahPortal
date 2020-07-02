import en from 'vuetify/es5/locale'

export default {
  ...en,

  key1: "key 1 internationalization",
  blockquote: "First, solve the problem. Then, write the code.",
  commonoprations:{
    add:"Add",
    edit:"Edit",
    delete:"Delete",
    cancel: "Cancel",
    close: "Close",
    save:"Save"
  },
  commentoptions: {
    like: "Like",
    downloadattachment: "Download attachment",
    repleis: "Repleis",
    repley: "Repley",
    report: "Report",
    reportplaceholder: "Please enter the text of the resport",
    blocked:"Blocked"
  },
  sourceoptions: {
    countlike: "Count of like",
    countfavorite: "Count of favorite",
    addcomment:"Add comment",
    comment:"comment",
    comments:"Comments",
    likes:"Likes",
    favorites:"Favorites"
  },
  ckeditor: {
    countcharacters: "Count of characters"
  },
  multipleuploads: {
    maximumfileerror: "The number of files allowed to be uploaded "
  },
  messages:{
 deleteConfirmation:"Are you sure you want to delete this item?" ,
 bloackConfirmation:"Are you sure you want to block this item ?"

  },
  CommentReporter:{
    report:"Report",
    reportBy:"Report by"
  },
  project:{
    projectTitle:"Projects",
    project:"Project",
    addOrEditProject:"Add or edit project",
    projectName:"Project name",
    isCurrentlyWorking:"I am currently working on this project",
    startDate:"Project start date",
    endDate:"Project end date",
    projectTeamMembers:"Project team Members",
    description:"Description",
    projectDate:"Project date",
    present:"- Present",
    projectNameplaceholder:"Please enter project name.",
    startDateplaceholder:"Please enter project start date.",
    endDateplaceholder:"Please enter project end date.",
    projectTeamMembersplaceholder:"Please enter project team Members.",
    descriptionplaceholder:"Please enter description.",
     validators:{
      projectName:"The project name is required.",
      startDate:"The project start date is required.",
      endDate:"The project end date is required.",
      description:"The project end date is required.",
      projectNameMaxLength:"The number of characters allowed is 255 characters.",
      startDateGreaterThanEndDateError:"The project start date must be less then end date."
    },
    notifications:{
      save:"The project has been added successfully",
      edit:"The project has been updated successfully",
      delete:"The project has been deleted successfully"
    }
  },
  recommendations:{
    recommendationTitle:"Recommendations",
    received:"Received",
    given:"Given",
    addOrEditRecommendation:"Add or edit recommendation",
    recommendation:"recommendation",
     validators:{
      recommendation:"The recommendation name is required."
    },
    notifications:{
      save:"The recommendation has been added successfully",
      edit:"The recommendation has been updated successfully",
      delete:"The recommendation has been deleted successfully",
      deactivate:"he recommendation has been deactivated successfully"
    }
  },
   userSkill:{
    userSkillTite:"Skills",
    endorse:"Endorse",
    adduserSkill:"Add skill",
    edituserSkill:"Edit skill",
    validators:{
      duplicateSkillError:"Skill has already been added."
    },
    notifications:{
      save:"The skill has been added successfully",
      delete:"The skill has been deleted successfully"
    }

  },
  namespace: {
    key3: "key 3 internationalization"
  }
}
