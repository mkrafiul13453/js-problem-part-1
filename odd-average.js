function oddAvarage(numbers){

    let count=0;
    for(let number of numbers){
        
        if(number % 2 ==1){
            count+=number;
        }
    }
    return count;
}

const numbers=[12,13,14,15,16,17,18,19,20];
const sum =oddAvarage(numbers);
console.log("The summation is:", sum);