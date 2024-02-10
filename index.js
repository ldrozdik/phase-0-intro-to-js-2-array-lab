
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats;

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
cats;

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
cats;

function destructivelyRemoveLastCat() {
    cats.pop();
}
cats;

function destructivelyRemoveFirstCat() {
    cats.shift()
}
cats;

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const moreCats = [...cats, "Broom"];
    return moreCats;
}

function prependCat(name) {
    const moreCats = ["Arnold", ...cats];
    return moreCats;
}

function removeLastCat() {
    const updatedCats = cats.slice(0, -1);
    return updatedCats;
}

function removeFirstCat() {
    const updatedCats = cats.slice(1,3)
    return updatedCats;
}