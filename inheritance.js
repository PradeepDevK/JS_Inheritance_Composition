/**
 * JS - Inheritance
 * In simple language, inheritance means properties you got from your ancestors.
 * Your parents borrowed some properties from their parents and you borrowed some properties from your parents
 */

class Person {
    eat() {
        console.log('I am eating...');
    }

    swim() {
        console.log('I am swiming...');
    }

    breath() {
        console.log('I am breathing...');
    }
}

class Magician extends Person {
    trick() {
        console.log('I am doing a trick...');
    }
}

let liv = new Magician();
let harry = new Magician();
liv.eat();
liv.swim();
liv.trick();
harry.eat();
harry.swim();
harry.trick();