<!-- Reference https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/ -->

# Event

## DOM Event Flow

1.  Capturing
1.  Target
1.  Bubbling

event.eventPhase 프로퍼티를 통해 현재 발생 중인 이벤트 흐름의 단계를 알 수 있다.

---

## Event Detection

이벤트 감지 방법은 명시적으로 지정할 수 있다.

### Event Bubbling

event.target을 시작으로 document 객체를 만날 때까지, 해당 event handler가 동작한다.
event.stopPropagation()을 사용하면 해당 event에 대한 event bubbling을 중단한다.

### Event Capture

document를 시작으로 event.target 객체를 만날 때까지, 해당 event handler가 동작한다.

---

## Event Handling

event handler는 3가지 방법으로 할당 할 수 있다.

1.  HTML property: onclick="..."
1.  DOM property: elem.onclick = function
1.  addEventListner: elem.addEventListner(event, handler[, options])

### addEventListner

- addEventListener를 사용하면 복수의 Event Handler를 등록할 수 있다.
- 객체를 event handler로 사용할 수 있다. 이 경우 객체에 반드시 handleEvent(event) 메서드가 있어야 한다.
- removeEventListener를 같은 단계에 있어야 event handler가 제거된다.

---

## Event Delegation

```
<div class="itemList">
  <div>
    <input type="checkbox" id="item1" />
    <label for="item1">item1</label>
  </div>
  <div>
    <input type="checkbox" id="item2" />
    <label for="item2">item2</label>
  </div>
</div>
```

기본적으로 명시적으로 eventListener를 등록해야한다.

```
const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('click', eventHandler);
```

이 경우, child를 추가 등록하는 경우 event listener가 명시적으로 등록해야 한다.

하지만,

```
document.querySelector('.itemList').addEventListener('click', eventHandler);
```

이벤트 위임 방식을 사용하면 명시적으로 event listener를 등록하지 않아도 된다.

예시)

```
parent.onclick = function(event) {
  let elem = event.target.closest('elem');

  if (!elem) return;

  if (!parent.contains(elem)) return;

  // handle event
};
```

### flow

1. 컨테이너에 하나의 핸들러를 할당한다.
1. 핸들러의 event.target을 사용해 이벤트가 발생한 요소를 파악한다.
1. 원하는 요소에서 이벤트가 발생한 경우, 이벤트를 핸들링한다.

### pros

1.  초기화가 단순하고 메모리가 절약된다.
1.  요소가 추가/제거 되어도 추가적인 절차가 필요하지 않다.
1.  DOM 수정이 용이다.

### cons

1.  Event bubbling이 필수다.
1.  하위 컨테이너에서 발생하는 이벤트에도 응답을 해야한다.

---

## Event instance

- event.target: 이벤트가 발생한 가장 안쪽의 요소
- event.currentTarget: 이벤트를 핸들링하는 현재 요소(event handler가 실제 할당된 요소)
- event.phase: 현재 이벤트 흐름 단계(1-capturing, 2-target, 3-bubbling)
