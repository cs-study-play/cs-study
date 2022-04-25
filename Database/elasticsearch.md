# elaticsearch

가끔 이걸 얘기하는 분들이 있길래 궁금해서 정리해보기로 했음 

# Elasticsearch란?

Elasticsearch는 텍스트, 숫자, 위치 기반 정보, 정형 및 비정형 데이터 등 모든 유형의 데이터를 위한 무료 검색 및 분석 엔진으로 분산형 및 개방형을 특징. Elasticsearch는 Apache Lucene을 기반으로 구축.

# 장점

1. 오픈소스 검색 엔진이기 때문에 무료로 사용 가능하다.
2. 오픈소스의 장점처럼 많은 전문가들이 버그에 빠르게 대응한다.
3. 방대한 양의 데이터를 신속하게 처리가 가능하다.

# 단점

1. 진입장벽이 있다.
2. 문서 간의 조인을 수행할 수 없다. (두 번 쿼리로 해결은 가능)
3. 트랜젝션이 제공되지 않는다.

# 왜 사용하는가?

DB 설계, 개발 후 작동 과정에서 처음에는 문제가 없다가 사용이 진행됨에 따라 서버 성능, DB 설계의 문제나 DB 최적화가 되어있지 않아 서비스가 느려지는 현상을 경험하게 된다. 그 결과 관계형 데이터 베이스에 최적화하기 위해 인덱싱을 하게 되고 이 점은 굉장히 중요한 작업이며 어떻게 인덱싱을 하냐에 따라 퍼포먼스가 달라진다.

엘라스틱서치 역시 데이터에 다양한 규칙으로 최적화된 인덱싱을 처리할 수 있어서 검색에 빠른 성능을 보인다. 또한 관계형 데이터베이스와 엘라스틱서치의 데이터는 저장되는 구조가 다르다. 

![Untitled](https://user-images.githubusercontent.com/97663140/165108410-b544b2a0-e1ec-465b-aebd-71c880d48323.png)


관계형 데이터베이스가 document 중심이라면 elasticsearch는 텍스트 중심이다. 봉준호를 검색할 경우 관계형 데이터베이스는 doc를 하나하나 확인하며 데이터위치를 찾지만 엘라스틱 서치는 바로 데이터를 찾아낸다. 

하지만 위에서 언급했듯 여러 단점이 있기 때문에 데이터 자체를 엘라스틱서치로 저장하는 것은 문제가 있다. 그래서 저장은 관계형 DB를 베이스로하고 검색만 엘라스틱서치로 진행하는 것이 대부분이다. 

# elasticsearch에 데이터 넣기 - logstash

![Untitled 1](https://user-images.githubusercontent.com/97663140/165108405-0e1cc5b0-d1db-43c3-a99f-7116983fb648.png)


베이스 데이터와 엘라스틱 서치가 따로라면 엘라스틱서치에 데이터를 넣어줄 담당이 필요하다. 대표적인 것으로는 Logstash가 있다. logstash는 mysql,mongodb모두 지원하긴 하지만 mongodb는 자료가 적다고 한다. 

 (mongoDB로 elasticsearch에 데이터를 넣기 위해 최적의 서비스는 monstache가 있다고 한다.) 

출처

[https://sudarlife.tistory.com/entry/Elasticsearch-간단-개념-장단](https://sudarlife.tistory.com/entry/Elasticsearch-%EA%B0%84%EB%8B%A8-%EA%B0%9C%EB%85%90-%EC%9E%A5%EB%8B%A8)
