function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const shovoHight=inchToFeet(75);
console.log("The hight is:",shovoHight);







function inchToFeet2(inch){
    const feetFraction=inch/12;
    const feetNumber=parseInt(feetFraction);
    const inchRemaining=inch%12;
    const result = feetNumber+" fit "+inchRemaining+" inch ";
    return result;
}
const shovoHight2=inchToFeet2(75);
console.log("The hight is:",shovoHight2);









