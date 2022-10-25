const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

const links = document.querySelectorAll(".nav__link")

const burgerBtn = document.querySelector(".nav__btn");


links.forEach(link=>{
  link.addEventListener("click",function(){
       nav.classList.remove("active")
  })
})

burgerBtn.addEventListener("click", function () {
  console.log("ok");
  nav.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  let top = window.scrollY;

  if (top > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

//gallery

const btns = document.querySelectorAll(".gallery__btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    btns.forEach((btn) => {
      btn.classList.add("btn--white");
    });
    const target = e.target.textContent;
    e.target.classList.remove("btn--white");
    showImages(target);
  });
});

function showImages(target) {
  const images = document.querySelectorAll(".gallery__img-box");

  images.forEach((img) => {
    const imgTarget = img.dataset.target;
    console.log(imgTarget);
    if (target === "all") {
      img.style.display = "block";
    } else {
      if (target === imgTarget) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    }
  });
}

//counter

const counters = document.querySelectorAll(".counter__amount");
let count = true;
window.addEventListener("scroll", function () {
  if (scrollY >= document.querySelector(".counter").offsetTop - 400) {
    startCount();
  }
});

function startCount() {
  if (count) {
    count = false;

    counters.forEach((counter) => {
      const goal = counter.dataset.goal;
      const increment = 100 / goal;
      const interval = setInterval(function () {
        counter.innerText++;
        if (counter.innerText == goal) {
          clearInterval(interval);
        }
      }, increment);
    });
  }
}
