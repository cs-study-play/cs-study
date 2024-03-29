# 📚 자료구조 (스택 / 큐)

--------

## 📌스택(Stack)
스택(stack)이란 쌓아 올린다는 것을 의미합니다.   
따라서 스택 자료구조라는 것은 책을 쌓는 것처럼 차곡차곡 쌓아 올린 형태의 자료구조를 말합니다.  
대표적인 내장함수 : push, peek, pop 이 있습니다.

## 📌 스택의 구조 및 특징
![스택](https://user-images.githubusercontent.com/71051838/165237992-2d1a3b99-fdd2-4399-8132-a2a17d49d912.PNG)
push는 새롭게 데이터를 넣는 것을 의미합니다.  
peek은 가장 마지막에 들어간 데이터를 확인하는 것을 의미합니다.   
pop은 가장 마지막에 들어간 데이터를 추출하는 것을 의미합니다.  
따라서 스택은 시간 순서에 따라 자료가 쌓여서 가장 마지막에 삽입된 자료가 가장 먼저 삭제된다는
구조적 특징을 가지게 됩니다.  
이러한 스택의 구조를 후입선출(LIFO, Last-In-First-Out) 구조라고 말합니다.

## 📌 스택의 장단점
top 을 통해 접근하기 때문에 데이터 접근, 삽입, 삭제가 빠릅니다.  
top 위치 이외의 데이터에 접근할 수 없기 때문에 탐색이 불가능하다. 탐색하려면 모든 데이터를 꺼내면서 진행해야 합니다.

## 📌 스택의 활용 예시
스택의 특징인  후입선출(LIFO)을 활용하여 여러 분야에서 활용 가능하다.

* 웹 브라우저 방문기록 (뒤로 가기) : 가장 나중에 열린 페이지부터 다시 보여준다.
* 실행 취소 (undo) : 가장 나중에 실행된 것부터 실행을 취소한다.
* 수식의 괄호 검사 (연산자 우선순위 표현을 위한 괄호 검사)
* 재귀 알고리즘
* DFS 알고리즘
* 괄호 검사, 후위 연산법, 문자열 역순 출력 등

## 📌 큐(Queue)
Queue 의 사전적 의미는 1. (무엇을 기다리는 사람, 자동차 등의) 줄 , 혹은 줄을 서서 기다리는 것을 의미합니다.  
따라서 일상생활에서 놀이동산에서 줄을 서서 기다리는 것, 은행에서 먼저 온 사람의 업무를 창구에서 처리하는 것과 같습니다.  
선입선출(FIFO, First in first out) 방식의 구조라고 말합니다. 
대표적인 내장함수 : put, peek, get


## 📌 큐의 구조 및 특징
![큐](https://user-images.githubusercontent.com/71051838/165237999-ae5a8660-22f8-407b-9392-490d311927d1.PNG)
put는 새롭게 데이터를 넣는 것을 의미합니다.  
peek은 가장 처음에 들어간 데이터를 확인하는 것을 의미합니다.   
get은 가장 처음에 들어간 데이터를 추출하는 것을 의미합니다.   
데이터가 삽입되는 곳을 rear, 데이터가 제거되는 곳을 front 라 한다. 데이터를 삭제하기 전에는 큐가 empty 한지, 큐에 데이터를 추가하려 할 때는 큐가 full 인지 확인 후 진행해야 합니다.  
front, rear 는 증가만 하는 방식이고 실제로는 front 앞쪽에 공간이 있더라도 삽입할 수 없는 경우가 발생할 수 있습니다.  
삽입을 위해서는 계속해서 요소들을 이동시켜야 합니다.

## 📌 큐의 장단점
데이터 접근, 삽입, 삭제가 빠르다.
큐 역시 스택과 마찬가지로 중간에 위치한 데이터에 대한 접근이 불가능하다.

## 📌 큐의 활용 예시
큐는 주로 데이터가 입력된 시간 순서대로 처리해야 할 필요가 있는 상황에 이용합니다.

* 프린터 인쇄 대기열
* 은행 업무
* 대기 순서 관리
* 프로세스 관리
* 너비 우선 탐색(BFS, Breadth-First Search) 구현
* 캐시(Cache) 구현