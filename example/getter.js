/**
 * Javascript getter Example
 * 
 * reference link:
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/get
 * 
 * @version 1.0
 * @author Sejong Park
 */

const obj = {
    _name: "Test",
    get name() { return this._name; }
};
Object.defineProperty(obj, "doubleName", { get: function() { return this._name + this._name } } );

console.log("========== Data ==========");
console.log(obj.name);
console.log(obj.doubleName);

console.log("========== getOwnPropertyDescriptor ==========");
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptor(obj, 'doubleName'));

class obj2 {
    get test() { return 'Test' }
}

console.log("========== class get ==========");
console.log(obj2.test);
console.log(Object.getOwnPropertyDescriptor(obj2, 'test'));
