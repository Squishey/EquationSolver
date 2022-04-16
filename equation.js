const { fractionate } = require("./utils/fractionate");
const { differentiate } = require('./utils/differentiate');

class Equation{
    constructor(equation, options = { fractionate: false }){
        this.entry = equation.replace(/\s/g,'');
        this.translated = false;
        this.fractionate = options.fractionate;
    }

    translate(){
        if(!this.translated){
            this.translated = true;
            console.log(this.entry);

            if(this.entry.includes('=')){
                let separateEqual = this.entry.split('=');
                let firstPart = separateEqual[0];
                let secondPart = separateEqual[1];

                // Replace + with - and so on
                secondPart = secondPart.replaceAll('+', '&');
                secondPart = secondPart.replaceAll('-', '+');

                this.entry = firstPart + secondPart.replaceAll('&', '-');
            }

            let factorArray = this.entry.split(/(\+|\-)/g);
            // console.log(`Array: ${factorArray}`);

            let memory = [];
            let thingy = []

            for(let i = 0; i < factorArray.length; i++){
                if( factorArray[i].includes('+') || factorArray[i].includes('-') ){
                    if(!memory.includes(factorArray[i])){
                        // console.log(memory.includes(factorArray[i]))
                        
                        let sign = factorArray[i];
                        let number = factorArray[i + 1];
    
                        memory.push(sign + number);
                        // console.log(`Sign: ${sign}, Number: ${number}`);

                        
                        thingy.push(sign + number);
                       // factorArray.splice(i, 2);
                    }
                }
            }

            console.log(thingy);

            if(thingy.length !== 3){
                // Expected to be a trinomial 
                console.log('An error has ocurred! Check your syntax.');
                process.exit();
            }

            for(let i = 0; i < 3; i++){
                if(thingy[i].includes('^')){
                    let noExponent = thingy[i].split('^')[0];
                    let number = noExponent.match(/\d+/g);
                    if(number === null){
                        // Expecting the string only has a variable
                        // so squared value is automatically 1
                        if(noExponent.includes('-')){
                            this.squared = -1;
                        }else{ this.squared = 1; }
                    }
                    else{
                        number = parseInt(number);
                        if(noExponent.includes('-')){
                            this.squared = -1 * parseInt(number);
                        }else { this.squared = parseInt(number); }
                    }
                }
                else if(thingy[i].includes('x')){
                    let number = thingy[i].match(/\d+/g);
                    if(number === null){
                        // Expecting the string only has a variable
                        // so common value is automatically 1
                        if(thingy[i].includes('-')){
                            this.common = -1;
                        }else{ this.common = 1; }
                    }
                    else{
                        if(thingy[i].includes('-')){
                            this.common = -1 * parseInt(number);
                        }
                        else{ this.common = parseInt(number) };   
                    }
                }
                else{
                    let number = thingy[i].match(/\d+/g);
                    if(thingy[i].includes('-')){
                        this.independent = -1 * parseInt(number);
                    }else{ this.independent = parseInt(number) };
                }
            }
        }
        return this.solved;
    }

    complete(){
        if(!this.translated){
            this.translate();
        }
        let a = this.squared;
            let b = this.common;
            let c = this.independent;

            let b1 = b * -1;

            let semi = Math.sqrt(b**2 -4 * a * c);

            let result = [];



            if(this.fractionate){
                var result1 = fractionate((b1 + semi) / (2*a));
                var result2 = fractionate((b1 - semi) / (2 * a));
            }
            else{
                var result1 = (b1 + semi) / (2*a);
                var result2 = (b1 - semi) / (2 * a);
            }

            result.push(result1);
            result.push(result2);
            
            if(result.includes(NaN)){
                return 'Not a valid equation';
            }
            this.solved = result;
            return this.solved;
    }
}

module.exports = { Equation };

/*
let eq = new Equation('+x^2 + 24 + 11x', {fractionate: true})
eq.translate();
eq.complete();
console.log(eq);
*/
