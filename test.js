function getX(a,b,c){
    let b1 = b * -1;

    /*
    console.log(b**2);
    console.log(-4 * a * c);
    */

    let semi = Math.sqrt(b**2 -4 * a * c);

    let result = [];


    result.push((b1 + semi) / (2 * a));
    result.push((b1 - semi) / (2 * a));
    
    if(result.includes(NaN)){
        return 'Not a valid equation';
    }
    return result;
}

console.log(getX(9,12,-4)) 