let cards = document.querySelectorAll(".card");
let playIcon = document.querySelectorAll(".play-icon");

cards.forEach((card) => {
    card.addEventListener('click', () => {
        console.log("clicked bro");
        card.classList.remove('play-icon');
    })
})