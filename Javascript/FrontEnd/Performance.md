# Debouncing

executing the very last or the very first request.

```
<input id='input'>
```

```
let timer;
document.querySelector('#input').addEventListener('input', function(event) {
  if(timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    console.log('execute');
  }, 200);
});
```

# Throttling

wait after last request.

```
<input id='input'>
```

```
let timer;
document.querySelector('#input').addEventListener('input', function(event) {
  if(!timer) {
    timer = setTimeout(function() {
      console.log('execute');
      }, 200);
  }
});
```
