// -----------1---------
function mapping() {
    const letter = {}

    const lowercase = 'ps'
    const uppercase = lowercase.toUpperCase()

    for (let i in lowercase) {
        const lowercaselet = lowercase[i]
        const uppercaselet = uppercase[i]
        letter[lowercaselet] = uppercaselet
    }
    return letter
}
console.log(mapping());


// -----------------2----------
function inkLevels(min) {
    return Math.min(...Object.values(min))
}
console.log(inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
}));
// ----------------3---------------
function keysAndValues(obj){
    const keys=Object.keys(obj).sort()
    const values=Object.values(obj).sort()
    return[keys ,values]
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));