// Declaring ID's
const menu = document.getElementById(`menu`);
const navbar = document.querySelector(`.navbar`);
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const tempBg = document.getElementById("tempbg")
const sta = document.getElementById("status")
const oi = document.getElementById("oi")
const na = document.getElementById("na")
const ad = document.getElementById("ad")



menu.onclick = () => {
 // console.log("click")
  navbar.classList.toggle(`active`);
}

//Scroll Spy 
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});


// Swiper code for Home
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  loop: true,
});


// review 
var swiper = new Swiper(".review-slider", {
  spaceBetween: 25,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }, loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    }
    ,
    1024: {
      slidesPerView: 3
    }
  }
});

//form validation
function valid() {

  let name = document.form.name.value;
  let num = document.form.num.value;
  let add = document.form.add.value;
  let order = document.form.order.value;

  if (name == "") {
    invalid("Name")
  }

  else if (num.length <= 9) {
    invalid("Number")
  }
  else if (add.length <= 10) {
    invalid("Address")
  }
  else if (order.length <= 5) {
    invalid("Order")
  } else {
    orderValid();
  }

}
const invalid = (info) => {
  tempBg.style.display = "flex"
  sta.innerText = "Enter The Correct " + info;
  sta.style.color = "red"

}

const colapse = () => {
  tempBg.style.display = "none"

}
const orderValid = () => {
  tempBg.style.display = "flex"
  sta.innerText = "Order Placed Succesfully!"
  sta.style.color = "black"
}

//End of Code  LOC=127