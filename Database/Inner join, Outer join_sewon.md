## 🎯 Join(조인) 이란? 🎯

```
여러 테이블에 흩어져 있는 정보 중 사용자가 필요한 정보만 가져와서 가상의 테이블 처럼 만들어서 결과를 보여주는 것으로 
2개의 테이블을 조합해서 하나의 열로 표현하는 것이다.
```

### 💎 Join의 종류 💎


1. **Inner Join**

2. **Cross Join**

3. **Outer join**

4. **Self join**



오늘은 이 중에서 1번의 Inner join과 3번의 Outer join에 대해 알아볼 것이다.

<hr>

#### 1️⃣ Inner join (내부 조인)



- 키 값이 있는 테이블의 컬럼 값을 비교 후 조건에 맞는 값을 가져오는 것.

- 서로 연관된 내용만을 검색하는 조인 방법

- 교집합으로 생각하면 이해가 쉬움

![image](https://user-images.githubusercontent.com/55613591/169843807-960c6c8c-c2f9-46c6-8008-1cc28081baf4.png)

<br>

#### 2️⃣ Outer join (외부 조인)



- 조인 하는 여러 테이블에서 한쪽에는 데이터가 있고 한 쪽에는 데이터가 없는 경우, 데이터가 있는 쪽의 테이블의 내용을 전부 출력

- 조인 조건에 만족하지 않아도 해당 행을 출력하고 싶을 때 사용

- Outer join 에는 다시 3가지 종류가 있음 (Left outer join, Right outer join, full outer join)

<br><br>

**i ) Left outer join**

- 조인문의 왼쪽에 있는 테이블의 모든 결과를 가져온 후 오른쪽 테이블의 데이터를 매칭하고, 매칭되는 데이터가 없는 경우 NULL을 표시

![image](https://user-images.githubusercontent.com/55613591/169843834-f4d89e80-cc27-40ca-bca1-65cd6223255e.png)


**ii ) Right outer join**

- 조인문의 오른쪽에 있는 테이블의 모든 결과를 가져온 후 왼쪽의 테이블의 데이터를 매칭하고, 매칭되는 데이터가 없는 경우 NULL을 표시

![image](https://user-images.githubusercontent.com/55613591/169843860-0ecdabda-8c24-4320-93d7-b36ae51baf4a.png)


**iii ) Full outer join**

- LEFT OUTER JOIN과 RIGHT OUTER JOIN을 합친 것

- 양쪽 모두 조건이 일치하지 않는 것들까지 모두 결합하여 출력 (전체 출력)

![image](https://user-images.githubusercontent.com/55613591/169843874-ccd0e8e2-2e7e-4c04-9591-fb0bf332ee08.png)






<참고 문헌>

https://jhkang-tech.tistory.com/55﻿
