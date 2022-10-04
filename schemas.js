const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
    username: String,
    email: String,
    image: String,
    password: String,
    session: String,
})
const adminSocialLinkSchema = mongoose.Schema({
    Name: String,
    icon: String,
})
const adminjobPurposeSchema = mongoose.Schema({
    Name: String,
})
const userSchema = mongoose.Schema({
    name: String,
    image: String,
    email: String,
    password: String,
    session: String,
    profession: String,
    bio: String,
    uploadDocument: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userProfileDoc'
    }],
    userPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hub'
    }],
    profileVideoId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userProfileVideo'
    }],
    phoneNumber: String,
    profileStatus: String,
    ProfileHashtag: [{
        type: String
    }],
    userTotalPosts: Number,
    userAppliedJobsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ApplyJob'
    }],
    UserProfileLinkId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfileLinks'
    }],
    RecommendationsUserId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RecommentdationsUser'
    }],
    favouritesId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'favouriteUsersProfile'
    }],
    TotalLikes: Number,
    savedHubsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'savedHubs'
    }],
    verifyStatus: Boolean,
    LikesUsersId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userLikesProfile'
    }],
    profileCompletedStatus: {
        type: String,
        enum: ['Completed', 'Not Completed']
    },
})
const userProfileVideoSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    pdf: [{
        type: String
    }],
    Img: [{
        type: String
    }],
    link: String,
    email: String,
    thumbnail: String,
    AddContactId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contacts'
    }],
    hidden: Boolean,
    Downloadable: Boolean
})
const userProfileDocSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    DocType: String,
    DocLink: String,
    UploadDate: String
})

const ContactsSchema = mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userProfileVideo'
    },
    contactId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    contactName: String,
    contactNumber: String,
    contactImg: String,
    contactProfession: String,
    contactBio: String

})
const userLikesProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    LikedById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

})
const favouriteUsersProfileSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    favouritesProfileUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    FavUserName: String,
    FavImage: String,
    FavEmail: String,
    FavProfession: String,
    FavBio: String,
    FavProfileVideo: String,


})
const RecommentdationsUserSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    CommenterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    CommenterName: String,
    CommenterImage: String,
    Comment: String

})
const UserProfileLinksSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    icon: String,
    iconUrl:String,
    link: String

})
const forgetPasswordSchema = mongoose.Schema({
    email: String,
    code: String,
    expiresIn: String

})
const HelpCenterSchema = mongoose.Schema({
    userId: String,
    email: String,
    name: String,
    details: String

})
const HubSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    AboutPost: String,
    userImage: String,
    userName: String,
    Title: String,
    PostType: String,
    Purpose: String,
    TimePosted: String,
    userSocialLinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfileLinks'
    }],
    userProfileVideoId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userProfileVideo'
    }],
    Video: String,
    thumbnail: String,
    creators: [{
        type: String
    }],
    questionReason: String,
    postCreaters: String,
    jobCompanyName: String,
    jobDescription: String,
    joblocation: String,
    jobLong: String,
    jobLat: String,
    jobSalaryRange: String,
    Startdate: String,
    Enddate: String,
    jobApplicantsId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ApplyJob'
    }],
    projectDescription: String,
    Tag: [{
        type: String
    }],
    Workedusers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WorkedUser'
    }],
    HashtagHub: [{
        type: String
    }],
    RecommendationsPitchId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RecommentdationsPitch'
    }],
    TotalRecommendations: Number,
    LikedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    TotalLikes: Number,
    SavedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]

})
const WorkedUserSchema = mongoose.Schema({
    hubId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hub'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    userName:String,
    // Status:String

})
const userLikesHubSchema = mongoose.Schema({
    hubId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hub'
    },
    LikedById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

})
const ApplyJobSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    hubId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hub'
    },
    HubUserId:String,
    AppliedDate: String,
    video: String,
    thumbnail: String,
    Status: String,




})
const savedHubSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    hubId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hub'
    },


})
const RecommentdationsPitchSchema = mongoose.Schema({
    hubId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hub'
    },
    CommenterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    CommenterName: String,
    CommenterImage: String,
    Comment: String

})
const notificationSchema = mongoose.Schema({
    from: String,
    to: String,
    toName:String,
    toImg:String,
    msgContent: String,
    dateTime: String,
    readStatus: Boolean

})
const reportSchema = mongoose.Schema({
    userProfileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    userPostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hub'
    },
    reportReason: String,
    reportedById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

})
const MessageSchema = mongoose.Schema({
    message: {
        text: { type: String, required: true },
      },
      users: Array,
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
})


const adminModel = mongoose.model('admin', adminSchema, 'admin')
const Notification = mongoose.model('notification', notificationSchema, 'notification')
const adminSocialLinkModel = mongoose.model('adminSocialLink', adminSocialLinkSchema, 'adminSocialLink')
const userModel = mongoose.model('user', userSchema, 'user')
const forgetPasswordModel = mongoose.model('forgetPassword', forgetPasswordSchema, 'forgetPassword')
const HelpCenterdModel = mongoose.model('helpcenter', HelpCenterSchema, 'helpcenter')
const HubModel = mongoose.model('hub', HubSchema, 'hub')
const UserProfileLinksModel = mongoose.model('UserProfileLinks', UserProfileLinksSchema, 'UserProfileLinks')
const RecommentdationsUserModel = mongoose.model('RecommentdationsUser', RecommentdationsUserSchema, 'RecommentdationsUser')
const RecommentdationsPitchModel = mongoose.model('RecommentdationsPitch', RecommentdationsPitchSchema, 'RecommentdationsPitch')
const favouriteUsersProfileModel = mongoose.model('favouriteUsersProfile', favouriteUsersProfileSchema, 'favouriteUsersProfile')
const savedHubModel = mongoose.model('savedHubs', savedHubSchema, 'savedHubs')
const ApplyJobModel = mongoose.model('ApplyJob', ApplyJobSchema, 'ApplyJob')
const userLikesProfileModel = mongoose.model('userLikesProfile', userLikesProfileSchema, 'userLikesProfile')
const adminjobPurposeModel = mongoose.model('adminjobPurpose', adminjobPurposeSchema, 'adminjobPurpose')
const userProfileVideoModel = mongoose.model('userProfileVideo', userProfileVideoSchema, 'userProfileVideo')
const ContactsModel = mongoose.model('Contacts', ContactsSchema, 'Contacts')
const userLikesHubModel = mongoose.model('userLikesHub', userLikesHubSchema, 'userLikesHub')
const userProfileDocModel = mongoose.model('userProfileDoc', userProfileDocSchema, 'userProfileDoc')
const reportModel = mongoose.model('report', reportSchema, 'report')
const MessageModel = mongoose.model('Message', MessageSchema, 'Message')
const WorkedUserModel = mongoose.model('WorkedUser', WorkedUserSchema, 'WorkedUser')


module.exports = {
    adminModel,
    MessageModel,
    reportModel,
    Notification,
    userLikesHubModel,
    ContactsModel,
    adminjobPurposeModel,
    userLikesProfileModel,
    adminSocialLinkModel,
    userModel,
    forgetPasswordModel,
    HelpCenterdModel,
    HubModel,
    UserProfileLinksModel,
    RecommentdationsUserModel,
    RecommentdationsPitchModel,
    favouriteUsersProfileModel,
    savedHubModel,
    ApplyJobModel,
    userProfileVideoModel,
    userProfileDocModel,
    WorkedUserModel


}