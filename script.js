/* =========================
script.js (PART 1)
========================= */

// Pages
const pages = document.querySelectorAll(".page");

function nextPage(pageNo){

pages.forEach(page=>{
page.classList.remove("active");
});

document
.getElementById("page"+pageNo)
.classList.add("active");

window.scrollTo({
top:0,
behavior:"smooth"
});

}

// Music

const song=document.getElementById("song");

function playMusic(){

song.play();

}

// Photo Slider

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function showSlide(index){

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

function prevSlide(){

currentSlide--;

if(currentSlide<0){

currentSlide=slides.length-1;

}

showSlide(currentSlide);

}
/* =========================
script.js (PART 2)
========================= */

// Auto Photo Slider
setInterval(() => {
    nextSlide();
}, 3000);

// ❤️ Heart Rain
const heartContainer = document.querySelector(".heart-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// New heart every 350ms
setInterval(createHeart, 350);

// First slide
showSlide(currentSlide);

// Show first page on load
document.getElementById("page1").classList.add("active");

// Optional: Enter key moves to next page
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const active = document.querySelector(".page.active");
        const id = Number(active.id.replace("page", ""));
        if (id < 4) {
            nextPage(id + 1);
        }
    }
});

/* ===== PART 2 me Heart Rain + Auto Slider ===== */
