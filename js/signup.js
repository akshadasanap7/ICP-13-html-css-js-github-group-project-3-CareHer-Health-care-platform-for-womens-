window.onload= function(){
        const savedData = localStorage.getItem("userData");
    const formContainer=document.getElementById("form-container");
    const localStorageTheme=localStorage.getItem("theme");
            if (localStorageTheme === "dark"){
                toggleTheme();
            }
      if(savedData){
        const userData = JSON.parse(savedData);
        formContainer.innerHTML=`<div class="user-info">
     <div class="profile-heading"> 
       <img src="../images/user.jpeg" class="user-profile">Profile
     </div>
     <p><b>Name:</b> ${userData["first-name"]} ${userData["last-name"]}</p>
     <p><b>Age:</b> ${userData["age"]}yrs </p>
     <p><b>Email:</b> ${userData["email"]} </p>
     <p><b>Contact:</b> ${userData["contact"]} </p> 
     <button type="button" class="btn1" onclick="logOut()">Log Out</button>
     </div>    
     </div>`;
      }return;
      
    }


function passwordToggle(){
      const password=document.getElementById("password");
      const imgElement=document.getElementById("eye");            
       if(imgElement.src.includes("hide.png"))
         {
           password.type="text";
           imgElement.src="../images/view.png";             
         }else
             {
              password.type="password";
              imgElement.src="../images/hide.png";
             }
    }
function displayUserProfileAndHideForm(){
    const userInfo=document.getElementById("user-info");
    const firstName=document.getElementById("firstname");
    const lastName=document.getElementById("lastname");
    const email=document.getElementById("email");
    const contact=document.getElementById("phone-number")
    const password=document.getElementById("password");
    const age=document.getElementById("age");
    const formContainer=document.getElementById("form-container");

      const firstNameElement=firstName.value;
      const lastNameElement=lastName.value;
      const emailElement=email.value;
      const contactElement=contact.value;
      const ageElement=age.value;
      const passwordElement=password.value;

      const userData={
        "first-name": firstNameElement,
        "last-name": lastNameElement,
        "age": ageElement,
        "email": emailElement,
        "contact": contactElement,
        "password": passwordElement,
      }
       if(!firstNameElement || !lastNameElement || !emailElement || !contactElement || !ageElement || !passwordElement){
        alert("Please fill the all empty fields before submitting..." );
        return;
       }

       localStorage.setItem("userData", JSON.stringify(userData));

     
     formContainer.innerHTML=`<div class="user-info">
     <div class="profile-heading"> 
       <img src="../images/user.jpeg" class="user-profile">Profile
     </div>
     <p><b>Name:</b> ${userData["first-name"]} ${userData["last-name"]}</p>
     <p><b>Age:</b> ${userData["age"]}yrs </p>
     <p><b>Email:</b> ${userData["email"]} </p>
     <p><b>Contact:</b> ${userData["contact"]} </p> 
     <button type="button" class="btn1" onclick="logOut()">Log Out</button>
     </div>    
     </div>`;
    }
function logOut(){
      window.location.href="login.html";
      } 
function toggleTheme(){
            const toggleBtn=document.getElementById("toggle-btn");
    const body=document.getElementById("body");
    body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerText = "🌙";
  }
}
        function hamburger(){
          const toggleMenu=document.getElementById("toggle-menu-container");
         toggleMenu.classList.toggle("active");
}  