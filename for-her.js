const envelope = document.querySelector('.envelop-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

function moveRandomel(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomel(e.target);
})