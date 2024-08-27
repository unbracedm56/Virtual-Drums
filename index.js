// function to produce sound
function yo(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHtml);
            break;
    }
}

//to produce sound and animation when button was pressed by mouse
for(i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
        yo(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//to produce sound and animation when button was pressed by keyboard
document.addEventListener("keydown", function(Event){
    var keyPressed = Event.key;
    yo(keyPressed);
    buttonAnimation(keyPressed);
});

//function to show animation
 function buttonAnimation(key){
    var buttonClass = document.querySelector("."+key);
    buttonClass.classList.add("pressed");
    setTimeout(function() {
        buttonClass.classList.remove("pressed");
    }, 100);
 }

 