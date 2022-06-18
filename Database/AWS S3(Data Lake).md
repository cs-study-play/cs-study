# AWS S3(Data Lake)

## AWS S3

### 1. S3 용어

- **S3**
    - Amazon의 가장 대표적인 빅데이터 저장소
    - 저장 공간에 구애받지 않고 저장
    - 자동으로 백업 가능
    - 사용자는 Data Catalog 혹은 대화식 쿼리를 통해 직접 S3의 데이터를 조회할 수 있을 뿐만 아니라, Lambda 함수를 이용해 필요한 데이터를 가공/변환도 가능하다.
    - Lambda 함수 덕분에 S3 데이터를 확보하기 위한 별도의 ETL을 구성할 필요가 없다.
- **버킷** : 객체들이 모여있는 컨테이너를 버킷이라 부르며 가장 높은 수준의 네임 스페이스 역할을 한다.
- **객체** : 데이터가 저장되는 단위, 데이터와 키 그리고 메타데이터로 구성

### 2. S3 아키텍처

1. **Back-End 자동화 ← AWS Lambda**
    - 프로그램 부하 정도에 따라 자동으로 리소스 할당, 확장 혹은 축소를 진행하며 Data Lake를 관리
    - serverless로 인프라에 대한 투자가 불필요 하고 초기 비용없이 이용한 만큼 지불해서 사용
    
2. **데이터 Self-Service Layer ← AWS Glue, Amazon Athena**
    - **Data Catalog/ETL**은 **AWS Glue**를 통해 수행되며 사용자가 필요 데이터를 검색하고 확보할 수 있는 Data Catalog와 데이터 엔지니어가 ETL을 통해 Data Pipline으로 구성하는 기능으로 구성
    - **대화식 쿼리**는 **Amazon Athena**를 통해 수행하며 사용자가 Amazon S3 객체 저장소의 데이터를 표준 SQL를 이용하여 조회하고 신규 테이블을 생성하여 데이터를 입력, 다시 Data catalog에 배포 가능
    
3. **데이터 적재 Layer ← Lambda 함수**
    - 수집한 원천 데이터 또는 사용자가 대화식 쿼리를 통해 가공한 데이터를 모두 저장 보관(Amazon  A3)
    - 메타데이터를 적재하여 Data Catalog에 서비스 수행(Amazon DynamonDB)
        - Amazon DynamonDB : 메타데이터 저장소, 문서 및 key-value 기반의 NoSQL 데이터베이스
        
4. 솔루션 운영 Layer ← **IAM Roles, Elasticesearch Service, CloudWatch, CloudWatch Logs**
    - **권한 관리 기능** : **AWS** **IAM Roles**를 통해 수행
    - **검색/모니터링 DB 기능** : 시각화 대시보드를 제공하는 **Amazon Elasticesearch Service**를 통해 수행, 범용적인 용도로 활용하기 용이 하며 온프레미스로 구현된 하둡과 Hybrid Cloud로 구현되어 있을때 모니터링을 위한 목적으로 활용
    - **솔루션 모니터링 기능** : **Amazon CloudWatch**를 통해 수행, 필요한 기능이 미리 구현되어 있어 Elasticsearch에 비해 편리
    - **통합 로그 기능** : **Amazon CloudWatch Logs**를 통해 수행, 로그데이터 통합 관리, 이상 패턴 감지 및 알림 메시지 전송, 로그 시각화, CloudWatch와 Elasticesearch는 전반적인 모니터링을 한다면, CloudWatch Logs은 세부적인 이상 현상 감지 용도로 활용
    

### 3. S3 활용

- 주로 실시간 스트리밍 및 대량의 데이터를 적재할 때 많이 사용
- 정확한 형태를 알 수 없는 데이터를 수집할 때 유용하게 활용 가능
- Raw Data로 저장되기 때문에 분석이나 인공지능 활용에 더 유리

[참고] 도서 - *Data Lake 플랫폼 아키텍처 by 윤선웅*

[S3 비용참고] ([https://aws.amazon.com/ko/s3/pricing/](https://aws.amazon.com/ko/s3/pricing/))