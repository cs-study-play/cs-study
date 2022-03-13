# RDBMS VS NoSQL

## 용어정리

### database

- 체계적으로 정리된 데이터의 집합
- 종류에 따라 관리 시스템을 분류

### 스키마

- 데이터베이스를 구성하는 개체(Entity), 속성(Attribute), 관계(Relationship) 및 제약조건 등에 관해 전반적으로 정의한 메타데이터의 집합

### SQL

- Structured Query Language
- 관계형 데이터베이스에서 데이터를 적고 불러오는데 사용하는 데이터베이스용 프로그래밍 언어
- SQL을 이용하여 데이터를 가져오고 생성, 수정 등 다양한 행동 가능

# relational database (관계형 데이터 베이스)

- 행과 열로 이루어진 테이블 형태로 데이터를 저장
- 행과 열의 조합에 따라 데이터로의 식별과 데이터로의 접근이 다른 데이터의 관계 속에서 이루어지기 때문에 관계형 데이터라고 불림
- 정해진 스키마(schema)에 맞추어 작성해야 함
- SCOTT의 employ table들을 생각하면 이해가 쉬움

### 장점

- SQL이라는 구조화된 질의를 통해 데이터를 다룰 수 있음
- 작업의 완전성, 안정성 보장
- 트랜잭션(거래) 지원
- 데이터의 UPDATE가 빠름

### 단점

- 반드시 스키마 규격에 맞춰서 데이터를 다뤄야 함
- 데이터 처리에 대한 부하 발생 시, 처리가 어려움
    - 성능 향상을 위해 서버의 성능을 향상시켜야하는 Scale-up만을 지원
        
        → 비용이 기하급수적으로 증가 가능 
        

![Untitled](https://user-images.githubusercontent.com/97663140/158070851-9a828c1d-da3b-46f6-82a8-5918402fd03e.png)
![Untitled 1](https://user-images.githubusercontent.com/97663140/158070852-5fcb276d-c8a0-45a2-913b-4ab70e99a7f8.png)



# NoSQL

- 관계형데이터베이스와 다르게 데이터가 고정되어있지 않은 형태
- 저장하는 데이터에 타입에 더욱 적합한 방식으로 선택하여 구축 가능
- 정해진 스키마가 없어 융통적인 스키마 사용 가능
- Redis, Voldemort, Riak, Dynamo

### 장점

- 데이터 분산이 용이하여 성능 향상을 위한 Scale-up 뿐만이 아닌 Scale-out 또한 가능
- 특정 데이터 모델 및 액세스 패턴에 최적화되어 관계형 데이터베이스를 통해 유사한 기능을 충족하려 할 때보다 뛰어난 성능

### 단점

- 데이터 중복 발생 가능
    - 이 경우 수정을 모든 컬렉션에서 진행해야 함
- 데이터 구조 결정이 어려울 수 있음

### NoSQL1 - key-value store

![Untitled 2](https://user-images.githubusercontent.com/97663140/158070853-89761c2d-d065-4ead-a954-5405f13126f2.png)

- NoSQL 데이터베이스 중 가장 간단한 타입
- key-value 쌍을 속성으로 하는 배열 형태로 저장
- 높은 확장성 , 대량의 데이터 저장 가능

### NoSQL2 - Document store

![Untitled 3](https://user-images.githubusercontent.com/97663140/158070846-a236ed5e-7a90-4948-9ab5-6fdd5f6702dd.png)


- 문서형 데이터베이스
- 테이블이 아닌 문서처럼 저장 (주로 JSON 유사 형식)
- 스키마를 통해 지정될 수 있는 특정 문서 스타일로 저장 필요
    
    → key-value보다 한단계 높은 복잡성을 가진다고 할 수 있음 
    
- MongoDB, CouchDB

### NoSQL3 - Column-oriented database

![Untitled 4](https://user-images.githubusercontent.com/97663140/158070847-29bc5995-f48e-4ff7-abb2-7ce6e53ce3e3.png)
- 테이블 형태, 그러나 관계형 데이터베이스와 달리 행이 아닌 열에 대한 데이터 관리에 집중
- 하나의 column에 많은 데이터를 추가할 수 있다는 장점
- 주로 규모가 큰 데이터 분석에 사용
- 행 추가가 자주 일어날 것으로 예상되는 경우
- Cassandra, BigTable, HBase
- price의 평균값만 알고싶을 경우에 price 열만 보면 되기 때문에 효율적

### NoSQL4 - Graph database

![Untitled 5](https://user-images.githubusercontent.com/97663140/158070849-f83d9c2d-123c-4001-8f9c-f69d641e8319.png)


- 가장 높은 복잡도를 가짐
- 엔티티(entities)들간의 관계를 저장하는 것이 중요한 경우 사용
- 노드(node)와 간선(edge)이라는 주요 요소를 가짐
    - 노드 : 엔티티들 그 자체
    - 간선 : 두 노드간의 관계, 방향을 가질 수 있다.
- OrientDB, JanusGraph, Neo4J

## RDBMS VS NoSQL

- 어느 형식이 절대적으로 더 좋을 순 없지만, 사용하고자 하는 `서비스의 성향` 에 달려 있다.
- RDBMS
    - 데이터가 일관적인 형태, 예상 가능한 면이 클 때
    - ACID 성질을 준수해야 할 필요성이 클 때 (은행)
- NoSQL
    - 서비스 성격상 업데이트가 잦을 때
    - 정해진 데이터 구조가 없으면서 대용량의 데이터를 저장해야 할 경우

## ACID?

![Untitled 6](https://user-images.githubusercontent.com/97663140/158070850-c4e40945-d64b-4197-aebc-d4d4a9705b8f.png)


- 데이터베이스 트랜잭션(거래)이 안전하게 수행된다는 것을 보장하기 위한 성질을 가리키는 약어
- **원자성(Atomicity)**
    - 트랜잭션과 관련된 작업들이 부분적으로 실행되다가 중단되지 않는 것을 보장하는 능력
    - 은행의 경우, 계좌이체를 할때 출금계좌에서 출금과 입금계좌의 입금이 한 동작으로 이루어져야 하고 출금으로 끝나서 실패하면 안된다는 의미
    - 아예 실행 완료거나 아예 실행 실패거나 라는 의미
- **일관성(Consistency)**
    - 트랜잭션이 실행을 성공적으로 완료하면 언제나 일관성있는 데이터베이스 상태로 유지하는 것
    - 모든 계좌는 잔고가 있어야 한다 - 제약이 있을 시
        
        → 이를 위반하는 거래는 중단
        
- **독립성(Isolation)**
    - 트랜젝션을 수행 시 다른 트랜젝션의 연산 작업이 끼어들지 못하도록 보장
    - 트랜젝션 밖에 있는 어떤 연산도 중간 단계의 데이터를 볼 수 없음
        - 출금 후 입금이 되기 전의 상태를 볼 수 없다는 의미 같음
    - 트랜젝션 실행내역은 연속적이어야 함을 의미
    - 성능 관련 이유로 인해 가장 유연성 있는 제약 조건
- **지속성(Durability)**
    - 성공적으로 수행된 트랜잭션은 영원히 반영되어야 함
    - 시스템 문제, DB 일관성 체크등을 하더라도 유지되어야 함

출처

[[DB] Transaction 과 ACID란?. DB의 기초개념인 트랜젝션과 ACID에 대해서 알아봅니다. | by chrisjune | Medium](https://chrisjune-13837.medium.com/db-transaction-%EA%B3%BC-acid%EB%9E%80-45a785403f9e)

[ACID - 위키백과, 우리 모두의 백과사전 (wikipedia.org)](https://ko.wikipedia.org/wiki/ACID)

[[Database] (개념) 관계형 데이터베이스, NoSQL, NoSQL 종류 (tistory.com)](https://seo-tory.tistory.com/57)

[[Database] RDBMS와 NoSQL의 차이점 :: 히진쓰의 서버사이드 기술 블로그 (tistory.com)](https://khj93.tistory.com/entry/Database-RDBMS%EC%99%80-NOSQL-%EC%B0%A8%EC%9D%B4%EC%A0%90)

[[DB] RDBMS vs. NoSQL (velog.io)](https://velog.io/@janeljs/RDBMS-NoSQL)