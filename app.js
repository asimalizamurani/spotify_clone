let cards = document.querySelectorAll(".card");
let playIcon = document.querySelectorAll(".play-icon");
let container = document.querySelector('.container');
let cursor = document.querySelector('.cursor');
let leftSection = document.querySelector('.left-section');
let moveImg = document.querySelector('.moveImg');
let songs = document.querySelectorAll('.song');
let phoneMenuBar = document.querySelector('.phone-menu');
let menu = document.querySelector('#menu');
let closeMenu = document.querySelector('.close-btn');

cards.forEach((card) => {

    // console.log(card.childNodes[3]);
    card.addEventListener("mouseenter", function() {
    //    playIcon.forEach((icon) => {
    //     icon.addEventListener("mouseenter", () => {
    //         icon.style.opacity = 1;
    //         icon.style.bottom =" 100px";
    //     })
        
    //    })  
    card.childNodes[3].style.opacity = 1;
    card.childNodes[3].style.bottom = "110px";

    })
})

// cards.forEach((card) => {
//     card.addEventListener("click", function() {
//         console.log("Hello");
//     })
// })

cards.forEach((card) => {
    card.addEventListener("mouseleave", function() {
       playIcon.forEach((icon) => {
        card.childNodes[3].style.opacity = 0;
    card.childNodes[3].style.bottom = "90px";
       });  
    });
});


// container.addEventListener("mousemove", function(de) {
//     cursor.style.left = de.x+ "px";
//     cursor.style.top = de.y+ "px";
// });

// container.addEventListener("mouseenter", function(de) {
//     cursor.style.opacity = 1;
//     cursor.style.scale = 1;
// });

// container.addEventListener("mouseleave", function(de) {
//     cursor.style.opacity = 0;
//     cursor.style.scale = 0;
// });

// leftSection.addEventListener("mouseenter", function() {
//     cursor.style.backgroundColor = "lightseagreen";
// });

// leftSection.addEventListener("mouseleave", function() {
//     cursor.style.backgroundColor = "orangered";
// });

songs.forEach(function(val) {

    // console.log(val.childNodes[3]);
    val.addEventListener("mousemove", function(mg) {
        val.childNodes[3].style.left = mg.x+ "px";
        val.childNodes[3].style.top = mg.y+ "px";
    })

    val.addEventListener("mouseenter", function() {
        val.childNodes[3].style.opacity = 1;
        val.childNodes[3].style.scale = 1;
    })

    val.addEventListener("mouseleave", function() {
        val.childNodes[3].style.opacity = 0;
        val.childNodes[3].style.scale = 0;
    });
});

menu.addEventListener("click", function() {
    phoneMenuBar.style.display = "block";
    // console.log("clicked")
})

closeMenu.addEventListener("click", function() {
    phoneMenuBar.style.display = "none";
})