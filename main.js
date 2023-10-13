function makeRbk(name) {
  return {
    name,
    usersList: [],
    makeStudent,
  }
}

/*id generator*/
function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}

var id = generateID();

var RBK = makeRbk(RBK)

function makeStudent(nameUser,emailUser, cohort, images , chekPointName , chekPointScore , assesmentsName,assesmentsScore) {
  var Student = {
    nameUser,
    emailUser,
    cohort,
     images ,
      chekPointName , 
      chekPointScore ,
       assesmentsName,
       assesmentsScore,
    id: id(),
  }
  this.usersList.push(Student)
  return Student
}


RBK.makeStudent()



function removeStruden(id) {
  this.usersList = this.usersList.filter(function (student) {
    student.id !== id
  })

  $(`#student${id}`).remove()
}















$('.form-container').hide();

$('#wechat').on('click', function() {
    $('.form-container').fadeToggle('slow')
  });


  $('#contact').on('click', function() {
    $('.form-container').fadeToggle("slow")
  });

  $('#addChekPoint').on('click', ()=> {

   let chekPointName =  $("#chekPointName").val()
   let chekPointScore = $("#chekPointScore").val()
    addCheckPoint(chekPointName, chekPointScore)

  })



  function addCheckPoint(name,score) {
    $(".submenu-category-list").append(`
        <li class="submenu-category">
                  <a href="#" class="submenu-title">${name}</a>
                  <p class="score">${score}</p>
                </li>
   ` )
  }
 
var usersList = []

 function addUser(userName,email,password) {
// add users to variables  
 // usersList.push({userName,password})
 var usersListFromLocalStorage = JSON.parse(localStorage.getItem("usersListLocal")|| "[]"); 
console.log(usersListFromLocalStorage);

  usersListFromLocalStorage.push({userName,email,password})
  
 if (usersListFromLocalStorage) {
  localStorage.setItem("usersListLocal",JSON.stringify(usersListFromLocalStorage));
var UserName = usersListFromLocalStorage[usersListFromLocalStorage.length-1].userName
var UserEmail = usersListFromLocalStorage[usersListFromLocalStorage.length-1].email

 usersList.push({UserName , UserEmail})
 console.log("usersList",usersList);

  console.log( JSON.parse(localStorage.getItem("usersListLocal")|| "[]"))
  console.log('done!');
 }


 }

 $('#btnSignUp').on('click',()=> {

  let signUpUsername =  $("#signUpUsername").val()
  let signUpPassword = $("#signUpPassword").val()
  let repeatSignUpPassword = $("#repeatSignUpPassword").val()
let signUpEmail = $("#signUpEmail").val()
  
  if (signUpPassword && repeatSignUpPassword === signUpPassword ) {
    addUser(signUpUsername,signUpEmail,signUpPassword)
  }
 


 })
var goToStudent = document.getElementById("goToStudent")
var addStudent = document.getElementById("btn-show-student")
console.log(addStudent)
  
 $('#btnLogin').on('click',()=> {
  let loginUserName =  $("#loginUserName").val()
  let loginPassword = $("#loginPassword").val()
  let localStorageusers = JSON.parse(localStorage.getItem("usersListLocal"))
  
  let findUser = localStorageusers.find((elem)=>{
    return elem.userName === loginUserName && elem.password ===loginPassword

  })
  console.log("findUser",findUser);

  if ($(findUser)) {
    console.log("trigger ",$('#goToStudent'));
    goToStudent.click()
 
}else{
  console.log(localStorageusers)
  alert("Your Password is Not Correct ")
}

})

// if (findUser) {
//   console.log("trigger ",$('#goToStudent'));
//   $('#goToStudent').trigger( "click" )
// }


$('#btnLogin').on('click',()=> {
  let loginUserName =  $("#loginUserName").val("")
  let loginPassword = $("#loginPassword").val("")
  let signUpUsername =  $("#signUpUsername").val("")
  let signUpPassword = $("#signUpPassword").val("")
  let repeatSignUpPassword = $("#repeatSignUpPassword").val("")
let signUpEmail = $("#signUpEmail").val("")

})








$('#btnSignUp').on('click',()=> {
  $('.container').stop().removeClass('active');
  });

  function displayUsersLocal() {
    let localStorageusers = JSON.parse(localStorage.getItem("usersListLocal"))
    
    
    localStorageusers.forEach(function(elem,i) {

    $("#allStudent").append(`<div class="card">
    <div class="cardstudent">
    
         <div class="card__title">${elem.userName}</div>
         <div class="card__subtitle">Cohort SO-2</div>
         <div class="card__wrapper">
             <div class="details">
                 <div class="chek-points">
             <h2 class="name">
                 Chek-Points
             </h2>
             <h2 class="note">100%</h2>
           <hr>
         </div>
         <div class="assesments">
             <h2 class="name">
                 Assesments
             </h2>
             <h2 class="note">100%</h2>
          <hr>
         </div>
          <div class="warmaps">
             <h2 class="name">
                 Warmaps
             </h2>
             <h2 class="note">100%</h2>
          <hr>
         </div>
      </div>
             <button class="card__btn card__btn-solid" class="moreDetails">More Details</button>
         </div>
     </div>
     <div class="tools">

         <div class="circle">
             <span class="red box"></span>
         </div>
         <div class="circle">
             <span class="yellow box"></span>
         </div>
         <div class="circle">
             <span class="green box"></span>
         </div>
     </div>
 </div>`)
    })
    var card=$("#students #allStudent  .card")
   
card.on("click",function() {
  
  $("#moreDetails").show(200)
  addStudent.click()
})
}



$("#moreDetails").hide()

$("#close").on("click",function() {
  $("#moreDetails").fadeToggle("slow")
})


  $(document).ready(function() {
    displayUsersLocal()

  });


var NameUsers = []

  var nameUsers = function() {
    let localStorageusers = JSON.parse(localStorage.getItem("usersListLocal"))
    localStorageusers.forEach(function(elem,i) {
      var nameUser = elem.userName
      var emailUser = elem.email
      NameUsers.push({nameUser,emailUser})
      
    })
  }
  nameUsers()
  console.log(NameUsers)

RBK.makeStudent("Hyba Zoghlami","HybaZoghlami@gmail.com","Cohort SO-2", ["photo/WhatsApp Image 2021-04-03 at 4.54.30 AM2.jpeg"] , "Check-Point" , 100 , "Assesment",100)
  





$("#allStudent").hide()

$('#btn-show-student').on('click', function() {
  $('#allStudent').fadeToggle("slow")
});

































