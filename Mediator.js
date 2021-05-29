// Mediator design pattern

class Dog {
    #owner;
    name = 'Spiky';

    set owner(newOwner){
        this.#owner = newOwner;
    }

    sayHello(){
        console.log(`Hi it is me Doggo. My owner is ${this.#owner.name}`);
    }
}

class Person{
    #dog;
    name = 'Bob';

    set dog(newDog){
        this.#dog = newDog;
    }

    sayHello(){
        console.log(`Hi it is me Person. My doggo is ${this.#dog.name}`);      
    }
}

class Mediator {
    #dog;
    #person;
    
    constructor(dog, person){
        this.#dog = dog;
        this.#person = person;

        this.#dog.owner = person;
        this.#person.dog = dog;
    }

    introducePlease(){
        this.#dog.sayHello();
        this.#person.sayHello();
    }
}

const d = new Dog();
const p = new Person();
const m = new Mediator(d, p);
m.introducePlease();