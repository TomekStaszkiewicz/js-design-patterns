// constructor function
function Dog( breed, age, name, ownerFunction){
    // we use arguments to define our object properties
    this.breed = breed;
    this.age = age;
    this.name = name;
    // we can define methods inside function
    // we can also pass functions as arguments
    Dog.prototype.ownerFunction = ownerFunction;
}

// we can also define methods outside function
Dog.prototype.woof = function(){
    console.log(`Woof woof, my name is ${this.name}`);
}


// we can now use the class to initiate object

const fn = () => console.log("Owner function here!");
const pepe = new Dog('beagle', 10, 'Rex', fn);

pepe.woof();
pepe.ownerFunction();