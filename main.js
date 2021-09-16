canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 100;
background_image = "https://upload.wikimedia.org/wikipedia/commons/d/dc/PIA17944-MarsCuriosityRover-AfterCrossingDingoGapSanddune-20140209.jpg";
rover_image = "Rover.png";
rover_x = 10;
rover_y = 10;
function add() {
    backgroundImage_tag = new Image();
    backgroundImage_tag.onload = uploadBackground;
    backgroundImage_tag.src = background_image;

    roverImage_tag = new Image();
    roverImage_tag.onload = uploadRover;
    roverImage_tag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImage_tag, 0,0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImage_tag, rover_x,rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        up();
    }

    if (keyPressed == "39") {
        right();
    }

    if (keyPressed == "37") {
        left();
    }

    if (keyPressed == "40") {
        down();
    }

}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y-10;
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rover_y <= 400) {
        rover_y = rover_y+10;
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x-10;
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x+10;
        uploadBackground();
        uploadRover();
    }
}