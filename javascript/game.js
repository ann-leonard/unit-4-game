
var images = $(".crystals");
var targetNumber = randRange(19, 120)
var score = 0;
var listMultiples = multiplesOfTargetNumber(targetNumber);
var imageValues = getImgNumbers();
$("#tryAgain").hide();

function reset(){
    targetNumber= randRange(19,120)
    score=0
    listMultiples=multiplesOfTargetNumber(targetNumber)
    imageValues=getImgNumbers();
    $("#tryAgain").hide();
    $("#domTarget").text("Your number is: " + targetNumber)
    $("#domTarget").removeClass("bg-success bg-danger")
    $("#domScore").text("Score: " + score)

}

function randomShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function multiplesOfTargetNumber(n) {
    var multiples = []
    //iterates over every number until targetNumber and checks for multiples
    for (x = 0; x < n; x++) {

        if (n % x === 0) {
            multiples.push(x)
        }
    }

    return multiples
}
// makes a list with 4 elements; three random values and one multiple of target number;
function getImgNumbers() {
    var numbers = [];
    for (i = 0; i < images.length - 1; i++) {
        numbers.push(randRange(2, 19))
    }
    numbers.push(randomChoice(listMultiples))
    numbers = randomShuffle(numbers);
    return numbers
}

function winConditions() {
    if (score === targetNumber) {
        $("#domTarget").addClass("bg-success")
        $("#domTarget").text("You win!")
        imageValues = [0, 0, 0, 0]
        $("#tryAgain").show();

    }
    if (score > targetNumber) {
        $("#domTarget").addClass("bg-danger")
        $("#domTarget").text("You lose :(")
        imageValues = [0, 0, 0, 0]
        $("#tryAgain").show();

    }
}

$("#domTarget").text("Your number is: " + targetNumber)

$(images[0]).on("click", function () {
    score += imageValues[0]
    console.log(score)
    $("#domScore").text("Score: " + score)
    winConditions()
})

$(images[1]).on("click", function () {
    score += imageValues[1]
    console.log(score)
    $("#domScore").text("Score: " + score)
    winConditions()
})

$(images[2]).on("click", function () {
    score += imageValues[2]
    console.log(score)
    $("#domScore").text("Score: " + score)
    winConditions()
})

$(images[3]).on("click", function () {
    score += imageValues[3]
    console.log(score)
    $("#domScore").text("Score: " + score)
    winConditions()
})

$("#tryAgain").on("click", function(){
    reset();
})