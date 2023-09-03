let crsr = document.querySelector("#cursor")              //- Selecting cursor html element
let blur = document.querySelector("#cursor-blur")              //- Selecting cursor html element

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x-4+"px";
    crsr.style.top = dets.y-4+"px";
    blur.style.left = dets.x-70+"px";
    blur.style.top = dets.y-70+"px";
});     //- dets tracks the position of the mouse

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
        start: "top -25%",
        end: "top -60%",
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
