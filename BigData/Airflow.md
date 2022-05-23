# Airflow

- airflow는 워크플로우 관리 플랫폼
- Airbnb에서 개발 , 현재는 아파치 재단의 최상의 프로젝트로 관리
- Workflow Managment Tool

# WorkFlow

- 편의점에서 물건을 구매한다고 가정
    1. 편의점에 들어가기
    2. 물건 담기 - 물건을 담는 순서는 상관이 없다.
        - 라면 담기
        - 사이다 담기
    3. 물건 계산
- 주의
    - 편의점에 들어가지 않으면 물건을 고를 수 없음
    - 물건을 고르지 않으면 계산할 수 없음
    
    ⇒ 이처럼 순서가 있는 과정을 **워크플로우**라고 함 
    
- 데이터 파이프라인 예시
    
    ```markdown
    1. Downloading Data
    2. Processing Data
    3. Storing Data
    ```
    
    - 매일 밤 12시에 트리거
    - 위의 Task들은 실행 순서가 Sequential함이 보장되어야 함
    - 각각의 Task는 서로 다른 외부 Tool과 interaction 필요
    
    ```markdown
    1. Data Download : API Request -> 외부 API
    2. Data process : Spark Job
    3. Data store : Insert/Update -> 외부 DB
    ```
    
    - Sequential하게 실행되기 위해서는 모든 Tool이 정상적으로 작동해야 함
    - 하나라도 문제가 생길 경우? 이러한 파이프라인이 많아진다면?
    
    ### ⇒Airflow를 사용하는 이유
    
    수많은 데이터 파이프라인을 안정성 높은 방식으로 관리, 실행, 모니터링할 수 있도록 도와준다. 
    

---

## Airflow VS Luigi

- 워크플로우 관리 플랫폼에는 Luigi, kubeflow, Argo, Mlflow 등이 있음

![Untitled](https://user-images.githubusercontent.com/97663140/169858506-7b84f77e-87b8-4cbc-b20f-451191a78a78.png)

- 가장 대중적으로 사용하는 것은 Airbnb에서 개발한 Airflow와 spotify에서 개발한 Luigi
- 루이지는 복잡한 API로 에어플로우보다 유연한 사용, 하지만 cron 사용하여 확장성 낮음
    - cron : 소프트웨어 유틸리티 **cron**은 유닉스 계열 컴퓨터 운영 체제의 시간 기반 잡 스케줄러
     소프트웨어 환경을 설정하고 관리하는 사람들은 작업을 고정된 시간, 날짜, 간격에 주기적으로 실행할 수 있도록 스케줄링하기 위해 cron을 사용
- 에어플로우는 사이즈에 따라 로컬 뿐아니라 쿠버네티스, Celery를 사용하여 외부에서 실행가능( 확장성 높음)


# Airflow의 장점

## Dynamic Data Pipeline

- 데이터파이프라인을 정의하는 데에 Python 사용
- 파이썬으로 가능한 대부분의 작업들을 airflow 파이프라인에서 처리 가능

## Scalability

- 매우 뛰어난 확장성
- 원하는 만큼 다양한 Task들을 병렬적으로 실행이 가능
- 쿠버네티스 클러스터, 분산 클러스터 환경에서도 파이프라이닝 가능

## Useful User Interface

- Airflow Webserver에서 제공하는 웹 인터페이스를 통해 데이터 파이프라인을 모니터링, 관리하기 편함

## High Extensibility

- Airflow Instance에 Plugin 설치 가능 → Customizing 용이


# 구성 요소

![Untitled 1](https://user-images.githubusercontent.com/97663140/169858515-e7bcd9ee-c9fa-4903-ae12-9fdd2d8f9a1e.png)

- **Scheduler**
    - Workflow를 스케줄링하는 스케줄러 데몬
        - 데몬(daemon) : 백그라운드에서 돌면서 여러 작업을 하는 프로그램
    - Airflow에서 가장 핵심이 되는 컴포넌트
- Web  Server
    - Airflow의 웹 인터페이스를 제공하는 웹 서버
    - Flask와 Gunicorn 이용하여 인터페이스 제공
- MetaSore(MetaDB)
    - 메타데이터가 저장되는 데이터베이스
    - 주로 Postgresql 추천, 하지만 SQL Alchemy 호환 가능한 MySQL이나 SQLite 이용 가능
- **Executor**
    - 어떤 환경에서 Task가 실행(Execute)될지에 대한 타입 정의
    - Debug Executor, Local Executor, Sequential Executor, Celery Executor,…
- **Worker**
    - 실제 Task를 처리하는 컴포넌트
    - Executor는 어떻게 실행될지 정의, Worker는 실제 프로세스 작업
    

# Airflow의 잘못된 용도

- Data Streaming Solution
    - 초단위(혹은 더 짧은 주기) 데이터 처리가 필요한 경우, 스트리밍 용도로 에어플로우를 사용하기는 부적절
- Data Processing Framework
    - 에어플로우는 데이터 프로세싱에는 이용하지 않는 것이 좋음.
        
        → 그런 작업에 최적화 되지 않아 매우 느리고, 메모리 부족으로 작업이 진행되지 않을 수 있다.
        
        → SparkSubmitOperator와 같은 Operator를 이용하여 데이터 프로세싱은 Spark와 같은 외부 Framework로 처리 , Airflow는 오케스트레이션만 진행하는 방식으로 주로 사용한다. 
        

### 참고 문헌

[https://velog.io/@jjongbumeee/Airflow1#airflow의-정의](https://velog.io/@jjongbumeee/Airflow1#airflow%EC%9D%98-%EC%A0%95%EC%9D%98)

[https://blog.kmong.com/복잡한-스케줄-airflow로-쉽게-관리하기-71ccf026b5fe](https://blog.kmong.com/%EB%B3%B5%EC%9E%A1%ED%95%9C-%EC%8A%A4%EC%BC%80%EC%A4%84-airflow%EB%A1%9C-%EC%89%BD%EA%B2%8C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0-71ccf026b5fe)

[https://ko.wikipedia.org/wiki/Cron](https://ko.wikipedia.org/wiki/Cron)

[https://miss-flower31.tistory.com/entry/작업-스케줄러에-데몬-프로그램-띄우기](https://miss-flower31.tistory.com/entry/%EC%9E%91%EC%97%85-%EC%8A%A4%EC%BC%80%EC%A4%84%EB%9F%AC%EC%97%90-%EB%8D%B0%EB%AA%AC-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EB%9D%84%EC%9A%B0%EA%B8%B0)