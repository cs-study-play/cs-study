# RDBMS vs NoSQL

## RDBMS(관계형 데이터베이스) vs NoSQL(분산형 데이터베이스)

### 1. 고정된 스키마 vs 비고정 스키마

![SQL-Vs-NoSQL1](https://user-images.githubusercontent.com/97429679/158250029-63ca4a12-2a93-4cce-83d5-b8779ebf76bf.png)

[https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/](https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/)

- 스키마란?
    - 데이터베이스의 구조와 제약 조건에 관한 전반적인 명세를 기술
    
- 고정된 스키마
    - 행과 열로 데이터들이 테이블에 저장되는 구조화 된 형식
    - 식별자인 기본키를 통해 다른 테이블과 join 가능
    - 메모리내 데이터와 관계형 모델의 데이터 불일치
        - 데이터베이스에 메모리데이터(리스트, 딕셔너리, 중첩된 객체 구조등등 )들을 저장할려면 형식을 변환해야하는 불편함
- 비고정 스키마
    - 구조화 되지 않은 형식으로 문서 지향, 열 지향, 그래프 기반등 다양한 방식으로 저장 가능
    - 테이블들의 join은 쉬운작업이 아니며 오히려 성능을 저하시킬 가능성 존재
    - 메모리내의 데이터가 어떤 구조인지 상관하지 않고 집합으로 취급하여 저장
        - 객체 관계 매핑이 필요하지 않음

### 2. Use SQL vs Not Only SQL

- SQL(Structured Query Language)이란 ?
    - 관계형 데이터베이스를 관리하기 위해 가장 많이 사용되고 있는 언어
    
- Use SQL
    - SQL를 이용하여 데이터구조를 정의하고 , 데이터를 조작 및 제어
    - 이를 위한 사용자인터페이스 도구와 인프라가 잘 구축되어 사용자가 데이터를 이해하는데 수월
- Not Only SQL
    - 데이터를 관리하는데 SQL 외에 다른 수많은 언어가 존재
    - MongoDB에서 사용하는 쿼리언어와 CouchDB에서 사용하는 쿼리언어는 SQL도 아니며 서로 전혀 다른 언어 사용
    - 사용자인터페이스 도구가 매우 적기때문에 사용자와 데이터간의 상호작용할수 있는 옵션이 많지 않고 이해하기 어려움
    

### 3. 수직적 확장 vs 수평적 확장

- 데이터와 트래픽의 증가로 성능향상이 더욱 필요

- 수직적 확장
    - RAM, CPU, SSD와 같은 항목을 늘리면서 하나의 서버의 몸집을 키워 성능을 향상시킴
    - 건물의 층수를 높이는 느낌
    - 하나의 서버에 많은 비용 발생
    - 시스템 일부가 고장나면 데이터베이스 사용할수 없는 문제점 발생
    - 일관성 유지 가능
- 수평적 확장
    - 더많은 서버를 추가하여 연관된 데이터들이 함께 분산시켜 많은 트래픽을 처리
    - 이웃에 더많은 건물을 추가하는 느낌
    - 작고 값싼 장비 여러대를 추가하는 것으로 비용 절감 가능
    - 시스템 하나가 고장나도 여러대의 시스템들이 돌아가므로 데이터베이스를 계속 사용 가능
    - 여러대에 분산되어 있으므로 어느시점에 일관성은 떨어 질수 있음
        
        

### 4. 결론

- 일관성이 보장되고 여러번의 조인연산이 필요한 회계시스템 또는 관계형 구조용으로 구축된 레거시 시스템은 RDBMS 사용 적합
- 방대한 양을 처리해야하는 콘텐츠 관리시스템, 빅데이터 애플리케이션, 실시간 분석등에는 NoSQL이 적함
- 데이터의 요구사항과 가용성에 따라 데이터베이스를 선택하는 것이 좋음

참조

[https://www.educba.com/rdbms-vs-nosql/](https://www.educba.com/rdbms-vs-nosql/)

[https://namu.wiki/w/NoSQL](https://namu.wiki/w/NoSQL) 

[https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/](https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/)
