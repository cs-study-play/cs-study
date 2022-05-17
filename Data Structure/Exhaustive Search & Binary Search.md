# 📚 완전탐색 & 이분탐색

--------
- 탐색 : 많은 데이터 속에서 원하는 데이터를 찾는 것으로 웹에서 특정 문자를 가진 웹 문서를 찾거나 신용카드나 버스카드 역시 검색 알고리즘을 사용한다.
- 탐색의 종류 : 완전탐색, 이분탐색, 깊이우선탐색(DFS), 너비우선탐색(BFS), 문자열탐색, KMP, BM 
## 📌완전탐색 (Exhaustive Search) 
- 브루트 포스(Brute Force)라고도 하고 가능한 모든 경우의 수를 다 구해서 값을 찾는 것을 완전탐색이라고 합니다. 결과 값이 가장 확실하지만 그만큼 시간이 가장 오래걸리는 탐색방법입니다.
- 완전탐색 구현방법 : 반복문, 재귀함수(동적 계획법, 백트래킹, 탐욕법)
```python
## 반복문으로 구현
def solution(trump):
    for i in range(len(trump)):
    if trump[i] == 8 :
        return i
    return -1
```
```python
## 재귀함수로 구현
def solution(trump, loc):
    if trump[loc] == 8 :
        return loc
    else :
        return solution(trump, loc+1)
```

## 📌 이분탐색 (Binary Search)
데이터가 정렬❗되어 있는 배열에서 특정한 값을 찾아내는 것을 이분탐색이라고 합니다. 배열의 중간에 있는 임의의 값을 선액하여 찾고자 하는 값 X와 비교를 합니다. X가 중간 값보다 작으면 중간 값을 기준으로 좌측의 데이터들을 대상으로, X가 중간값보다 크면 배열의 우축을 대상으로 다시 탐색을 하면서 해당값을 탐색합니다.
ex) updown 게임

```python
def solution(trump):
    left = 0
    right = len(trump)-1

    # left가 right보다 작거나 같다면
    while(left<=right):
        mid = (left+right) // 2  # mid 값 계산
    if trump[mid] == 8:
        return mid  # 정답일 경우 정답 반환
    elif trump[mid] < 8:
        left = mid + 1  # 정답보다 작을 경우 left를 mid+1로 이동
    elif trump[mid] > 8:
        right = mid -1  # 정답보다 클 경우 right를 mid-1로 이동

    return mid
```
   
## 참고🔍
[참고1](https://velog.io/@sxxzin/Python%EC%99%84%EC%A0%84%ED%83%90%EC%83%89%EC%9D%B4%EB%B6%84%ED%83%90%EC%83%89)