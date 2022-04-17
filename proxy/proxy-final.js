let log = []

const handler = {
    get(target, prop) {
        log = [...log, {prop, method: 'read'}];
        return target[prop]
    },
    set(obj, prop, value) {
        log = [...log, {prop, method: 'write', value}];
        return obj[prop] = value;
    }
}

const target = {
    name: 'Chris'
};

const proxy1 = new Proxy(target, handler);

console.log(proxy1.name);
console.log(proxy1.name);
proxy1.name = 'Jill'
proxy1.name = 'John'
console.log(proxy1.name);
console.log(proxy1.name);

log.forEach(item => {
    switch (item.method) {
        case 'read':
            console.log(`${item.prop} was read`);
            break;
        case 'write':
            console.log(`${item.prop} was written to with ${item.value}`);
            break;
    }
});

console.log(proxy1)
