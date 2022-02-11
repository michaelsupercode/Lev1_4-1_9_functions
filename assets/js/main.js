//Lev1_4_hero//

hero = (heroName, heroPower, heroEnemy) => {
    let name = 'Mein Lieblingsheld von Marvel ist ' + heroName;
    let power = 'Er trägt ein ' + heroPower;
    let enemy = 'und sein größter Gegner ist ' + heroEnemy;

    newFunction();

    function newFunction() {
        console.log(name);
        console.log(power);
        console.log(enemy);
    }
}

hero('Ironman', 'Exoskelett', 'er selbst..');

//Lev1_6//

function returnOne() {
    return 1;
}

let x = 1;
let y = returnOne();

if (x === y) {
    console.log('wird das gedruckt??');
}

//Lev1_7//

function calc(undefined) {
    return undefined * 2;
}

console.log(calc(7000));

//Lev1_8//

function getAge(yearBorn) {
    let diff_ms = Date.now() - yearBorn.getTime();
    let age_ms = new Date(diff_ms);
    let age_years = age_ms.getUTCFullYear() - 1970;
    return age_years < 0 ? NaN : age_years;
}

let oBirthDay = new Date(1962, 08, 15);
console.log(getAge(oBirthDay));

//Lev1_9//

function introduction(fName, lName, Birthpl, age, home) {
    console.log('Mein Name ist ' + fName + ' ' + lName + '.');
    console.log('Ich bin in ' + Birthpl + ' geboren.');
    console.log('Ich lerne Coden bei SuperCode.');
    console.log('Ich bin ' + age + ' Jahre alt.');
    console.log('Ich wohne in ' + home + '.');
}

introduction('Baschar', 'Shaheen', 'Syrien', 34, 'Düsseldorf');