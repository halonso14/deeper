# setTimeout / setInterval

- nested setTimeout guarantees interval.
  - setTimeout is called when previous callback is finished.
- nested setInterval does not guarantees interval.
  - setInterval is called when previous callback is called.
- grabage collector does not collect setTimeout / setInterval.
- minimum delay is 4 ms in browser.
- no minimum delay in node.

---

# Event Loop and Macrotask / Microtask

## Macrotask queue

event from event loop is queued to **Macrotask queue**.

## Microtask queue

Promise is queued to **Microtask queue**.

Promise handlers then / catch / finally are queued to **Microtask queue**.

queueMicrotask(func) queues _func_ to **Microtask queue**.

## Event Loop
