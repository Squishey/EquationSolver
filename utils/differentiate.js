function differentiate(arr1, arr2){
    console.log(arr1.length, arr2.length);

    let res = []

    for(let i = 0; i < arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            res.push(arr1[i]);
            // console.log(arr1[i])
        }
    }
    console.log(res);

    /*

    for(let i = 0; i < Math.max(arr1.length, arr2.length); i++){
        if(arr1[i] !== arr2[i]){
            console.log(arr1[i] + arr2[i]);
        }
    }
    */
}

module.exports = { differentiate };