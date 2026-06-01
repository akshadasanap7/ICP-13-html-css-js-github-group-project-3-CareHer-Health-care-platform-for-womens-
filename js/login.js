function login(){
       const email1=document.getElementById("email").value;
       const pass=document.getElementById("pass").value;
       const savedData = localStorage.getItem("userData");
       const userData = JSON.parse(savedData);
    const email = userData.email;
    const password = userData.password;
         if (!email1 || !pass) {
            alert("before submitting fill all inputs");
            return;          
         }
 if(email1==email && pass==password){
    window.location.href="signup.html";
 }else{
    alert("email or password is incorrect..!");
 }
}
function passwordToggle(){
      const pass=document.getElementById("pass");
      const imgElement=document.getElementById("eye");            
       if(imgElement.src.includes("hide.png"))
         {
           pass.type="text";
           imgElement.src="../images/view.png";             
         }else
             {
              pass.type="password";
              imgElement.src="../images/hide.png";
             }
    }
function emptyUserData(){
      localStorage.removeItem("userData");
      location.reload();
   }
window.onload= function(){
            const localStorageTheme=localStorage.getItem("theme");
            if (localStorageTheme === "dark"){
                toggleTheme();
            }
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
        
