# Data Warehouse
- 의사결정에 도움을 주기 위해 분석가능한 형태로 변환한 데이터들이 저장되어 있는 중앙저장소
- 트랜잭션 시스템, 기타 소스의 데이터들이 데이터웨어하우스로 들어감.
- 대규모 데이터의 분석작업을 처리하는 것에는 데이터웨어하우스가 필요. 
    - SQL은 작은 규모의 데이터를 조회, 삽입, 삭제, 수정하는 목적

![Snowflake_Modern_Data_Architectures](https://user-images.githubusercontent.com/97663140/171013817-fa9a7e14-d544-4bc6-8bd4-2037780d27aa.png)
# BigQuery
![img](https://user-images.githubusercontent.com/97663140/171013828-594af564-5153-4060-84c4-bb4c8492de41.png)
- 구글 내부에서 방대한 양의 SQL문을 통해서 분석하기 위해 개발한  Dremel이라는 프로젝트의 public implementaation
- 클라우스 서비스로 설치/운영 필요 없음
- 데이터 복제를 통한 안정성 (3copy로 분산되어 데이터 유실 위험이 적다)
- BigQuery가 빠른 성능을 보여주는 것은 Columnar Storage와 Tree 기반의 distribution 덕분

## Columnar Storage

![다운로드](https://user-images.githubusercontent.com/97663140/171013826-9462d8d8-3d84-40e1-9273-8aa7a88d432b.png)
- 일반적인 RDBMS는 레코드 단위로 데이터를 저장
- Dremel는 컬럼 단위로 데이터를 뜯어내어 저장

1. 트래픽 최소화 <br>
"select top from foo" 라는 쿼리가 들어왔다고 할때 컬럼 기반 방식에서는 해당하는 컬럼만 조회하기 때문에 데이터의 양이 방대해질수록 트래픽 최소화 효과가 극대화
2. Higher Compression Ratio
 컬럼 단위로 데이터를 저장한다고 할 때 압축하기가 더 용이하다고 함. 

 ## Tree Architecture Distribution
 - 수천대의 머신에 쿼리 연산을 분산시키기 위해 tree 구조 사용
 - 클라이언트의 SQL 쿼리문을 분석, 쪼개진 수많은 작은 단위의 쿼리문을 inttermediate servers에 전달 
 - 이 서버들은 다시 실제 연산 수행하는 리프 노드들에 전달
 - 쿼리의 결과 값으로 반환되는 값을 합쳐서 부모 노드에 전달

# BigQuery의 한계점
- 분석, OLAP에 특화되어 OLTP에는  부적합
    - olap: 온라인 분석 처리(online analytical processing) 의사결정 지원 시스템,  다차원 데이터 분석 지원
    - oltp: 온라인 트랜잭션 처리(online transaction processing)는 트랜잭션 관리 정보 시스템의 한 계열로서, 일반적으로 데이터 기입 및 트랜잭션 처리를 위해 존재
- 적은 양의 데이터를 계속해서 입력, 업데이트하는 작업은 오히려 성능이 떨어지는 모습







### 참고 문헌
https://yeomko.tistory.com/27
https://cloud.google.com/bigquery/docs/introduction?hl=ko
https://m.blog.naver.com/jesus4sk/221997296127