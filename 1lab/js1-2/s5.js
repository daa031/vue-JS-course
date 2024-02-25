function copyFunc(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    const copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            copy[key] = copyFunc(obj[key])
        }
    }
    return copy
}

const object = {
    name: 'aaaaa',
    a: undefined,
    b: null,
    age: 111,
    q: {
        qw: 'm',
        ar: ['1', '2']
    },
};

//const a = JSON.stringify(object)
const b = JSON.parse(JSON.stringify(object))

const object2 = copyFunc(object)

console.log(object)
console.log(object2)
console.log(b)

console.log(object === object2)





