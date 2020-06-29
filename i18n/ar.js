import ar from 'vuetify/es5/locale'


export default {
  ...ar,

  key1: "test",
  blockquote: "اولا حل المشكلة ثم اكتب الكود",
  commonoprations:{
    add:"إضافة",
    edit:"تعديل",
    delete:"حذف",
    cancel: "الغاء",
    close: "اغلاق",
    save:"حفظ"
  },
  commentoptions: {
    like: "اعجبني",
    downloadattachment: "تحميل المرفقات",
    repleis: "ردود",
    repley: "ردود",
    report: "تبليغ",
    reportplaceholder: "إدخال نص البلاغ",
    blocked:"حظر"
  },
  sourceoptions: {
    countlike: "عدد الاعجابات",
    countfavorite: "عدد المفضلة",
    addcomment:"إضافة تعليق",
    comment:"تعليق",
    comments:"تعليقات",
    likes:"اعجابات",
    favorites:"مفضلة"
  },
  ckeditor: {
    countcharacters: "عدد الحروف"
  },
  multipleuploads: {
    maximumfileerror: "عدد الملفات المسموح رفعها "
  },
  messages:{
 deleteConfirmation:"هل انت متاكد انك تريد حذف العنصر ؟",
 bloackConfirmation:" هل انت متاكد انك تريد حظر العنصر ؟"
  },
  CommentReporter:{
    report:"البلاغ",
    reportBy:"الاسم"
  },
  project:{
    projectTitle:"المشاريع",
    project:"مشروع",
    projects:"المشاريع",
    addOrEditProject:"إضافة او تعديل مشروع",
    projectName:"اسم المشروع",
    projectNameplaceholder:"ادخل اسم المشروع",
    isCurrentlyWorking:"لازلت اعمل حالياً على هذه المشروع",
    startDate:"تاريخ بداية المشروع",
    startDateplaceholder:"ادخل تاريخ بداية المشروع",
    endDate:"تاريخ نهاية المشروع",
    endDateplaceholder:"ادخل تاريخ نهاية المشروع",
    projectTeamMembers:"اعضاء المشروع",
    projectTeamMembersplaceholder:"ادخل اعضاء المشروع",
    description:"وصف المشروع",
    descriptionplaceholder:"ادخل وصف المشروع",
    projectDate:"تاريخ المشروع",
    present:"- حتى الان",
    validators:{
      projectName:"اسم المشروع حقل اجباري",
      projectNameMaxLength:"عدد الحروف المسوح بها 255 حرف",
      startDate:"تاريخ بداية المشروع حقل اجباري",
      endDate:"تاريخ نهاية المشروع حقل اجباري",
      description:"وصف المشروع حقل اجباري",
      startDateGreaterThanEndDateError:"يجب ان يكون تاريخ بداية المشروع اقل من نهاية المشروع"
    },
    notifications:{
      save:"تم حفظ المشروع نجاح",
      edit:"تم تعديل المشروع نجاح",
      delete:"تم حذف المشروع بنجاح"
    }
  },
  recommendations:{
    recommendationTitle:"التوصيات",
    received:"تم الاستلام",
    given:"اعطى",
    addOrEditRecommendation:"إضافة او تعديل توصية",
    recommendation:"التوصية",
     validators:{
      recommendation:"التوصية حقل اجباري"
    },
    notifications:{
      save:"تم حفظ التوصية نجاح",
      edit:"تم تعديل التوصية نجاح",
      delete:"تم حذف التوصية بنجاح",
      deactivate:"تم الغاء تفعيل التوصية بنجاح"
    }
  },
  userSkill:{
    userSkillTite:"المهارات",
    endorse:"مصادقة",
    adduserSkill:"إضافة مهارة جديدة",
    edituserSkill:"تعديل المهارات",
    validators:{
      duplicateSkillError:"تم إضافة المهارة من قبل"
    },
    notifications:{
      save:"تم حفظ المهارات نجاح",
      delete:"تم حذف المهارة بنجاح"
    }
  },
  namespace: {
    key3: "key 3 internationalization"
  }
}
