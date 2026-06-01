window.onload= function(){
            const localStorageTheme=localStorage.getItem("theme");
            if (localStorageTheme === "dark"){
                toggleDark();
            }else{
                toggleLight();
            }
        }

function displayButterflyPoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/butterfly.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <li>Lower Back Relief</li> <li>Improved Posture</li>  
    <li>Organ Stimulation</li>   <li>Better Digestion</li>    
    <li>Enhanced Blood Flow</li>   <li>Stress Relief</li>    
    <li>Emotional Release</li>   <li>Hip Opener</li>
    </div><img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`
    }
function displayKneesToChestPoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/knees to chest pose.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <li>Massages Colon</li> <li>Low Back Stretch</li>  
    <li>Reduces Bloating</li>   <li>Pelvic Stability</li>    
    <li>Neck Release</li>   <li>Stress Relief</li>    
    <li>Calms the Mind</li>   <li>Improves Circulation</li>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displayCobraPoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/cobra pose.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Spinal Strengthening</li> <li>Chest Opening</li> <li>Organ Stimulation</li> <li>Improved Posture</li> <li>Glute Toning</li> <li>Mental Clarity</li> <li>Abdominal Stretch</li> <li>Sciatica Relief</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displayLegUpTheWallPoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/leg up the wall pose.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Lymphatic Drainage</li> <li>Enhanced Blood Flow</li> <li>Reduced Leg Swelling</li> <li>Headache Relief</li> <li>Pelvic Floor Relaxation</li> <li>Deep Relaxation</li> <li>Hamstring Release</li> <li>Better Digestion</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displayCatCowStrechesBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/cat-cow streches.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Spinal Mobility</li> <li>Shoulder Release</li> <li>Breath Coordination</li> <li>Emotional Balance</li> <li>Wrist Strength</li> <li>Neuromuscular Focus</li> <li>Core Toning</li> <li>Stress Relief</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displayReclinedTwistPoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/reclined twist.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Body Detoxification</li> <li>Spinal Rotation</li> <li>Hip Opener</li> <li>Nervous System Reset</li> <li>Chest Stretch</li> <li>Vertebrae Decompression</li> <li>Better Digestion</li> <li>Emotional Release</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
 
function displayOneLeggedKingPiegionBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/one legged king piegion.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Deep Hip Opener</li> <li>Sciatic Nerve Health</li> <li>Emotional Release</li> <li>Groin Flexibility</li> <li>Knee Joint Health</li> <li>Improved Posture</li> <li>Lower Body Power</li> <li>Lower Back Relief</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displaySeatedForwardBendBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/seated forward bend.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Full Back Body Stretch</li> <li>Anxiety Reduction</li> <li>Organ Stimulation</li> <li>Hamstring Health</li> <li>Blood Pressure Support</li> <li>Metabolism Boost</li> <li>Period Pain Relief</li> <li>Kidney Stimulation</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displaySphinxBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/sphinx pose.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Gentle Backbend</li> <li>Shoulder Stability</li> <li>Lung Expansion</li> <li>Abdominal Tone</li> <li>Cervical Spine Health</li> <li>Focus Improvement</li> <li>Sacrum Release</li> <li>Thyroid Stimulation</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displayTreePoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/tree pose.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Balance Improvement</li> <li>Ankle Strength</li> <li>Hip Opener</li> <li>Core Stability</li> <li>Mind-Body Coordination</li> <li>Confidence Boost</li> <li>Leg Toning</li> <li>Improved Posture</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displayTrianglePoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/triangle pose.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Side Body Stretch</li> <li>Hamstring Extension</li> <li>Better Digestion</li> <li>Neck Strengthening</li> <li>Knee Stability</li> <li>Full Body Strength</li> <li>Enhanced Blood Flow</li> <li>Hip Alignment</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
function displayWarriorPoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = `<div class="exe-flashcard"><img src="../images/warrior pose.png" class="exe-flashcard-img">
    <div class="benefits">
    <b>Benefits :</b> 
    <ul> <li>Lower Body Power</li> <li>Stamina & Endurance</li> <li>Shoulder Strength</li> <li>Better Balance</li> <li>Lung Capacity</li> <li>Core Engagement</li> <li>Foot Arch Strength</li> <li>Stress Relief</li> </ul>
    </div> <img src="../images/cancel.png" alt="" class="cancel" onclick="hidePoseBenefits()">`;
    }
    function hidePoseBenefits() {
        const exeInfoContainer = document.getElementById("exe-flashcard-container");
        exeInfoContainer.innerHTML = "";
    }

function toggleTheme(){
            const toggleBtn=document.getElementById("toggle-btn");
            const localStorageTheme=localStorage.getItem("theme");
            if(localStorageTheme === "dark"){
                toggleLight();
                localStorage.setItem("theme","light");
                toggleBtn.innerText="🌙";
            }else{
                toggleDark();
                localStorage.setItem("theme","dark");
                toggleBtn.innerText="☀️";
            }
        }
        function toggleDark(){
            const footer=document.getElementById("footer");
            const heading=document.getElementById("heading");
            const exeCards=document.getElementsByClassName("exe-cards");
         const body=document.getElementById("body");
          const toggleBtn=document.getElementById("toggle-btn");
          const navbar= document.getElementById("navbar"); 
            document.body.style.backgroundColor="#333333";
            body.style.color="white";
            navbar.style.backgroundColor="#121212";
            toggleBtn.style.backgroundColor="#000";
            toggleBtn.style.color="white"; 
             heading.style.color="#fff";
             footer.style.backgroundColor="#121212"; 
            for (let i = 0; i < exeCards.length; i++) {
        exeCards[i].style.color = "white";
        exeCards[i].style.backgroundColor="#262626";
        exeCards[i].style.boxShadow = "0 1px 5px #fff";}          
        }
        function toggleLight(){
            const footer=document.getElementById("footer");
            const heading=document.getElementById("heading");
            const exeCards=document.getElementsByClassName("exe-cards");
           const body=document.getElementById("body");
          const toggleBtn=document.getElementById("toggle-btn");
          const navbar= document.getElementById("navbar");
            body.style.backgroundColor="#fff7fb";
            body.style.color="black";
            navbar.style.backgroundColor="#ffbfec";
            toggleBtn.style.color="#c93779;";
            toggleBtn.style.backgroundColor="#fff";
             footer.style.backgroundColor="#ffe6f2";
        heading.style.color="#c93779"; 
            for (let i = 0; i < exeCards.length; i++) {
        exeCards[i].style.color = "#c93779";
        exeCards[i].style.backgroundColor="#fff";
        exeCards[i].style.boxShadow = "0 1px 5px #f48fb1";}           
        }
function hamburger(){
          const toggleMenu=document.getElementById("toggle-menu-container");
         toggleMenu.classList.toggle("active");
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
