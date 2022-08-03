// Code your solutions in this file
writeCards(["Ada", "Brendan", "Ali"], "birthday");
function writeCards(names, event) {
    let arrayOfThanks = [];
    for (let i = 0; i < names.length; i++) {
        arrayOfThanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return arrayOfThanks;
}
function countDown() {
    let counter = 10;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}

countDown();
