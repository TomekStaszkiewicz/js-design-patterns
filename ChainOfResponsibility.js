function findType(type, data){
    const d = data.filter((el) => typeof el !== type);
    console.log(`Received data: ${[...data]}. There are ${data.length - d.length} ${type} in the data`);
    
    return d;
}

class Chain {
    #data;
    handleData(data){
        this.#data = data;
        this.findObject()
            .findString()
            .findNumber()
            .findBool()
            .findDefault();
    }

    findObject(){
        this.#data = findType('object', this.#data);
        return this;
    }

    findString(){
        this.#data = findType('string', this.#data);
        return this;
    }

    findNumber(){
        this.#data = findType('number', this.#data);
        return this;
    }

    findBool(){
        this.#data = findType('boolean', this.#data);
        return this;
    }

    findDefault(){
        console.log('Other elements: ', this.#data);
        return this;
    }
}

const c = new Chain();
const arr = [
    {}, {}, // obj, obj
    'asd', {}, // str, obj
    10, 12, 10.3, // number, number, number, number
    new Map(), new Set(), // obj, obj
    true, false, // bool, bool
    'bbb', undefined, //str, undefined
    null, [], // obj, obj
    1, false // number, bool
]

c.handleData(arr);