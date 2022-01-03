function loopThing(){
    let num = 1;
    while (num < 65536){
        num = num * 2;
        console.log(num);
    }
}

// loopThing();

function doWhileLoopThing(){
    let targetSales = (Math.floor(Math.random() * 50 + 50));
    let customerCones = (Math.floor(Math.random() * 5) + 1);
    console.log(targetSales);

    do {
        console.log("*****************************");
        console.log("You have: " + targetSales + " Cones.");
        console.log("Customer wants: " + customerCones + " Cones.");

        if(customerCones <= targetSales) {
            targetSales = targetSales - customerCones;
            console.log("There is: " + targetSales + " Cones left.")
        } else console.log("There isnt enough left to meet that order!");
        customerCones = (Math.floor(Math.random() * 5) + 1);

    }while (targetSales > 0);

    console.log("*****************************")
    console.log("Yay! They have all been sold!");
}

doWhileLoopThing();


//
// console.log("Customer wants " + customerCones + "cones.")
// targetSales = targetSales - customerCones;
// console.log("You have " + targetSales + " cones left.")
