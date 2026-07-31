let buttonsArray = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = [];
let level = 0
let levelLabel = "Level " + level
let chosenColor = "";
let green = $(".green")
let red = $(".red")
let yellow = $(".yellow")
let blue = $(".blue")

function handler() {
    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    setTimeout(() => {
    $(`.${userChosenColor}`).removeClass("pressed");    
    },100);
    checkAnswer((userClickedPattern.length)-1)

    
}
$(".btn").on("click", handler);
function playSound(color) {
        new Audio(`sounds/${color}.mp3`).play();   
}
function animatePress(currentColor) {
    $(`.${currentColor}`).addClass("pressed")
    
}
document.addEventListener("keydown",function () {
    if (level===0){
        nextSequence();
    }
})
function nextSequence() {
    userClickedPattern=[]
    let rand = Math.ceil(Math.random() * 4)
    level = level+1;
    levelLabel = "Level " + level
    $("h1").html(levelLabel);

    switch (rand) {
        case 1:
            chosenColor = "red"
            red.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            new Audio("sounds/red.mp3").play();
            break;
        case 2:
            chosenColor = "blue"
            blue.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            new Audio("sounds/blue.mp3").play();
            break;
        case 3:
            chosenColor = "green"
            green.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            new Audio("sounds/green.mp3").play();
            break;
        case 4:
            chosenColor = "yellow"
            yellow.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            new Audio("sounds/yellow.mp3").play();
            break;
        default:
            break;
    }

    gamePattern.push(chosenColor);
}
function startOver() {
gamePattern = [];
userClickedPattern = [];
level = 0
}
function checkAnswer(level){
    
        if(gamePattern[level]===userClickedPattern[level]){
            
            if(gamePattern.length===userClickedPattern.length){
                setTimeout(() => {
                    nextSequence();
                }, 1000);
            }
        }
     else{
        new Audio("sounds/wrong.mp3").play()
        document.body.setAttribute("class","game-over")
        setTimeout(() => {
        document.body.removeAttribute("class","game-over")

        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();

    }
}
