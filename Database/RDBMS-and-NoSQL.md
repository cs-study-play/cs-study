현재 사용되고 있는 데이터베이스나 DBMS에는 여러 종류가 있다. 데이터베이스는 저장하고자 하는 데이터의 특성에 따라 선택해야하기 때문에 데이터베이스와 DBMS에 대해서는 미리 공부해두는 것이 좋다고 생각한다. 현재 널리 사용되고 있는 RDBMS와 NoSQL에 대해 알아보고자 한다.

<br><br>

## 데이터베이스와 DBMS

데이터베이스는 데이터의 집합으로, 데이터를 저장하는 저장소 그 자체를 의미한다. 이러한 저장소에 접근해 데이터를 저장, 수정하고 여러 사용자나 응용 프로그램이 데이터베이스를 공유할 수 있도록 관리하는 시스템이나 소프트웨어가 데이터베이스 관리 시스템(DataBase Management System)이다.

즉 여러 사용자가 데이터베이스를 이용할 수 있게끔 서비스하는 것이 DBMS이다. 데이터베이스와 DBMS라는 단어를 혼용해 사용하기도 하지만, 엄밀하게는 구분되는 개념이다.

DBMS는 사용하는 데이터 모델에 따라 여러 종류로 나뉜다. 계층형 DBMS(Hierarchical DBMS), 망형 DBMS(Network DBMS), 관계형 DBMS(Relational DBMS), 객체지향형 DBMS(Object-Oriented DBMS), 객체관계형 DBMS(Object-Relational DBMS), NoSQL DBMS, NewSQL DBMS 등의 DBMS가 존재한다.

발전 과정을 기반으로 나누어보면 아래와같이 분류할 수도 있다.

1세대 : 네트워크형, 계층형 DBMS<br>
2세대 : 관계형 DBMS<br>
3세대 : 객체지향형, 객체관계형 DBMS<br>
4세대 : NoSQL, NewSQL DBMS<br>

<br><br>

## RDBMS(Relational DBMS)

우리가 살펴볼 RDBMS는 2세대 DBMS인 관계형 DBMS이다. 여러 데이터베이스중에서도 관계형 데이터 모델을 사용하는 RDB(Relational Database)를 관리하는 소프트웨어이다. RDB는 아래의 그림과 같이 데이터를 2차원 형태의 테이블로 표현하며 현재까지도 널리 사용되고 있다.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Relational_database_terms.svg/525px-Relational_database_terms.svg.png">

출처: https://ko.wikipedia.org/wiki/%EA%B4%80%EA%B3%84%ED%98%95_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4

<br>
RDBMS는 데이터를 테이블로 표현하는 관계형 데이터 모델을 사용하기 때문에 이해하기 쉽고 유지, 보수가 용이하다. 또한 여러 테이블간의 관계를 이용하기 편리한데, RDBMS는 이러한 관계를 나타내기 위해 기본키, 외래키 등을 사용한다. 여러 테이블을 join해서 사용할 수 있기때문에 불필요하게 데이터를 중복 저장하는 일을 방지할 수 있다는 점 또한 RDBMS의 큰 장점이다.

다만 컴퓨터 자원을 많이 필요로하며 성능 향상을 위해서는 그만큼 많은 비용이 든다는 단점이 있다. 또한 테이블의 구조를 미리 정해두어야 하기때문에 구조를 정하기 어려운 데이터를 저장할 때에는 비효율적이기도 하다.

우리가 흔히 알고있는 RDBMS로는 Oracle, MySQL, DB2, MS SQL Server 등이 있다. 이러한 RDBMS를 조작하기 위한 위한 표준 질의어가 SQL이라는 점은 여기에선 참고만 해두자.

<br><br>

## NoSQL

NoSQL은 Not Only SQL이란 의미(SQL을 RDBMS로 이해해도 무방)로 RDB와는 다른 형태의 데이터 모델을 저장하는 데이터베이스이다. SNS 등의 발달로 인해 동영상, 이미지, 검색 로그 등과 같은 비정형 데이터를 저장해야하는 일이 많아졌고, 이러한 변화는 NoSQL DBMS가 주목받게 되는 배경이 된다.

RDBMS는 여전히 많이 사용되는 데이터베이스 관리 시스템이다. 그러나 빠른 속도로 증가하는 대량의 비정형 데이터를 처리하기에 RDBMS는 비효율적이다. 성능 향상을 위해 하드웨어에 막대한 비용을 투자해야하며, 비정형 데이터를 테이블 구조에 맞추어 저장하는 일 또한 번거롭기 때문이다. 이러한 이유로 NoSQL이 점점 널리 사용되기 시작했다.

NoSQL은 데이터 구조를 미리 정해두지 않아 비정형 데이터를 저장하기에 용이하고, 분산 처리가 가능해 확장성이 좋다는 장점이 있다. 확장성이 좋다는 것은 하드웨어의 성능을 위해 큰 비용을 지불하지 않아도 된다는 의미이므로, 비용적으로도 효율성이 좋다.

NoSQL은 대량의 비정형 데이터를 빠르게 저장하기에는 좋지만, 데이터의 안전성이나 일관성을 유지하기에는 적절하지 않을 수 있다. 데이터가 중복 저장될 수 있기때문에 하나의 데이터를 수정할 때 중복된 모든 데이터를 수정해야하는데, 문제가 생길 경우 데이터의 일관성을 유지할 수 없게 된다.

NoSQL는 데이터 저장 방식에 따라 또 여러 유형으로 나뉜다. json 등의 document를 key와 함께 사용하는 Document Store, key와 value의 쌍으로 데이터를 저장하는 Key-Value Store, 테이블, 로우, 컬럼 등을 사용하는 Wide-Column Store, 그래프 구조를 이용해 데이터를 저장하는 Graph Store 등이 있다.
<img src="https://docs.microsoft.com/ko-kr/dotnet/architecture/cloud-native/media/types-of-nosql-datastores.png">
<br>
출처: https://docs.microsoft.com/ko-kr/dotnet/architecture/cloud-native/relational-vs-nosql-data

<br>
우리에게 익숙한 MongoDB는 Document DB, Redis는 Kye-Value DB로, NoSQL의 한 종류이다.

<br><br>

## RDBMS vs NoSQL DBMS

결론적으로 두 데이터베이스, 그리고 DBMS는 장단점이 명확하다. 따라서 사용하고자 하는 목적이나 저장하고자 하는 데이터의 특성에 따라 적절히 선택해 사용하면 된다.

RDBMS는 데이터 구조에 변화가 적은 정형데이터를 이용하며 데이터의 안정성과 일관성을 유지하고자 할 때 적합하고, NoSQL은 대량의 비정형 데이터를 빠른 속도로 저장하고자 할 때 사용하기 적합하다.

<br><br>

## 참고

데이터베이스 개론(2판), 김연희, 한빛아카데미 , 2019

https://khj93.tistory.com/entry/Database-RDBMS%EC%99%80-NOSQL-%EC%B0%A8%EC%9D%B4%EC%A0%90
