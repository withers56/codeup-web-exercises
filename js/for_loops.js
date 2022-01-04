function showMultiplicationTable (num){
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
//showMultiplicationTable(12)

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
        for ( let count = 1; count <= i; count++) {
            array.push(i);
        }
        console.log(array.join(""));
    }
}

//numberCascade();

function numbersMinusFive(){
    for (let i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}
//numbersMinusFive()