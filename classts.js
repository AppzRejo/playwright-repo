"use strict";
class TypescriptclassSample {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        return "hello" + this.name;
    }
}
const obj = new TypescriptclassSample("Anu");
const result = obj.greet();
console.log(result);
