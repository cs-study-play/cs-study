# Callback 함수 📚

---------

## 📌 동기와 비동기
### 동기(Synchronous) 

---------
동시에 일어난다는 뜻으로 요청과 결과가 한 자리에서 동시에 일어니는 것입니다. 
특정코드 실행시 반드시 결과가 주어진 후 다음 코드 실행되어지는 것과 같습니다.

### 비동기(Asynchronous) 

---------
동시에 일어나지 않는다는 뜻으로 요청과 결과가 동시에 일어나지 않는 것입니다.
특정코드를 실행하는 도중 다음 코드를 실행되어지는 것과 같습니다.


## 📌 CallBack(콜백)
call과 back을 합친 단어로 되돌아와서 호출하라는 이름입니다.
콜백함수의 제어권을 넘겨받은 코드는 필요에 따라 즉시 실행할 수도 있고, 나중에 실행 할수도 있습니다.

일반적으로 콜백수신 코드로 콜백 함수를 전달할 때에는 포인터(핸들), 서브루틴 또는 람다함수의 형태로 넘겨줍니다.
다른 방식으로는 넘겨받은 콜백 함수를 <핸들러>로서 등록하고 콜백수신 함수반응의 일부로 나중에 호출할 때 사용할수도 있습니다.
또한 콜백은 폴리모피즘과 제네릭프로그래밍이 단순화 된 것이고 코드 재사용을 할때 유용합니다.👍

[ 콜백함수 예시 ]  
![image](https://user-images.githubusercontent.com/71051838/157038360-e9e34922-7aa3-4ec5-aaa9-2e46b487e65f.png)
## 📌 Callback hell (콜백 지옥)
콜백 지옥이란 비동기 작업을 위해 비동기 이후에 처리될 작업들을 콜백 내부에 작성해야하는데 사용되는 
콜백함수안에 콜백을 무는식으로 작성하게 되어 가독성이 떨어지는 끔찍한😫 코드를 만들게되는 것을 말합니다.



[ 콜백지옥함수 예시 ]  
![image](https://user-images.githubusercontent.com/71051838/157040107-81e4d9a0-774b-43ce-a99b-c8b4495b1c39.png)

## 📌 Promise (ES6에서 추가됨)
지옥에서 우리를 구해줄 Promise객체👼를 통해 비동기 작업을 훨씬 쉽고 직관적으로 코딩할 수 있게되었습니다.

[ Promise 예시 ]    
![image](https://user-images.githubusercontent.com/71051838/157041220-c85628ba-b3a3-4019-b65c-e51fb091fa59.png)

1. const로 선언했기 때문에 재할당 되지 않습니다. 따라서 가독성도 좋고 유지보수하기에도 좋습니다.
2. 화살표 함수로 특별한함수(executor) 하나를 인자로 받습니다.
3. resolve는 특별한 함수 내에서 호출할 수 있는 또다른 함수입니다. resolve가 호출되면 비동기 작업이 성공했음을 뜻합니다.
4. reject는 특별한 함수 내에서 호출할 수 있는 또다른 함수입니다. reject가 호출되면 비동기 작업이 실패했음을 뜻합니다.
5. Promise함수가 끝난후 동작설정은 than(성공후 동작) catch(실패후동작)를 통해 지정할 수 있습니다. 

[ than / catch 예시 ]  
![image](https://user-images.githubusercontent.com/71051838/157043517-d73e8fd0-bff2-42df-bbbd-025aaf864a8f.png)

## 📌 Async / Await (ES2017에서 추가됨)
Promise를 보다 쉽게 사용할 수 있게 해주는 코드입니다.  
### Async <hr>
Async는 함수를 선언할 때 붙여줄 수 있습니다. Async 함수의 리턴값은 무조건 Promise입니다.  
### Await <hr>
Await은 말그대로 기다리게 해주는 함수인데 Promise함수가 끝날 때까지 기다리는 함수 입니다. Await은 Async함수 내에서만 사용할 수 있습니다.

## 📌 결론
비동기를 위해 Callback함수가 사용되었고 Callback hell을 벗어나기 위해 Promise를 사용하고 Promise를 더 편하게 사용하기 위해 Async / Await 함수를 사용합니다~!!😊

### 📖 참고문헌 📖
* [우테코 테코톡](https://www.youtube.com/watch?v=wvEYG6ydAGg)
* [네이버 나무위키](https://namu.wiki/w/callback%20%ED%95%A8%EC%88%98)
* [위키백과](https://ko.wikipedia.org/wiki/%EC%BD%9C%EB%B0%B1)
* [블로그1](https://private.tistory.com/24)
* [블로그2](https://elvanov.com/2597)