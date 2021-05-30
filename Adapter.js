class Original {
    val;
    constructor(val){
        this.val = val;
    }
    
    get value() {
        return this.val;
    }
}

// it does not need to extend the original class
class Adapter extends Original {
    constructor(val){
        super(val);
    }

    get value(){
        console.log('Additional functionality, change of API');

        return this.val * 2;
    }
}

const ad = new Adapter(5);

console.log(ad.value)