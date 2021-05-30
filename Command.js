class Command {
    #func;
    #args;

    constructor(f, argList){
        this.#args = [...argList];
        this.#func = f;
    }

    execute(){
        this.#func(...this.#args);
    }
}

class Sender {
    #commandList = [];
    #receiver = null;

    addCommand(newC){
        this.#commandList.push(newC);
    }

    set receiver(newR){
        this.#receiver = newR;
    }

    sendCommand(){
        const [c, ...otherCommands] = this.#commandList;
        this.#commandList = otherCommands;
 
        this.#receiver.getCommand(c)
    }

}

class Receiver {
    #commandList = [];

    getCommand(newC){
        this.#commandList.push(newC);
    }

    executeFirst(){
        const [c, ...otherCommands] = this.#commandList;
        this.#commandList = otherCommands;

        c.execute();
    }
}

const s = new Sender();
const r = new Receiver();
s.receiver = r;
const c = new Command((a, b, c) => console.log(a + b + c), [1, 3, 5]);
const c1 = new Command((a, b, c) => console.log('second', a + b + c), [1, 3, 5]);
const c2 = new Command((a, b, c) => console.log('third', a + b + c), [1, 3, 5]);
s.addCommand(c)
s.addCommand(c1)
s.addCommand(c2)

s.sendCommand();
s.sendCommand();
s.sendCommand();

r.executeFirst();
r.executeFirst();
r.executeFirst();