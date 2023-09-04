let crsr = document.querySelector("#cursor")              //- Selecting cursor html element
let blur = document.querySelector("#cursor-blur")              //- Selecting cursor html element

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x-4+"px";
    crsr.style.top = dets.y-4+"px";
    blur.style.left = dets.x-70+"px";
    blur.style.top = dets.y-70+"px";
});     //- dets tracks the position of the mouse

//+ Cursor modifications when entering and leaving h4
var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.transform = "scale(2.5)";
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function() {
        crsr.style.transform = "scale(1)";
        crsr.style.border = "0px solid #fff";
        crsr.style.backgroundColor = "#95c11e";
    });
});


gsap.to("#nav", {
    backgroundColor: "rgba(0,0,0,0.75)",
    duration: 0.5,
    height:"6.5vh",
    fontSize: "1.25vw",
    scrollTrigger: {
        trigger:"#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers: true,
        start: "top 5%",
        end: "top -50%",
        scrub: 2,
    }
})

// Get all card elements
const cards = document.querySelectorAll('.card');

// Add mousemove event to each card
cards.forEach((card) => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element

        const tiltX = (y / rect.height - 0.5) * 40;
        const tiltY = -(x / rect.width - 0.5) * 30;

        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

  // Reset the transform when mouse leaves
    card.addEventListener('mouseleave', function() {
        card.style.transform = '';
    });
});

//+ gsap.from("element_name",{dictionary of animations needed})

gsap.from("#about-us img, #about-us-inside",{
    y:90,
    scale: 0.9,
    opacity: 50,
    duration: 1,
    stagger: {
        amount: 1,
        from: "center",
        ease: "power1.inOut"
    },
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start:"top 75%",
        end: "top 65%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start:"top 70%",
        end: "top 65%",
        scrub:1
    }
})

gsap.from("#quote1",{
    y: -90,
    x:-70,
    scrollTrigger:{
        trigger: "#quote1",
        scroller: "body",
        start:"top 70%",
        end:"top 60%",
        scrub:2,
        // markers: true,
}}
)

gsap.from("#quote2",{
    y: 90,
    x: 70,
    scrollTrigger:{
        trigger: "#quote2",
        scroller: "body",
        start:"top 95%",
        end:"top 85%",
        scrub:2,
        // markers: true,
}}
)

gsap.from("#page4 h1", {
    y:100,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        start:"top 99%",
        end:"top 80%",
        scrub:2,
    }
})