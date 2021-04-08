// try-catch is implicitly applied.
const promiseErrorHandling = new Promise((resolve: any, reject: any) => {
  console.log('Promise - Error handling.');
  let second = Math.random() * 4;
  // do something asynchronus.
  setTimeout(() => {
    console.log('second', second);
    if (second > 2) {
      // resolve's parameter could be any Object.
      resolve(second);
    } else if (second > 1) {
      // reject goes to catch.
      reject(`reject`);
    } else {
      // reject's parameter could be any Object but Error type is recommended.
      // reject(new Error(`Error`));
      console.log('Throw Error goes to...');
      throw new Error('Error Thrown from requset');
    }
    reject(new Error('This reject will be ignored.'));
    return;
  }, 1000);
  // onFirstRejectd will be skipped.
})
  .then((onFirstFulfilled: any) => {
    console.log('On first Fulfilled.');
    console.log(onFirstFulfilled + 's');
    if (onFirstFulfilled > 3) {
      return onFirstFulfilled;
    }
    // throw goes to onSecondRejected.
    throw Error('Error from first Fulfilled.');
  })
  .then(
    (onSecondFulfilled: any) => {
      console.log('On second Fulfilled.');
      console.log(onSecondFulfilled);
    },
    (onSecondRejected: any) => {
      console.log('On second Rejected.');
      console.log(`"${onSecondRejected}" is passed to second then`);
      throw Error('Error from second Rejected.');
    }
  )
  .then(
    (onThirdFulfilled: any) => {
      console.log('On third Fulfilled.');
      console.log(onThirdFulfilled);
    },
    (onThirdRejected: any) => {
      console.log('On third Rejected.');
      console.log(onThirdRejected);
      console.log(`"${onThirdRejected}" is passed to third then`);
      throw Error('Error from third Rejected.');
    }
  )
  .catch((error: any) => {
    console.log('catch', error);
  })
  .finally(() => {
    console.log('On Finally.');
  });

const delayedProcess = (delay: number) => {
  const delayedTime: number = Math.random() + delay;
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      console.log('delayed process:', delayedTime);
    }, delayedTime);
    if (delay > 5) reject('Delayed too much.');
    resolve(delay);
  }).then((onfulfilled: any) => {
    console.log('onfulfilled:', onfulfilled);
    return onfulfilled;
  });
};

console.log('Promise All');
console.log('all resolved.');
Promise.all([delayedProcess(2), delayedProcess(1), delayedProcess(3)]).then(
  (promiseAllResult: any) => {
    console.log('Promase All Result:', promiseAllResult);
  }
);

console.log('rejectd.');
Promise.all([delayedProcess(2), delayedProcess(10), delayedProcess(3)])
  .then((promiseAllResult: any) => {
    console.log('Promase All Result:', promiseAllResult);
  })
  .catch((error: any) => {
    console.log('Promise All failed.', error);
  });
