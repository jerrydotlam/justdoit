/**
 * Hello TS
 */
var Hello = (function () {
    function Hello(message) {
        this.message = message;
    }
    Hello.prototype.say = function () {
        return 'Hello ' + this.message;
    };
    return Hello;
}());
var hello = new Hello('TypeScript is great');
document.body.appendChild(document.createTextNode(hello.say()));
//# sourceMappingURL=hello.js.map