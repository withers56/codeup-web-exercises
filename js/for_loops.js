function showMultiplicationTable (num){
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
//showMultiplicationTable(7)

function tenRandomNumbers(){
    for (var i = 1; i <= 10; i++){
        let randNum = Math.floor(Math.random() * 180 + 20)
        if (randNum % 2 === 0){
            console.log(randNum + " is even.");
        } else console.log(randNum + " is odd.");
    }
}
 //tenRandomNumbers()

function numberCascade() {
    for (var i = 1; i < 10; i++) {
        var array = [];
        for ( count =1; count <= i; count++) {
            array.push(i);
        }
        console.log(array.join(""));
    }
}

//numberCascade();

function numbersMinusFive(){
    for (i = 100; i > 0; ) {
        console.log(i);
        i = i - 5;
    }
}
//numbersMinusFive()