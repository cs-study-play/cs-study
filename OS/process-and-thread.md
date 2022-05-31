## Process

### 정의

프로세스는 컴퓨터에서 연속적으로 실행되고 있는 컴퓨터 프로그램이며, 스케줄링의 대상이 되는 작업(task)와 거의 비슷한 의미로 사용된다. 프로그램이 인스턴스화 해 메모리에 올라가 실행된 상태를 프로세스라고 한다. 실제로 실행됨으로써 CPU 스케줄링의 대상이 된다.

### 상태

1. 생성 (New)

- 프로세스가 막 생성된 상태로 fork()나 exec() 함수를 통해 생성
- 프로세스가 생성될 때 PCB(Process Control Block)이 할당

2. 준비 (Ready)

- CPU 스케줄러로부터 CPU를 할당 받길 기다리는 상태
- 메모리를 제외한 모든 필요한 자원을 보유한 상태는 준비 중단(Suspended Waiting) 상태라고 부름

3. 실행 (Run, Running)

- CPU 소유권 및 메모리를 할당받아 명령어를 수행하는 상태
- CPU Burst라고 부름

4. 대기 (Wait, Waiting)

- 어떤 이벤트가 발생해 프로세스가 차단(blocked)된 상태
- 주로 I/O 입출력에 의한 인터럽트로인해 발생
- 대기 상태에서 메모리를 잃게 되면 대기 중단(Suspended Waiting) 상태가 됨

5. 종료 (Exit, Terminated)

- 프로세스가 실행을 완료해 메모리와 CPU를 모두 반납한 상태
- 자연스럽게 종료되기도 하고, abort, process.kill 등으로 종료 가능

<img src="https://itwiki.kr/images/thumb/e/e9/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%83%81%ED%83%9C%EC%A0%84%EC%9D%B4%EB%8F%84_%EC%83%81%EC%84%B8.png/500px-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%83%81%ED%83%9C%EC%A0%84%EC%9D%B4%EB%8F%84_%EC%83%81%EC%84%B8.png">
출처 : https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%83%81%ED%83%9C

### 메모리 구조

1. 스택 (동적 영역)
   - 지역변수, 매개변수, 함수 등이 저장되는 공간
   - 컴파일 시에 크기가 결정됨
2. 힙 (동적 영역)
   - 벡터같은 동적 할당에 사용
   - 런타임 시에 크기가 결정됨
3. 데이터 영역 (정적 영역)
   - 전역변수, 정젹변수 등 프로그램이 종료될 때 사라지는 변수가 저장되는 공간
   - 초기화되지 않은 변수가 0으로 초기화되는 BSS 영역
   - 0이 아닌 다른 값으로 할당된 변수들이 저장되는 Data 역역
4. 코드 영역 (정적 영역)
   - 프로그램에 내장된 소스 코드가 저장된 공간
   - 수정 불가능(읽기 전용)하며 기계어로 저장됨

<img src="https://t1.daumcdn.net/cfile/tistory/998E6C3E5C9652C21F">
출처 : https://bnzn2426.tistory.com/59

### PCB(Process Control Block)

프로세스에 대한 메타데이터를 저장한 공간이다. 프로그램을 실행하면 프로세스가 생성되고 메모리가 할당된 후 관련 메타데이터들이 PCB에 저장되어 프로세스에 할당된다. PCB에는 다음과 같은 내용이 포함된다.

- 프로세스 스케줄링 상태
- 프로세스 ID
- 프로세스 권한
- 프로그램 카운터
- CPU 레지스터
- CPU 스케줄링 정보
- 계정 정보
- I/O 상태 정보

한 프로세스에 할당된 CPU 시간이 끝나거나 인터럽트가 발생하면 PCB 교환이 일어나는데 그 과정을 컨텍스트 스위칭(context switching)이라 부른다.

<br><br>

## Thread

스레드는 어떠한 프로세스 내에서 실행되는 작업의 흐름을 말한다. 프로세스의 실행 가능한 가장 작은 단위이기도 하다. 기본적으로 하나의 프로세스에는 하나의 스레드가 있지만 둘 이상의 스레드를 동시에 실행하는 멀티 스레드를 이용할 수도 있다.

<br><br>

## Multi Process

동시에 여러가지 일을 처리할 수 있게끔 여러 프로세스를 실행하는 것으로 웹 서핑 + 카톡하기 + 멜론 플레이어 실행하기가 동시에 가능한 이유이다.

프로세스 간에 데이터를 공유해야 하는 경우엔 IPC(Inter Process Communication)를 이용한다. 여기에는 공유 메모리, 파일, 소켓, 파이프, 메시지 큐 등이 있다.

각 프로세스는 독립된 메모리 영역을 할당 받고, 프로세스당 최소 1개의 메인 스레드를 가지게 된다.

<img src="https://velog.velcdn.com/images%2Fcchloe2311%2Fpost%2F0bf766c7-6383-48e5-8086-7766a72276b9%2Fimage.png">
출처 : https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html

<br><br>

## Multi Thread

멀티프로세스와 달리 힙, 데이터, 코드 영역의 데이터를 스레드끼리 공유한다. 각 스레드는 스택 영역만을 따로 할당받는다. 따라서 데이터를 공유하는데 IPC와같은 번거로운 방식을 사용하지 않아도 되고 속도 측면에서도 훨씬 빠르다. 다만 데이터에 접근할 때 주의할 필요가 있어 공유 자원과 임계 영역을 잘 고려해야 한다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F999A6E375B8D2F0B374621">
출처 : https://3dmpengines.tistory.com/2003

## 참고

[위키백과 - 프로세스](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4)
<br>
면접을 위한 CS 전공지식 노트, 주홍철, 길벗, 2022
<br>
https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html
<br>
[약팍한 코딩사전 유튜브](https://www.youtube.com/watch?v=iks_Xb9DtTM)
<br>
