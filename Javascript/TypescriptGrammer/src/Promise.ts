// try-catch is implicitly applied.
const promiseHandler: Promise<void> = new Promise((resolve, reject) => {
    let second: number = (Math.random() * 4 );
    // do something asynchronus.
    setTimeout(() => {
        console.log('second', second);
        if (second > 2) {
            resolve(second);
        } else if (second > 1) {
            // reject goes to catch.
            reject(`Not true`);
        } else {
            // reject's parameter could be any Object.
            reject(new Error(`Error`));
        }
        return;
    }, second * 1000, true);
}).then((response: any) => {
    console.log('first then')
    console.log(response + "s");
    if (response > 3) {
        return response;
    }
    // throw goes to catch.
    throw Error('Error from first then')
}).then(response => {
    console.log('second then')
    console.log(response);
}).catch((error) => {
    console.log('catch', error);
});
