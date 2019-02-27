
var images = $(".crystals");
var targetNumber = randRange(19,120)
var imageNumbers = [];
var score = 0;
var listMultiples=multiplesOfTargetNumber(targetNumber);

var image_index=[0,1,2,3]
 
function assignImageNumbers(list){
    randomizedImageIndex=[]
    for (x=0;x<images.length;x++){
        random_index=randRange(0,list.length)
        randomizedImageIndex.push(list[random_index])
        list.pop(random_index)
    }
    return randomizedImageIndex
}
function randRange(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}




function multiplesOfTargetNumber(n){
   var multiples = []
    //iterates over every number until targetNumber
    for (x=0; x<n;x++){ 

        if (n % x === 0){
            multiples.push(x)}
    }
    //if (listMultiples >= 4){
     //   listMultiples = imageNumbers;
    
    //if (imageNumbers > 4){
    //       imageNumbers.pop();
    //    }
    //}
    return multiples
}



$(images[0]).on("click",function(){
    score += imageNumbers[0]
})


