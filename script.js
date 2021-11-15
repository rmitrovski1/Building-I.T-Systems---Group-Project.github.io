// STICKY NAVBAR //
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function() {
  var footer = document.querySelector("footer");
  footer.classList.toggle("sticky", window.scrollY > 0);
})

// RESPONSIVE NAVBAR //
const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const navbarList = document.querySelectorAll('.navbar li');

  hamburger.addEventListener("click", () => {

    // ACTIVATE BURGER MENU //
    navbar.classList.toggle("nav-active");

    // NAVBAR LINK ANIMATION //
    navbarList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinksFade 0.5s ease forwards ${index / 7 + 20}s';
      }
    });

    // HAMBURGER ANIMATION //
    hamburger.classList.toggle("toggle");

  });
}

navSlide();

// SCROLL TO TOP BUTTON //
window.addEventListener("scroll", function() {
  var scroll = document.querySelector(".scroll-Top")
  scroll.classList.toggle("active2", window.scrollY > 400)
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

// HOMEPAGE //
// HOMEPAGE SLIDER //
var slides = document.querySelectorAll(".homepage_slides");
var btns = document.querySelectorAll(".btn");

let activeSlide = 1;

// BUTTON (MANUAL) NAVIGATION //
var btnNav = function(manual) {
  slides.forEach((homepage_slides) => {
    homepage_slides.classList.remove("active1");

    btns.forEach((btn) => {
      btn.classList.remove("active1");
    });
  });

  slides[manual].classList.add("active1");
  btns[manual].classList.add("active1");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btnNav(i);
    activeSlide = i;
  });
});

// AUTOPLAY NAVIGATION //
var cycle = function(activeClass) {
  let active = document.getElementsByClassName("active1");
  let i = 1;

  var cycler = () => {
    setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove("active1");
        });

      slides[i].classList.add("active1");
      btns[i].classList.add("active1");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      cycler();
    }, 5000);
    }
    cycler();
  }
  cycle();

// GALLERY AND REVIEWS //*/
// SCROLL DOWN BUTTON //
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});

// GALLERY SLIDER //
document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    animationTimingFunc: "ease-in-out",
    gap: 200,
    perView: 3
  }).mount();

  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");

  let background = document.querySelector(".background");
  let indexes = document.querySelectorAll(".index");

  let backImage = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

  let currentIndex = 0;

  indexes.forEach(index => index.classList.remove("active"));
  indexes[currentIndex].classList.add("active");

  var myAnimation = new hoverEffect ({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1920 / 1280,
    image1: `images/gallery/${backImage[0]}`,
    image2: `images/gallery/${backImage[1]}`,
    displacementImage: "images/gallery/imagedistort.jpg",
    hover: false
  });

  var myAnimation2 = new hoverEffect ({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1920 / 1280,
    image1: `images/gallery/${backImage[1]}`,
    image2: `images/gallery/${backImage[2]}`,
    displacementImage: "images/gallery/imagedistort.jpg",
    hover: false
  });

  var myAnimation3 = new hoverEffect ({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1920 / 1280,
    image1: `images/gallery/${backImage[2]}`,
    image2: `images/gallery/${backImage[3]}`,
    displacementImage: "images/gallery/imagedistort.jpg",
    hover: false
  });

  var myAnimation4 = new hoverEffect ({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1920 / 1280,
    image1: `images/gallery/${backImage[3]}`,
    image2: `images/gallery/${backImage[4]}`,
    displacementImage: "images/gallery/imagedistort.jpg",
    hover: false
  });

  var myAnimation5 = new hoverEffect ({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1920 / 1280,
    image1: `images/gallery/${backImage[4]}`,
    image2: `images/gallery/${backImage[5]}`,
    displacementImage: "images/gallery/imagedistort.jpg",
    hover: false
  });

  var myAnimation6 = new hoverEffect ({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1920 / 1280,
    image1: `images/gallery/${backImage[5]}`,
    image2: `images/gallery/${backImage[0]}`,
    displacementImage: "images/gallery/imagedistort.jpg",
    hover: false
  });

  let backgroundDistort = [
    myAnimation,
    myAnimation2,
    myAnimation3,
    myAnimation4,
    myAnimation5,
    myAnimation6
  ];

  function nextImageDistort() {
    let prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 6;
    indexes.forEach(index => index.classList.remove("active"));
    indexes[currentIndex].classList.add("active");
    backgroundDistort[prevIndex].next();
    displayTextAnimation("next");
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.appendChild(canvas[0]);
      backgroundDistort[prevIndex].previous();
    }, 1200);
  }

  function prevImageDistort() {
    currentIndex = currentIndex - 1 < 0 ? 5 : currentIndex - 1;
    indexes.forEach(index => index.classList.remove("active"));
    indexes[currentIndex].classList.add("active");
    backgroundDistort[currentIndex].next();
    displayTextAnimation("prev");
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.insertBefore(canvas[canvas.length - 1], background.firstChild);
      backgroundDistort[currentIndex].previous();
    }, 500);
  }

  nextBtn.addEventListener("click", () => {
    nextImageDistort();
  });

  prevBtn.addEventListener("click", () => {
    prevImageDistort();
  });

  let slider_titleDistort = 0;
  let slider_reviewDistort = 0;

  function displayTextAnimation(direction) {
    if (slider_titleDistort === 0 && direction === "prev") {
      slider_titleDistort = -900;
    } else if (slider_titleDistort === -900 && direction === "next") {
      slider_titleDistort = 0;
    } else {
      slider_titleDistort =
        direction === "next"
        ? slider_titleDistort - 180
        : slider_titleDistort + 180;
    }

    if (slider_reviewDistort === 0 && direction === "prev") {
      slider_reviewDistort = -350;
    }
    else if(slider_reviewDistort === -350 && direction === "next") {
      slider_reviewDistort = 0;
    }
    else {
      slider_reviewDistort =
        direction === "next"
          ? slider_reviewDistort - 70
          : slider_reviewDistort + 70;
    }

    let title = document.querySelectorAll("#gallery_slider_title h4");
    let review = document.querySelectorAll("#gallery_slider_review p");

    title.forEach(title => {
      TweenMax.to(title, 1, {
        top: `${slider_titleDistort}px`,
        ease: Strong.easeInOut
      });
    });

    review.forEach((review, index) => {
      let opacity = 0;
      if(index === currentIndex){
        opacity = 1;
      }else {
        opacity = 0;
      }
      TweenMax.to(review, 1, {
        top: `${slider_reviewDistort}px`,
        ease: Strong.easeInOut,
        opacity: opacity
      });
    })
  }
});

// LOCATIONS //
function getmap(whichmap){
 console.log(whichmap)
 var map = new GMaps({
   el: '#map',
   zoom: 11,
   lat: -37.83322483317752,
   lng: 145.02020020389205
});


if(whichmap == 0 || whichmap == 1){
 map.addMarker({
   lat: -37.885834,
   lng: 145.082504,
   title: 'Chadstone Store',
   details: {
     database_id: 42,
     author: 'George'
   },

   mouseover: function(e){
     if(console.log)
       console.log(e);
   },

   infoWindow: {
       content: '<p>Chadstone Store</p>'
     }

});
}
if (whichmap == 0 || whichmap == 2) {
 map.addMarker({
   lat: -37.809811,
   lng: 144.965195,
   title: 'Melbourne CBD Store',
   details: {
     database_id: 42,
     author: 'George'
   },

   mouseover: function(e){
     if(console.log)
       console.log(e);
   },

   infoWindow: {
       content: '<b>Melbourne CBD Store</b><br><i>everything is fine</i>'
     }

});
}

map.addControl({
   position: 'top_right',
   content: 'Geolocate',
   style: {
     margin: '5px',
     padding: '1px 6px',
     border: 'solid 1px #717B87',
     background: '#fff'
   },
   events: {
     click: function(){
       GMaps.geolocate({
         success: function(position){
           map.setCenter(position.coords.latitude, position.coords.longitude);
         },
         error: function(error){
           alert('Geolocation failed: ' + error.message);
         },
         not_supported: function(){
           alert("Your browser does not support geolocation");
         }
       });
     }
   }
 });

}
