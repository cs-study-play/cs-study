# OCP와 전략패턴

[[10분 테코톡] 👾베디의 OCP와 전략패턴](https://www.youtube.com/watch?v=90ZDvHl8ROE&list=PLgXGHBqgT2TvpJ_p9L_yZKPifgdBOzdVH&index=182)

## 1. OCP(Open Close Principle, 개방폐쇄의 원칙)

### 1. OCP란?

- 객체지향 설계원칙의 SOLID 중 O
- 소프트웨어 구성요소(컴포넌트, 클래스, 모듈, 함수)는 확장에 대해서는 개방돼야 하지만 변경에 대해서는 폐쇄되어야한다.
- 기존의 코드를 변경하지 않으면서 기능을 추가할 수 있도록 설계가 되어야 한다는 뜻이다.

### 2. OCP 적용해야하는 이유?

- 기존 코드를 계속해서 변경, 확장이 될수록 코드가 복잡해지고 코드를 수정하거나 수정할 위치를 찾는데 점점 오랜 시간이 걸리게 된다. 즉, 유지보수를 수월하게 하기 위해서 개방폐쇄의 원칙을 적용해야한다.

### 3. OCP 적용방법

1. **상속 (is-a)** 
    - 상속 보다는 컴포지션으로 적용하는 것이 좋다.
    - 상속으로 적용할 경우 **“깨지기 쉬운 상위클래스 문제”** 발생한다.
    - 상속은 하위클래스가 상위클래스의 기능과 밀접하기 때문에 상위가 바뀌면 하위에 영향이 매우 크다.
    
2. **컴포지션(has-a)**
    - 변경(확장)될 것과 변하지 않을 것을 엄격히 구분
    - 이 두 모듈이 만나는 지점에 인터페이스를 정의
    - 구현에 의존하기보다 정의한 인터페이스에 의존하도록 코드를 작성

## 2. 전략패턴

### 1. 전략패턴이란?

- 전략을 쉽게 바꿀수 있도록 해주는 디자인 패턴
- 행위를 클래스로 캡슐화해 동적으로 행위를 자유롭게 바꿀수 있게 해주는 패턴
- 새로운 기능의 추가가 기존의 코드에 영향을 미치지 못하게 하므로 OCP를 준수하는 디자인 패턴

### 2. 전략 패턴의 구조

![Strategy_Pattern_in_UML](https://user-images.githubusercontent.com/97429679/165112650-c648d685-e08d-4575-aef4-49417741530a.png)

[https://en.wikipedia.org/wiki/Strategy_pattern](https://en.wikipedia.org/wiki/Strategy_pattern)

- Context
    - 스트래티지 패턴을 이용하는 역할을 수행
    - 필요에 따라 동적으로 구체적인 전략을 바꿀수 있도록한다. (DI)
- Strategy
    - 인터페이스나 추상클래스로 외부에서 동일한 방식으로 알고리즘을 호출하는 방법을 명시한다.
- ConcreateStrategy
    - 전략패턴에서 명시한 알고리즘을 실제로 구현한 클래스
    

### 3. 전략패턴 VS 탬플릿 메소드 패턴

- OCP를 준수하기 위한 디자인 패턴들
- 전략패턴 : 컴포지션을 사용하여 패턴
- 탬플릿 메소드 패턴 : 상속을 사용한 패턴
