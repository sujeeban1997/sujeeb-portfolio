
/******************************************************************************
  Page loading animation
 ******************************************************************************/
  document.addEventListener("DOMContentLoaded", function() {
    const counter3 = document.querySelector(".counter-3");

    for (let i = 0; i < 2; i++) {
        for(let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut",
        });
    }

    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {
    top: "-150px",
    stagger: {
        amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut",
});

gsap.from(".loader-1", {
    width: 0,
    duration: 6,
    ease: "power2,inOut"
});

gsap.from(".loader-2", {
    width: 0,
    delay: 1.9,
    duration: 2,
    ease: "power2,inOut"
});

gsap.to(".loader", {
    backgroud: "none",
    delay: 6,
    duration: 0.1,
});

gsap.to(".loader-1", {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6,
});

gsap.to(".loader-2", {
    x: -75,
    y: 75,
    duration: 0.5,
},
"<"
);

gsap.to(".loader", {
    scale: 40,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
});

gsap.to(".loader", {
    rotate: 45,
    y: 500,
    x: 2000,
    duration: 1,
    delay: 7,
    ease: "power2.inOut",
});

gsap.to(".loading-screen", {
    opacity: 0,
    duration: 0.5,
    delay: 7.5,
    ease: "power1.inOut",
});

gsap.to(".h1", 1.5, {
    delay: 7,
    y: -80,
    ease: "power4.inOut",
    stagger: {
        amount: 0.1,
    }
}); 





/******************************************************************************
  Navbar add class function
 ******************************************************************************/
$(window).scroll(function(){
          if(this.scrollY > 20){
              $('.navbar').addClass("sticky");
          }else{
              $('.navbar').removeClass("sticky");
          }
          if(this.scrollY > 500){
              $('.scroll-up-btn').addClass("show");
          }else {
              $('.scroll-up-btn').removeClass("show");
  
          }
      });

/******************************************************************************
  Bottom to top
 ******************************************************************************/
$('.scroll-up-btn').click(function(){
          $('html').animate({scrollTop: 0});
      });
  

/******************************************************************************
  Typing animation scrippts 
 ******************************************************************************/
 var typed = new Typed(".mybio", {
    strings: ["Youtuber" , "Developer" , "Designer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
});

 
/******************************************************************************
  Owl carousel for testimonial section 
 ******************************************************************************/
        $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          autoplayTimeout: 5000,
          smartSpeed:1000,
          autoplay: false,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });


/******************************************************************************
  Background Water ripple section 
 ******************************************************************************/
      $(document).ready(function(){
	    $(".bg-image").ripples({
        resolution: 200,
        perturbance: .04,
    });
    });


/******************************************************************************
  Smooth moving section 
 ******************************************************************************/

    window.addEventListener('scroll', animationsectionsm);

    function animationsectionsm(){
        var animationsectionsmm = document.querySelectorAll('.animation-section-sm');

        for(var i = 0; i < animationsectionsmm.length; i++){

            var windowheight = window.innerHeight;
            var animationtop = animationsectionsmm[i].getBoundingClientRect().top;
            var animationpoint = 150;

            if(animationtop < windowheight - animationpoint) {
                animationsectionsmm[i].classList.add('active');
            }
            else{
                animationsectionsmm[i].classList.remove('active');
            }
        }
    }


    
/******************************************************************************
  Landing page animation section 
 ******************************************************************************/
    TweenMax.from(".landing-page-animation", 2, {
        delay: 1.2,
        opacity: 0,
        y: -50,
        ease: Expo.easeInOut
    })

    TweenMax.from(".logo", 2, {
        delay: 0.5,
        opacity: 0,
        y: -50,
        ease: Expo.easeInOut
    })


    /******************************************************************************
  Text reveal section 
 ******************************************************************************/
   
let typeSplit;
// Split the text up
function runSplit() {
  typeSplit = new SplitType(".about-text-reveal", {
    types: "lines, words"
  });
  $(".word").append("<div class='line-mask'></div>");
  createAnimation();
}

runSplit();

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Create staggered animation
function createAnimation() {
  let allMasks = $(".word").map(function() {
    return $(this).find(".line-mask");
  }).get();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-text-reveal",
      start: "top 40%",
      end: "top 10%",
      scrub: 1,
      toggleActions: 'play play reverse reverse'
    }
  });

  tl.to(allMasks, {
    width: "0%",
    duration: 0.5,
    stagger: 0.5
  });
}





  /******************************************************************************
  Text glow effect section 
 ******************************************************************************/

  var pos = document.documentElement;
  pos.addEventListener('mousemove', e =>{
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
  })



  const text = document.querySelector(".circle-text");
    text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");





    $(window).scroll(function() {
  
        // selectors
        var $window = $(window),
            $body = $('body'),
            $panel = $('.panel');
        
        // Change 33% earlier than scroll position so colour is there when you arrive.
        var scroll = $window.scrollTop() + ($window.height() / 3);
       
        $panel.each(function () {
          var $this = $(this);
          
          // if position is within range of this panel.
          // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
          // Remember we set the scroll to 33% earlier in scroll var.
          if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                
            // Remove all classes on body with color-
            $body.removeClass(function (index, css) {
              return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
            });
             
            // Add class of currently active div
            $body.addClass('color-' + $(this).data('color'));
          }
        });    
        
      }).scroll();