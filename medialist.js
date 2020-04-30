let files = [{
        file: "Cheapthrills.mp4",
        Name: "Sia Cheap Thrills",
        Artist: "Sia Furler",
        Release: "2016",
        pic: "cheap.jpg"
    },
    {
        file: "closer.mp4",
        Name: "Closer",
        Artist: "Chainsmokers",
        Release: "2016",
        pic: "closer.jfif"
    },
    {
        file: "jabtak.mp4",
        Name: "Jab Tak MS Dhoni",
        Artist: "Armaan Malik",
        Release: "2016",
        pic: "jabtak.jfif"
    },
    {
        file: "NamoNamo.mp4",
        Name: "Namo Namo Ji Shankara",
        Artist: "Amit Trivedi",
        Release: "2018",
        pic: "namo.jfif"

    },
    {
        file: "shapeofyou.mp4",
        Name: "Shape Of You",
        Artist: "Ed Sheeran",
        Release: "2017",
        pic: "shape.jfif"
    },
    {
        file: "somethingJustlike.mp4",
        Name: "Something Just Like this",
        Artist: "Cold Play & The ChainSmokers",
        Release: "2017",
        pic: "something.jfif"
    }


];
let i = 0;
let img = document.querySelector(".card-img-top");
let names = document.querySelector(".card-title");
let details = document.querySelector(".card-text");
let video_player = document.querySelector('#vid');
let next = document.getElementById("playnext");
let prev = document.getElementById("rewind");
next.addEventListener("click", () => {

        if (i === files.length - 1) {
            i = 0;
        } else {
            i++;
        }


        video_player.src = files[i].file;
        names.innerHTML = files[i].Name;
        img.src = files[i].pic;
        details.innerHTML = files[i].Artist + "<br>" + files[i].Release;
    }


)

prev.addEventListener("click", () => {

        if (i === 0) {
            i = files.length - 1;
        } else {
            i--;
        }
        video_player.src = files[i].file;
        names.innerHTML = files[i].Name;
        img.src = files[i].pic;
    }


)