/**
 * JS Composition
 * Composition is about creating small functions and creating bigger and more complete functions with them.
 * Think of a function as a brick, composition is how you would make those bricks work together to build a wall or a house.
 */

const eat = () => {
    return {
        eat : () => { console.log('I am eating...'); }
    }
}

const swim = () => {
    return {
        swim : () => { console.log('I am swimming...'); }
    }
}

const trick = () => {
    return {
        trick : () => { console.log('I am doing a trick...'); }
    }
}

const superMagician = () => {
    return Object.assign(
        {},
        eat(),
        swim()
    );
}

const noviceMagician = () => {
    return Object.assign(
        {},
        eat(),
        swim()
    );
}

let harry = superMagician();
harry.eat();
harry.swim();