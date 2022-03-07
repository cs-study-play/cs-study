React에서 데이터를 사용하는 방식은 두 가지가 있다. 하나는 props를 이용하는 방법이고, 다른 하나는 state를 이용하는 방법이다.

props는 컴포넌트 간에 데이터를 전달하는 데 사용되며, 수정은 할 수 없는 <mark>읽기 전용 데이터</mark>이다. 반면 state는 컴포넌트 내부에 선언되며 setState를 통해 <mark>수정 가능한</mark> 데이터이다.

실제로 props와 state가 어떻게 사용되는지 살펴보고 두 방식의 차이를 더 자세히 알아보자.

<br><br>

## props 지정하기


props는 속성을 나타내는 데이터로 하나의 객체이다. 컴포넌트에 props 객체를 인자로 넘겨줌으로써 사용할 수 있다.

props는 컴포넌트를 사용할 때 다음과 같은 방식으로 지정할 수 있다.
`<ComponenetName prop={value} />`
전달할 데이터가 여러 개인 경우에는 `prop={value}`를 여러 번 사용해 지정해 줄 수 있으며 문자열일 경우에는 `prop="string"` 형태로 지정한다.

이렇게 지정된 props는 `{prop: value}`와 같은 객체 형태로 컴포넌트에 전달되며 문자열, 논리 자료형(true, false), 숫자, 배열, 객체, 날짜 등 다양한 형태의 데이터가 전달될 수 있다.

<br><br>

## props 사용하기


props 객체 또한 일반 객체와 같은 방식으로 사용할 수 있다.

1. 클래스형 컴포넌트에서의 사용

   클래스형 컴포넌트에서는 `this.props.prop`를 이용해 props 객체에 접근할 수 있다.

   ```
   class Welcome extends React.Component {
       render() {
           return <h1>Hello, {this.props.name}</h1>;
       }
   }
   ```

2. 함수형 컴포넌트에서의 사용

   함수형 컴포넌트에서는 props 객체를 인자로 받아 사용할 수 있고 this를 사용하지 않고도 props에 접근할 수 있다.

   ```
   function Welcome(props) {
       return <h1>Hello, {props.name}</h1>;
   }
   ```

<br><br>

## state 사용하기


props는 수정할 수 없는 읽기 전용 데이터이기 때문에 컴포넌트가 자신의 데이터를 제어하고 업데이트하는 데 한계를 갖는다. 컴포넌트의 재사용성을 높이고, 캡슐화하기 위해 데이터를 수정할 수 있는 state를 사용한다.

아래에는 두 가지 방식으로 state를 사용하는 법을 소개한다. 두 예제는 같은 내용을 담고 있다.

1. 클래스형 컴포넌트

   클래스형 컴포넌트에서는 생성자를 통해 state를 초기화해줄 수 있다. `this.state = {stateName: value};`로 state를 초기화하며 state를 사용할 때에는 `this.state.stateName`을 이용한다.

   아래 클래스형 컴포넌트에서 state를 사용하는 예시를 확인할 수 있다. 여기서 주의할 점은 클래스형 컴포넌트의 생성자는 항상 props로 호출한다는 점이다.

   ```
   class Example extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
       count: 0
       };
   }

   render() {
       return (
       <div>
           <p>You clicked {this.state.count} times</p>
           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
           Click me
           </button>
       </div>
       );
   }
   }
   ```

2. 함수형 컴포넌트

   함수형 컴포넌트는 클래스형 컴포넌트와 달리 `this`를 가질 수 없어 `this.state`를 생성해 사용할 수 없다. state를 이용하기 위해서는 useState라는 Hook을 이용해야 한다. `const [stateName, setStateName] = useState(value);`로 state 변수를 선언할 수 있다.

   클래스형 컴포넌트와 달리 {stateName}을 이용하면 변수를 사용할 수 있다.

   ```
   import React, { useState } from 'react';

   function Example() {
   const [count, setCount] = useState(0);

   return (
       <div>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
           Click me
       </button>
       </div>
   );
   }
   ```

   화살표 함수를 이용할 수도 있다.

   ```
   const Example = () => {
       const [count, setCount] = useState(0);

       return(
           <>
           </>
       );
   }
   ```

<br><br>

## state 변경하기


state는 직접적으로 수정할 수는 없고, setState()를 이용해야만 값을 변경할 수 있다.
`this.state = 'value'` 방식으로 직접 지정하는 방식은 생성자에서만 가능하다.

클래스형 컴포넌트에서는 `this.setState()`를, 함수형 컴포넌트에서는 `setState()`를 이용하여 호출한다.

`setState()`를 이용해 state를 변경하면 컴포넌트가 다시 렌더링된다.

다만 state의 업데이트는 비동기적으로 처리되기 때문에 state를 이용해 state를 업데이트할 경우(`setState({counter: this.state.counter + this.props.increment});`와 같은 경우)에는 제대로 처리되지 않을 수 있다. 이런 경우엔 `setState((state, props) => ())`와 같이 함수의 인자로 값을 넘겨 처리해야 한다.

<br><br>

## props vs state


결론적으로 props는 컴포넌트 간에 주고받는 데이터를 담는 객체이고, state는 한 컴포넌트 내부에서 사용되는 업데이트 가능한 데이터를 담는 변수이다.

props는 수정이 불가능한 읽기 전용의 데이터를 담는 반면, state는 setState를 이용해 수정할 수 있는 데이터를 담는다는 것 또한 큰 차이이다.

더 나아가 state의 값이 변할 때 렌더링이 되기 때문에 state는 const, let과 같은 변수와도 다르게 사용된다.

<br><br>

## 참고 및 예제 출처


https://ko.reactjs.org/docs/components-and-props.html

https://ko.reactjs.org/docs/state-and-lifecycle.html

https://ko.reactjs.org/docs/react-component.html

https://ko.reactjs.org/docs/hooks-state.html

https://velog.io/@soyi47/React-Component-props-state
