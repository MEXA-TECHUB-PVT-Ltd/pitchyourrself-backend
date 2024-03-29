require("./db/conn");
const PORT = 4000
const express = require('express')
const app = express()
const socket = require("socket.io");
const path = require('path')
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/file-uploads', express.static('file-uploads'))
app.use('/image-uploads', express.static('image-uploads'))
app.use('/video-uploads', express.static('video-uploads'))

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
 

app.get('/', function(req, res){
    res.send('<h1>Working</h1>')
})
   
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Image Upload APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
    
app.use('/upload-image', require('./apis/upload-image'))
app.use('/upload-video', require('./apis/upload-video'))
app.use('/upload-multiple-images', require('./apis/upload-multiple-images'))
app.use('/upload-file', require('./apis/upload-file'))



////////////////////////////////////////////////////////////////////////////////
///////////////////////////////ADMIN APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/admin',
    require('./apis/admin/crud/create-admin'),
    require('./apis/admin/crud/delete-admin'),
    require('./apis/admin/crud/get-admin'),
    require('./apis/admin/crud/get-all'),
    require('./apis/admin/crud/login-admin'),
    require('./apis/admin/crud/logout-admin'),
    require('./apis/admin/crud/update-admin'),
    require('./apis/admin/crud/update-password'),
    require('./apis/admin/operations/addSocialMediaLink'),
    require('./apis/admin/operations/get-all-social-links'),
    require('./apis/admin/operations/jobPurposeAdd'),
    require('./apis/admin/operations/get-all-job-purpose'),

)
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////User APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/user',
// Notification 
require('./apis/notification/create-msg'),
require('./apis/notification/delete-msg'),
require('./apis/notification/get-all-msg'),
require('./apis/notification/get-msg'),
require('./apis/notification/get-to-notification'),
require('./apis/notification/read-msg'),
// Report 
require('./apis/user/operations/reportUser/reportPost'),
require('./apis/user/operations/reportUser/getAllReports'),
require('./apis/user/operations/reportUser/getReport'),
require('./apis/user/operations/reportUser/deleteReport'),
// Msg 
require('./apis/socketsChat/addMsg'),
require('./apis/socketsChat/getMsg'),
// Collab project Hub 
require('./apis/user/operations/hub/workedUsers/create'),
require('./apis/user/operations/hub/workedUsers/delete'),
require('./apis/user/operations/hub/workedUsers/get-all-hubsColab'),








// User
require('./apis/user/crud/signIn'),
require('./apis/user/crud/signUp'),
require('./apis/user/crud/get-all'),
require('./apis/user/crud/get-user'),
require('./apis/user/crud/update-password'),
require('./apis/user/crud/update-user'),
require('./apis/user/crud/logout-user'),
require('./apis/user/crud/delete'),
require('./apis/user/crud/verifyUser'),
require('./apis/user/crud/unverifyUser'),
require('./apis/user/crud/changeProfileStatusPrivate'),
require('./apis/user/crud/changeProfileStatusPublic'),

// forgetPass 
require('./apis/user/operations/forgetPassword/emailSend'),
// Help Center 
require('./apis/user/operations/helpcenter/create'),
require('./apis/user/operations/helpcenter/get-all'),
// Hub 
require('./apis/user/operations/hub/create'),
require('./apis/user/operations/hub/get-all-hubs'),
require('./apis/user/operations/hub/delete'),
require('./apis/user/operations/hub/get-all-jobs'),
require('./apis/user/operations/hub/get-all-posts'),
require('./apis/user/operations/hub/get-all-projects'),
require('./apis/user/operations/hub/get-all-questions'),
require('./apis/user/operations/hub/get'),
require('./apis/user/operations/hub/getAllUserHubs'),
require('./apis/user/operations/hub/update'),
require('./apis/user/operations/hub/gethubpage'),

// Social Media link 
require('./apis/user/operations/add-social-media-link/add-social-links-user'),
require('./apis/user/operations/add-social-media-link/delete-link'),
require('./apis/user/operations/add-social-media-link/get-all-links'),
require('./apis/user/operations/add-social-media-link/get-link'),
require('./apis/user/operations/add-social-media-link/get-user-sociallinks'),
require('./apis/user/operations/add-social-media-link/update-user-link'),
// Recommendations Profile
require('./apis/user/operations/recommendation/userProfile/create'),
require('./apis/user/operations/recommendation/userProfile/getAllProfileComments'),
// Recommendations Posts
require('./apis/user/operations/recommendation/userPitch/create'),
require('./apis/user/operations/recommendation/userPitch/getAllPitchComments'),
// FavouriteProfiles  
require('./apis/user/operations/favouritesProfile/addProfileFav'),
require('./apis/user/operations/favouritesProfile/getUserFavProfiles'),
require('./apis/user/operations/favouritesProfile/RemoveProfileFav'),
// Saved Posts 
require('./apis/user/operations/savedItems/addHub'),
require('./apis/user/operations/savedItems/get-user-saved-hubs'),
require('./apis/user/operations/savedItems/remove-saved-hub'),
// Apply for Job 
require('./apis/user/operations/applyForJob/applyforjob'),
require('./apis/user/operations/applyForJob/getJobApplicants'),
require('./apis/user/operations/applyForJob/getUserAppliedJobs'),
require('./apis/user/operations/applyForJob/changeStatus'),
require('./apis/user/operations/applyForJob/get-all-user-posted-jobs'),


// Likes 
require('./apis/user/operations/LikeProfileUser/hit-like'),
require('./apis/user/operations/LikeProfileUser/unlike'),
require('./apis/user/operations/LikeProfileUser/get-all-user-profile-likes'),
//search 
require('./apis/user/operations/searchData/searchByPerson'),
require('./apis/user/operations/searchData/searchByHashTag'),
require('./apis/user/operations/searchData/searchTagHub'),
// Profile Video 
require('./apis/user/operations/ProfileVideo/createVideo'),
require('./apis/user/operations/ProfileVideo/DeleteVideo'),
require('./apis/user/operations/ProfileVideo/GetVideo'),
require('./apis/user/operations/ProfileVideo/UpdateVideo'),
require('./apis/user/operations/ProfileVideo/getUserProfileVideo'),
require('./apis/user/operations/ProfileVideo/changeHidden'),
require('./apis/user/operations/ProfileVideo/changeDownloadable'),
// Add Contacts 
require('./apis/user/operations/addContacts/addContacts'),
require('./apis/user/operations/addContacts/get-Contact'),
require('./apis/user/operations/addContacts/get-all-user-video-contacts'),
require('./apis/user/operations/addContacts/removeContact'),
// Hub Likes 
// require('./apis/user/operations/LikeHub/get-all-users-liked-hubs'),
require('./apis/user/operations/LikeHub/hit-like-hub'),
require('./apis/user/operations/LikeHub/unlike-hub'),
// Upload Doc 
require('./apis/user/operations/uploadProfileDoc/uploadDoc'),
require('./apis/user/operations/uploadProfileDoc/deleteDoc'),
require('./apis/user/operations/uploadProfileDoc/updateDoc'),
require('./apis/user/operations/uploadProfileDoc/viewAllDoc'),
require('./apis/user/operations/uploadProfileDoc/viewDoc'),
require('./apis/user/operations/uploadProfileDoc/viewUserDoc'),



)
const server = app.listen(PORT, () => {
    console.log(`Server is started in PORT no ${PORT}`)
});
// Sockets
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
