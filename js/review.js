window.onload= function(){
        const container = document.getElementById("container");
        const savedData = localStorage.getItem("reviewData");
     const reviews = document.getElementById("review-card-container");
     const localStorageTheme=localStorage.getItem("theme");
            if (localStorageTheme === "dark"){
                toggleTheme();
            }
      if(savedData){
        container.innerHTML="";
        const reviewData = JSON.parse(savedData);
        reviews.innerHTML+=`<div class="review-card">
        <div class="date">Date:${reviewData.date}</div>
        <div class="card-name">
            Name:${reviewData.name}
        </div>
        Rating:
        <div class="card-rating">
           ${reviewData.stars} 
        </div>
        <div class="card-comment">
            comment:<br>${reviewData.comment}
        </div>
        <button class="btn-delete" onclick="displayFormDeleteReview()">delete</button>
    </div>`;
      }return;
}


function submitForm(){
        const container = document.getElementById("container");
        const reviews = document.getElementById("review-card-container");
      const name=document.getElementById("name").value;
      const date=document.getElementById("date").value;
      const rating = document.querySelector('input[name="rating"]:checked')?.value || 0;
      const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
      const comment=document.getElementById("comments").value;

      const reviewData={
        "name":name,"date":date,"stars":stars,"comment":comment};
        if(!name || !date || !rating){
        alert("Please fill the all empty fields before submitting..." );
        return;
       }

      localStorage.setItem("reviewData", JSON.stringify(reviewData));
      container.innerHTML="";
      reviews.innerHTML+=`<div class="review-card" id="review-card">
        <div class="date">Date:${reviewData.date}</div>
        <div class="card-name">
            Name:${reviewData.name}
        </div>
        Rating:
        <div class="card-rating">
           ${reviewData.stars} 
        </div>
        <div class="card-comment">
            comment:<br>${reviewData.comment}
        </div>
        <button class="btn-delete" onclick="displayFormDeleteReview()">delete</button>
    </div>`;       
}
function displayFormDeleteReview(){
        const reviews = document.getElementById("review-card-container");
        reviews.innerHTML="";
        localStorage.removeItem("reviewData");
      location.reload();
}
function updateClock() {
    const dateSpan = document.getElementById("dateSpan");
    const timeSpan = document.getElementById("timeSpan");
    const now = new Date();

   dateSpan.innerText = now.toDateString();
   timeSpan.innerText = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

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