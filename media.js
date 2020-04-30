let video = document.querySelector('#vid');
let pla = document.querySelector('#play');

let inc = document.querySelector("#increase");
let dec = document.querySelector("#decrease");
let mute = document.querySelector('#mute')


inc.addEventListener("click", () => {
    video.volume += 0.1;
})

mute.addEventListener("click", () => {


    if (video.volume == 0) {
        video.volume = 0.5;
        mute.innerHTML = "<h3>&#128264;</h3>"

    } else {
        video.volume = 0;
        mute.innerHTML = "<h3>&#128263;</h3>"


    }


});



dec.addEventListener("click", () => {
    video.volume += -.1;


})






pla.addEventListener("click", () => {

    if (video.paused == true) {
        video.play();
        pla.innerHTML = "<h3>&#9208;</h3>";

    } else {
        video.pause();
        pla.innerHTML = "<h3>&#9205;</h3>";

    }


})