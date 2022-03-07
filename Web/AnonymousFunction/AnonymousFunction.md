# 익명함수(Anonymous function)

## 정보

- 작성자 : 장우재
- 작성일 : 2022.03.06
- 스터디 방법 : 구글링

<hr>

## 1. 일반 함수 (가명함수) 실행
익명함수에 대해 알아보기 전에 먼저 일반적인 경우 함수를 어떻게 선언하는지 먼저 확인해 보자.   
우리가 아는 일반적인 함수 선언의 경우 다음과 같이 함수명을 포함하여 함수를 선언하며,   
함수명을 이용하여 함수를 실행한다.

``` javascript
function 함수명 (파라미터) {
    로직
};
```

ex)
``` javascript
function func_normal() {
    console.log("일반 함수 실행");
};

// 함수실행
func_normal();
```

<br>   
<br>   

## 2. 익명 함수 실행
익명함수는 말그대로 함수명이 없는 함수를 뜻한다.  
익명함수는 두가지 방법으로 실행 가능하다.
### 1) 익명함수를 변수로 선언 및 실행
익명함수를 변수로 선언하여 변수처럼 사용할 수 있으며, 일반 함수와 매우 비슷하다.  
다음과 같이 선언한다.

``` javascript
const 변수명 = function (파라미터) {
    로직
};
```

ex)
``` javascript
const func_af = function () {
    console.log("익명함수 실행1");
};

// 함수 실행
func_af();
```

### 2) 익명함수 직접 실행
익명함수는 변수명으로 선언하지 않고도 직접 괄호로 묶어 실행이 가능하다.
실행 방법은 다음과 같다.
``` javascript
(function () {
    로직
})();
```
ex)
``` javascript
(function () {
    console.log("익명함수 실행2");
})();
```

<br>
<br>

## 3. 그럼 화살표 함수는?
화살표 함수는 익명함수의 한 종류이다. 
ES6 문법이며 function 키워드를 사용하지 않고 화살표 키워드를 사용하는 것 빼고는 익명함수와 같다. 

### 1) 화살표함수 변수로 선언 및 실행
화살표함수를 변수로 선언하여 변수처럼 사용할 수 있으며, 다음과 같이 선언한다.
``` javascript
const 변수명 = (파라미터) => {
    로직
};
```
ex)
``` javascript
const func_arrow = () => {
    console.log("화살표 함수 실행1");
}

// 함수 실행
func_arrow();
```

### 2) 익명함수 직접 실행
화살표함수 역시 변수명으로 선언하지 않고도 직접 괄호로 묶어 실행이 가능하다.
실행 방법은 다음과 같다.
``` javascript
(() => {
    로직
})();
```
ex)
``` javascript
(() => {
    console.log("화살표 함수 실행2");
})();
```
## 4. 익명함수의 단점
일반 함수의 경우 전역적이기 때문에 코드상 어디에 위치하든 상관이 없다.
ex)
``` javascript
func_normal2();

function func_normal2() {
    console.log("일반 함수 실행222");
};

// 실행 됨
```

하지만 익명함수의 경우 위치가 알맞아야 한다.
ex)
``` javascript
func_af();

const func_af = function () {
    console.log("익명함수 실행222");
};

// 실행 오류 (선언되지 않았기 때문...)
// Uncaught ReferenceError: Cannot access 'func_af2' before initialization
```

<br>
<br>

## 5. 익명함수는 왜 쓰는가?


### 1) 간편함
간단하게 바로바로 함수를 사용하기위해 사용함.  
  
### 2) 메모리 효율성
일반 함수의 경우 초기에 모두 선언이 된다. 따라서 한번만 사용할 함수가 계속 메모리를 불필요한 메모리를 차지하게 된다. 따라서 메모리 사용량은 성능과도 연결되기 때문에 메모리를 효율적으로 사용하기 위해 사용한다.  
  
### 3) 쉐도잉
일반함수(가명함수) 보다 늦게 선언되기 때문에 쉐도잉을 목적으로 사용함

** 쉐도잉 관련 정보 **   
https://programmers.co.kr/learn/courses/3/lessons/151

### 감사합니다.