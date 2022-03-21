# NoSQL 데이터 모델링

## 1. NoSQL 데이터 모델링 특징

### 1. Denormalization(비정규화)

- 데이터의 중복을 허용하는 방식이다.
- 쿼리 수행을 간단하게 하고 최적화 하기 위해서 같은 데이터를 여러 Document Table에 복제 중복 허용한다.
- 중복 저장되므로 전체 데이터 사이즈가 증가하는 단점이 있지만 NoSQL은 수평적 확장성이 좋기 때문에 크게 문제 되지 않는다.
- 비정규화시 쿼리당 I/O 횟수 감소, 쿼리 데이터 사이즈 감소, 쿼리 수행 복잡도 감소하는 장점을 가진다.

### 2. Aggregation(집계)

- Scheme-less의 특성을 사용하면 다양한 구조의 내부 요소를 가지고 있는 데이터들을 하나의 테이블로 유연하게 합칠수 있다.
    
     
    
    ![1](https://user-images.githubusercontent.com/97429679/159350396-4f396c18-152c-4610-bd0d-b93b851844f9.png)
    
- 일대다의 관계를 최소화하여 Join 연산을 줄임으로써, 쿼리 수행시간을 단축할수 있으며 복잡하고 다양한 비즈니스 요소를 담을수 있기때문에 추후에 변동사항에 유연하게 대처 가능하다.

### 3. Application Side Join

- Join 연산을 지원하는 제품도 있지만 대용량 데이터에 대한 빠른 응답 성능과 확장성, 가용성이 최우선의 목적으로 하기때문에 Join 연산을 최대한 피하여 모델을 구성한다.
- 그러나 불가피하게 Join을 수행해야 할경우가 있다. 예를들어, 이미 비정규화와 Aggregation을 통해 많은 데이터들의 중복을 허용한 상황에서 데이터가 수시로 업데이트 되는 경우, 모든 중복된 데이터들을 찾아서 업데이트해야하는 문제가 발생한다. 이럴경우 차라리 변경이 잦은 데이터만을 추려내어 Join 연산을 수행하는것이 낫다.
- Join을 수행하기 위해 RDBMS를 이용하여 처리하거나, NoSQL의 목적을 헤칠수 있는 직접적인 내부에서 Join연산 처리를 하는것이 아닌 Application을 따로 이용하여 Join연산을 처리할수 있다.
    
    ![2](https://user-images.githubusercontent.com/97429679/159350406-311de083-d21c-4663-9bf3-f27dc433234d.png)
    

## 2. NoSQL 데이터 모델링 기법

### 1. 일반 모델링 기술

1. **Composite key** 
    - 하나 이상의 필드를 : (콜론)을 이용하여 구분지어 사용하는 방법으로 여러개의 키를 묶어서 복합적인 키를 만드는 방법이다. 특히 Ordered KV Store의 경우에는 이를 이용하여 order by와 같이 정렬과 그룹핑을 구현할수 있다.
        
        ![3](https://user-images.githubusercontent.com/97429679/159350411-94142945-4d77-4614-9022-01ee18414b76.png)
        
    - Key를 기준으로 서버에 골고루 분산되어 저장되는데, 이러한 키를 가지고 정렬과 그룹핑을 할수 있으므로, 빠르게 원하는 데이터를 얻을수 있다.
    
2. **Inverted Search Index**
    - value의 내용을 key로 하고 key의 내용을 value로 하는 방법이다.
    - 검색 엔진에서 주로 많이 사용하는 방법이다. 검색엔진은 사이트의 모든 페이지를 검색 로봇이 검색해서 문서내의 단어들을 색인하여 URL에 맵핑하여 검색 Key로 저장해 놓는다.
        
        ![4](https://user-images.githubusercontent.com/97429679/159350418-fa5128e1-17f6-4aa6-9523-d24aaac93e42.png)
        
        그러나 우리는 검색을 할때 URL을 통해서 하는것이 아니라, 검색 키워드를 통해 원하는 정보를 찾는다. 그렇기때문에 이러한 구조는 효과적인 검색을 불가능하게 한다.
        
        ![5](https://user-images.githubusercontent.com/97429679/159350427-1ea99821-7cc3-436f-aa4b-2f2d8d6bf8de.png)
        
        그래서 검색 키워드를 key로 하고, URL을 value로 하는 테이블을 다시 만들어 효과적이며 빠르게 정보를 찾을수 있게한다. 
        

### 2. 계층 모델링 기술

- NoSQL를 보면 겉으로는 key : value 구조이지만 내부적으로는 row와 column을 가지고 있는 테이블 구조이다. 그리고 개발도중 이러한 테이블을 구조뿐만 아니라 계층형 데이터 구조를 저장해야할 경우가 있다. 그러나 이러한 계층형 구조를 저장하는 것이 쉽지않다. 그래서 RDBMS에서 사용하는 기법들을 참고하여 구현한다.

1. **Tree Aggregation**
    - Tree 구조 자체를 하나의 value에 저장하는 방식이다. JSON이나 XML등을 이용하여 트리구조를 정의하고 Value에 저장한다.
        
        ![6](https://user-images.githubusercontent.com/97429679/159350435-5c005bb3-38a4-4022-89c8-738423e97f87.png)
        
    - 위의 구조를 보면 댓글안에 Mike와 Eliot가 value로 들어가고 또 Mike안에 Sam이 value로 들어가는것을 볼수 있다. 이렇게하면 손쉽게 계층형 구조를 작성할수 있지만 댓글이 삭제되는 경우 연산이 복잡해 질수가 있다. 그래서 Tree 자체가 크지 않고 변경이 많이 없는 경우에 적용하는 것이 좋다.

1. **Materialized Paths**
    - Tree 구조를 테이블에 저장할때 root에서 부터 현재 노드까지 전체 경로를 key로 저장하는 방법이다. key에 대한 검색을 할때 정규표현식을 사용할수 있으며, 특정 노드의 하위 트리등을 쿼리해 오는 기능등 다양한 쿼리가 가능하다.
        
        ![7](https://user-images.githubusercontent.com/97429679/159350442-b79b9b9b-c7f4-4f01-97b6-525405e82d61.png)
        

## 3. NoSQL 데이터 모델링 절차

### 1. 도메인 모델 파악

- 어떤 데이터 개체가 있는지 개체간의 관계분석을 하고 ERD를 그려 도식화 한다.
- 해당 부분은 RDBMS 모델링 접근 방법이긴 하지만 NoSQL도 저장할 데이터를 명확하게 이해하기 위해 필수로 진행되어야 하는 절차이다.
    
    ![8](https://user-images.githubusercontent.com/97429679/159350444-b25a16f3-4fc2-47f8-afb5-8bed058480c4.png)
    

### 2. 쿼리 결과 디자인

- 도메인 모델을 기반으로 애플리케이션에서 쿼리가 수행되는 결과값을 먼저 정한다.
    
    ![9](https://user-images.githubusercontent.com/97429679/159350452-43f10d68-5b85-4a61-8b37-463776178584.png)
    
- 출력 형식을 기반으로 필요한 쿼리를 정의한다.
- 출력 데이터를 기반으로 테이블 추출한다.
    
    ![11](https://user-images.githubusercontent.com/97429679/159350464-ba1d1c40-cdc9-4064-a4e2-e287de90736e.jpg)
    

### 3. 패턴을 이용한 데이터 모델링

- Get과 Put만으로 데이터를 처리할수 있는 형태로 데이터 모델을 재정의한다.
    
    ![10](https://user-images.githubusercontent.com/97429679/159350460-e4f9f81e-4887-4009-b359-d59bf3e85a68.jpg)
    

### 4. 기능 최적화

- 첨부 파일은 포스팅에 의존적이고 변경이 적고 갯수도 많지 않아서 하나의 필드에 모아서 저장하는 것이 낫다.
- 포스팅이 순서대로만 출력 가능하므로 포스팅에 분류 필드를 넣어 분류에 따라 검색할수 있게 한다.(Secondary Index)
    
    ![12](https://user-images.githubusercontent.com/97429679/159350478-e69a1181-4bfc-4e9c-a364-5ab944d166b3.jpg)
    
- attach 컬럼이 추가 되었으므로 기존의 attachment 테이블은 삭제한다.

### 5. NoSQL 선정 및 테스트

- 모델링한 데이터 구조를 효과적으로 실행할수 있는 NoSQL을 찾기위해 각각의 솔루션의 특성을 분석하고 부하테스트, 안정성 및 확장성 테스트를 수행한다.
- 하나의 NoSQL만으로 사용하지 않고 RDBMS와 혼용해서 사용하거나 다른 NoSQL을 연동하여 최적의 시스템을 설계할수 있다.

### 6. 선정된 NoSQL에 최적화 및 하드웨어 디자인

- 선정된 NoSQL을 기반으로 데이터 모델을 최적화하고, 이에 맞는 애플리케이션 인터페이스 설계오 구동할 하드웨어를 디자인한다.

## 5. 결론

- NoSQL 시스템 개발시, 80%이상을 차지하는 데이터 모델링은 가장 중요한 파트라고 할수 있다.
- 애플리케이션 특성에 맞는 데이터 모델링을 하고 그에 맞는 NoSQL을 잘 선정하는 것이 중요하다.

참고 - [https://highlyscalable.files.wordpress.com/2012/02/materialized-paths2.png](https://highlyscalable.files.wordpress.com/2012/02/materialized-paths2.png)

참고 - [https://bcho.tistory.com/666?category=431293](https://bcho.tistory.com/666?category=431293)

참고 - [https://bcho.tistory.com/665?category=431293](https://bcho.tistory.com/665?category=431293)

참고 - [https://www.youtube.com/watch?v=oUjpMJNtfYE](https://www.youtube.com/watch?v=oUjpMJNtfYE)
