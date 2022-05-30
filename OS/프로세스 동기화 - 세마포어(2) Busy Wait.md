# 프로세스 동기화 - 세마포어(2) Busy Wait

## 1. 세마포어(Semaphores)

### 1. 전통적 동기화 문제 - Producer and Consumer Problem

1. 생산자-소비자 문제
    - 생산자가 데이터를 생산하면 소비자는 그것을 소비
    - 예) 컴파일러 → 어셈블러, 파일 서버 → 클라이언트, 웹 서버 → 웹 클라이언트
    - 유한 버퍼 문제(Bounded Buffer Problem)
        
        ![Untitled](https://user-images.githubusercontent.com/97429679/171047607-d01862c8-b566-4e6d-a92d-42cc5b4d45d9.png)
        
        <[https://prepinsta.com/operating-systems/bounded-buffer-problem/](https://prepinsta.com/operating-systems/bounded-buffer-problem/)>
        
        - 생산된 데이터는 버퍼에 일단 저장
        - 현실 시스템에서 버퍼 크기는 유한
        - **생산자는 버퍼가 가득 차면 더 넣을 수 없다.**
        - **소비자는 버퍼가 비면 뺄 수 없다.**
        
2. 생산자-소비자 문제 예제
    
    ```java
    package busywait;
    
    public class Buffer {
    	int[] buf;
    	int size;
    	int count;
    	int in;
    	int out;
    	
    	Buffer(int size){
    		buf = new int[size];
    		this.size = size;
    		count = in = out = 0;
    	}
    	
    	void insert(int item) {
    		// check if buf is full
    		while(count == size);
    		
    		// buf is not full
    		buf[in] = item;
    		in = (in + 1) % size;
    		count++;
    	}
    	
    	int remove() {
    		// check if buf is empty
    		while(count == 0);
    		
    		// buf is not empty
    		int item = buf[out];
    		out = (out + 1) % size;
    		count--;
    		return item;
    	}
    }
    ```
    
    ```java
    package busywait;
    
    public class Producer extends Thread {
    	Buffer b;
    	int N;
    	Producer(Buffer b, int N) {
    		this.b = b;
    		this.N = N;
    	}
    	
    	public void run() {
    		for(int i = 0; i < N; i++)
    			b.insert(i);
    	}
    }
    ```
    
    ```java
    package busywait;
    
    public class Consumer extends Thread {
    	Buffer b;
    	int N;
    	Consumer(Buffer b, int N){
    		this.b = b;
    		this.N = N;
    	}
    	
    	public void run() {
    		int item;
    		for(int i = 0; i < N; i++) {
    			item = b.remove();
    		}
    	}
    }
    ```
    
    ```java
    package busywait;
    
    public class Test {
    
    	public static void main(String[] args) {
    		Buffer b = new Buffer(100);
    		Producer p = new Producer(b, 10000);
    		Consumer c = new Consumer(b, 10000);
    		p.start();
    		c.start();
    		try {
    			p.join();
    			c.join();
    		} catch(InterruptedException e){}
    		System.out.println("Number of items in the buf is " + b.count);
    	}
    
    }
    ```
    
    - 잘못된 결과
        - 실행 불가 or count ≠ 0 (생산된 항목 숫자 ≠ 소비된 항목 숫자)
        - 최종적으로 버퍼내에는 0개의 항목이 있어야 하는데 잘못된 결과를 반환
    - 오류 발생 이유
        - **공통변수 count, buf[]의 업데이트 구간(=임계구역)에 대한 동시 진입**
    - 해결법
        - 임계구역에 대한 동시 접근 방지
        - 세마포어를 사용한 상호배제(mutual exclusion)

### 2. Busy Wait

1. Busy Wait
    - 바쁘게 기다린다.
    - 생산자는 버퍼가 가득차면 빈 공간이 있을 때까지 생산을 기다리고, 소비자는 버퍼가 비면 찬 공간이 있을 때까지 기다려야 하는데 처음 진행했던 코드에서 기다리는 코드는 **`while(count == size);`** 와 **`while(count == 0);`**. 이럴 경우 해당 조건이 아닐 때까지 무한 루프를 돌면서 기다려야 하는 상황이 발생한다. 이때 CPU는 딴 일을 하지 못하고 계속해서 해당 조건문에 잡혀 있게 되는데 이것을 **Busy Wait**라고 한다.
2. 세마포어를 활용한 CPU 성능 높이기
    - 세마포어를 사용한 busy wait 회피 → CPU 효율성 높이기
        
        ![17](https://user-images.githubusercontent.com/97429679/171047604-f8aa7a75-90a8-41e3-a00c-a15c18a3120c.png)
        
        - 생산자는 버퍼가 가득 차 있으면 무한 루프를 도는 것이 아니라 세마포어에 가둬 버리고, 소비자가 버퍼에 데이터를 빼면 세마포어에 가둬진 생산자의 임계구역을 깨워 주면 된다.
        - 소비자는 버퍼가 비워져 있으면 무한 루프를 도는 것이 아니라 세마포어에 가둬 버리고, 생산자가 버퍼에 데이터를 채우면 세마포어에 가둬진 소비자의 임계구역을 깨워 주면 된다.
    - 코드
        
        ```java
        package busywait;
        
        import java.util.concurrent.Semaphore;
        
        public class Buffer {
        	int[] buf;
        	int size;
        	int count;
        	int in;
        	int out;
        	Semaphore mutex, full, empty;
        	
        	Buffer(int size){
        		buf = new int[size];
        		this.size = size;
        		count = in = out = 0;
        		mutex = new Semaphore(1);
        		full = new Semaphore(0);
        		empty = new Semaphore(size);
        	}
        	
        	void insert(int item) {
        		// buf is not full
        		try {
        			empty.acquire();
        			mutex.acquire();
        			// 임겨구역
        			buf[in] = item;
        			in = (in + 1) % size;
        			count++;
        			mutex.release();
        			full.release();
        		} catch (InterruptedException e) {}
        	}
        	
        	int remove() {
        		// buf is not empty
        		try {
        			full.acquire();
        			mutex.acquire();
        			// 임계구역
        			int item = buf[out];
        			out = (out + 1) % size;
        			count--;
        			mutex.release();
        			empty.release();
        			return item;
        		} catch(InterruptedException e) {}
        		return -1;
        	}
        }
        ```
        
        ```java
        package busywait;
        
        public class Producer extends Thread {
        	Buffer b;
        	int N;
        	Producer(Buffer b, int N) {
        		this.b = b;
        		this.N = N;
        	}
        	
        	public void run() {
        		for(int i = 0; i < N; i++)
        			b.insert(i);
        	}
        }
        ```
        
        ```java
        package busywait;
        
        public class Consumer extends Thread {
        	Buffer b;
        	int N;
        	Consumer(Buffer b, int N){
        		this.b = b;
        		this.N = N;
        	}
        	
        	public void run() {
        		int item;
        		for(int i = 0; i < N; i++) {
        			item = b.remove();
        		}
        	}
        }
        ```
        
        ```java
        package busywait;
        
        public class Test {
        
        	public static void main(String[] args) {
        		Buffer b = new Buffer(100);
        		Producer p = new Producer(b, 10000);
        		Consumer c = new Consumer(b, 10000);
        		p.start();
        		c.start();
        		try {
        			p.join();
        			c.join();
        		} catch(InterruptedException e){}
        		System.out.println("Number of items in the buf is " + b.count);
        	}
        
        }
        ```
        
        - 결과
            
            Number of items in the buf is 0
