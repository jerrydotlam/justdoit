/**
 * Hello TS
 */
class Hello {
    message: string;

    constructor (message: string) {
        this.message = message;
    }

    say () {
        return 'Hello ' + this.message;
    }
}

let hello = new Hello('TypeScript is great');
document.body.appendChild(document.createTextNode(hello.say()));
