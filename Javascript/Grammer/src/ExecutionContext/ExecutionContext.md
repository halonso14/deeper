# Execution Context

## def

실행 가능한 코드를 형상화하고 구분하는 추상적인 개념
실행 가능한 코드가 실행되기 위해 필요한 환경

### 실행 가능한 코드

- 전역 코드: 전역 영역에 존재하는 코드
- Eval 코드: eval 함수로 실행되는 코드
- 함수 코드: 함수 내에 존재하는 코드

### 실행에 필요한 정보

- 변수: 전역변수, 지역변수, 매개변수, 객체의 프로퍼티
- 함수 선언
- 변수의 유효범위
- this

## Execution Context의 구성

### Variable Object

- 실행에 필요한 정보를 담을 객체
  - 변수
  - 매개변수, 인수
  - 함수 선언
- 엔진에 의해 참조되면 코드에서는 접근할 수 없다.
- Variable Object 가 가르키는 객체
  - Gloabal Context -> Global Object
  - Functional Contest -> Activation Object

### Scope Chain

- 해당 Execution Context에서 참조할 수 있는 Varibale Object의 list
- Scope Chain은 식별자 중에서 변수가 아닌 Varible Object를 검색하는 메커니즘이다.

## Execution Context의 종류

### Global Execution Context

- 유일한 전역 Context

# Execution Context 생성 과정

1. 전역 코드 진입
   1. Scope Chain 생성 및 초기화
   2. Variable Instantiation 실행
      - Variable Object에 property 추가
      1. 매개 변수 / 인수 값 설정
      2. 함수 호이스팅
      3. 변수 호이스팅
   3. this 결정
2. 전역 코드 실행
   1. 변수 값 할당
   2. 함수 실행
      1. Scope Chain 생성 및 초기화
      2. Variable Instantiation 실행
      3. this 결정
   3. 함수 코드 실행

### REFERENCE https://poiemaweb.com/js-execution-context
