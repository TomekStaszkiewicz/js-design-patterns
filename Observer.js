// observer design pattern

class Observable {
    #observers = [];
    text = 'ABCD';

    subscribe(newObserver) {
        this.#observers.push(newObserver);
    }

    notify(){
        this.#observers.forEach(o => {
            o(this);            
        });
    }

    triggerChange(newText){
        this.text = newText;
        this.notify();
    }
}

function showText(obj){
    console.log(`showText ${obj.text}`);
}

function anotherShowText(obj){
    console.log(`anotherShowText ${obj.text}`);
}

const obs = new Observable();

obs.subscribe(showText);
obs.subscribe(anotherShowText);

obs.triggerChange('New text value');
obs.triggerChange('Other text value');