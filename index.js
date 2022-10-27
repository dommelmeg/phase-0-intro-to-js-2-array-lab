const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => cats.push(name);

const destructivelyPrependCat = name => cats.unshift(name);

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

const appendCat = name => [...cats, name];

const prependCat = name => [name, ...cats];

function removeLastCat() {
    const newCat = cats.slice(0, 2);

    return newCat;
}

function removeFirstCat() {
    const newerCat = cats.slice(1);

    return newerCat;
}