// unlless I expose this sum function it is a private function and 
// cant be used outside of this file
const sum = (num1, num2) => num1 + num2;

const PI = 3.14;

class SomeNodeObj{
    constructor(){
        console.log('Object created')
    }
}
// module is a keyword in nodejs that is used to expose functions to
// be accessed outside the initial file they were first declared in

/*  module.exports.sum = sum;
    module.exports.PI = PI;
    module.exports.SomeNodeObj = SomeNodeObj;
*/

// simpler or shorter code for exporting 
module.exports = {sum : sum, PI : PI, SomeNodeObj: SomeNodeObj}

