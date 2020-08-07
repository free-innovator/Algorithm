/**
 * Javascript class Example
 * 
 * reference link:
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
 * 
 * @version 1.0
 * @author Sejong Park
 */

class Obj {
    constructor(name){
        this._name = name;
    }
}
const Obj2 = class {
    constructor(name){
        this._name = name;
    }
}

console.log(Obj.name);
console.log(Obj2.name);