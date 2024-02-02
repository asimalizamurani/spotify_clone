let cards = document.querySelectorAll(".card");
let playIcon = document.querySelectorAll(".play-icon");

cards.forEach((card) => {
    card.addEventListener("mouseenter", function(md) {
       playIcon.forEach((icon) => {
        // icon.style.opacity = 1;
        icon.addEventListener("mouseenter", () => {
            icon.style.opacity = 1;
        //     op.style.opacity = 1;
        })
        
       })  
    })
})

cards.forEach((card) => {
    card.addEventListener("mouseleave", function(md) {
       playIcon.forEach((icon) => {
        icon.style.opacity = 0;
       })  
    })
})


