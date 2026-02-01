function noDuplicate(array){
    const unique=[];
    for(const item of array){
        if (unique.includes(item)===false){
            unique.push(item);
        }
    }

    return unique;

}

const biryaniKhor=["abul","cabul","babul","abul","babul","dabul"];
const uniqueArray=noDuplicate(biryaniKhor);
console.log(uniqueArray);
