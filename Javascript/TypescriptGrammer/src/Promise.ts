// try-catch is implicitly applied.
const promiseErrorHandling = new Promise((resolve, reject) => {
  console.log('Promise - Error handling.');
  let second = Math.random() * 4;
  // do something asynchronus.
  setTimeout(
    () => {
      console.log('second', second);
      if (second > 2) {
        // resolve's parameter could be any Object.
        resolve(second);
      } else if (second > 1) {
        // reject goes to catch.
        reject(`reject`);
      } else {
        // reject's parameter could be any Object but Error type is recommended.
        reject(new Error(`Error`));
      }
      reject(new Error('This reject will be ignored.'));
      return;
    },
    1000,
    true
  );
})
  // onFirstRejectd will be skipped.
  .then((onFirstFulfilled: any) => {
    console.log('On first Fulfilled.');
    console.log(onFirstFulfilled + 's');
    if (onFirstFulfilled > 3) {
      return onFirstFulfilled;
    }
    // throw goes to catch.
    throw Error('Error from first Fulfilled.');
  })
  .then(
    (onSecondFulfilled) => {
      console.log('On second Fulfilled.');
      console.log(onSecondFulfilled);
    },
    (onSecondRejected) => {
      console.log('On second Rejected.');
      console.log(`"${onSecondRejected}" is passed to second then`);
      throw Error('Error from second Rejected.');
    }
  )
  .then(
    (onThirdFulfilled) => {
      console.log('On third Fulfilled.');
      console.log(onThirdFulfilled);
    },
    (onThirdRejected) => {
      console.log('On third Rejected.');
      console.log(onThirdRejected);
      console.log(`"${onThirdRejected}" is passed to third then`);
      throw Error('Error from third Rejected.');
    }
  )
  .catch((error) => {
    console.log('catch', error);
  });
