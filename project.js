var gameStyle = false;
var difficulty = -1;

var PvcOptions = document.getElementById("playerVsComputerOptions");
var PvpOptions = document.getElementById("playerVsPlayerOptions");
var PlayButton = document.getElementById("PlayButton");

PvpOptions.style.display = "none";
PvcOptions.style.display = "none";
PlayButton.style.display = "none";

function ShowOptions(style) {
    // true for single player, false for 2 players
    gameStyle = style;
    console.debug(gameStyle);
    if (gameStyle == true) {

        PvcOptions.style.display = "inline-block";
        PvpOptions.style.display = "none";
    } else {
        PvpOptions.style.display = "inline-block";
        PvcOptions.style.display = "none";
    }
}
function ChooseDifficulty(difficulty) {
    if (this.difficulty < 0) { // Only calls when the difficulty hasn't been set!
        PlayButton.style.opacity = 0;
        PlayButton.style.display = "inline-block";
        var opac = 0;
        var anim = setInterval(ShowPlay, 10);

    }
    this.difficulty = difficulty;

    function ShowPlay() {
        opac += .02;
        PlayButton.style.opacity = opac;
        if (opac >= 1) clearInterval(anim);
   } 
}

function Play() {

}