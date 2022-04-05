function fractionate(decimal){
    decimal = Math.round((decimal + Number.EPSILON) * 100) / 100

    if(decimal === 0){
        return 'error';
    }

    // Get before and after the decimal point
    decimal = decimal.toString();
    console.log(`This is decimal ${decimal}`)

    
    let before = decimal.split('.')[0];
    let after = decimal.split('.')[1];

    if(after === undefined){
        // We expect it is an integer.
        return before;
    }

    let zeros = after.length;
    let numerator = after;
    let denominator = 10**zeros;

    let times = Math.max(numerator, denominator);

    for(let i = 0; i < times; i++){
        if( numerator % i === 0 & denominator % i === 0){
            numerator = numerator / i;
            denominator = denominator / i;
            times = Math.max(numerator, denominator);
        }
    }

    if(before !== '0'){
        return `${before} ${numerator}/${denominator}`;
    }
    return `${numerator}/${denominator}`
}

module.exports = { fractionate };