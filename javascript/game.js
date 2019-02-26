
var images = $(".crystals");
var targetNumber = Math.floor(Math.random() * (120 - 19) + 19)
var imageNumbers = [];
var score = 0;
var listMultiples;



function multiplesOfTargetNumber(targetNumber){
    listMultiples = []
    for (x=0; x<targetNumber;x++){
        if (targetNumber % x === 0){
            listMultiples.push(x)}
    break
    }
    if (listMultiples >= 4){
        listMultiples = imageNumbers;
    
    if (imageNumbers > 4){
            imageNumbers.pop();
        }

    }
   

return listMultiples
}



$(images[0]).on("click",function(){
    score += imageNumbers[0]
})


console.log(targetNumber)
console.log(listMultiples)
console.log(score)
multiplesOfTargetNumber(targetNumber);