// module design pattern

const module = (function (){
    //we can do whatever here
    const nameString = "Great name of string";
    let counter = 0;
    function increase(){
        counter = counter + 1;
    }
    function decrease(){
        counter -= 1;
    }
    // the module variable will have access only to
    // things returned from the function
    return {
        name: nameString,
        // we have to return function here 
        // so the value gets updated
        value: function(){
            return counter;
        },
        increase: increase
    }
})();

console.log(module);
console.log(module.value());
module.increase();
module.increase();
module.increase();
module.increase();
console.log(module.value());