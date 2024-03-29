# 📚 해시(Hash)
--------


## 📌 해쉬란?
해시란 데이터를 다루는 기법 중에 하나며, 검색과 저장이 아주 빠르게 진행된다. 빠르게 진행이 되는 이유는 데이터를 검색할 때 사용할 key와 실제 데이터 값이 한 쌍으로 존재하고, key 값이 배열의 인덱스로 변환되기 때문이다.


## 📌 해시 함수(Hash Function) & 해싱(Hashing)
해시 함수는 Key값을 고정된 길이의 hash로 변환하는 역할을 한다.
해시 함수에서 Key값을 hash로 변환하는 과정을 해싱(hashing)이라고 한다.
해시 함수에서는 Key값을 해싱 과정을 통해 해시 값(hash value) 또는 해시코드(hash code)으로 변경하며, 이 해시 값이 저장 위치가 된다고 생각하면 된다.

서로 다른 키(key)가 같은 해시(hash)가 되는 경우를 해시 충돌(Hash Collision)이라고 하는데, 해시 충돌을 일으키는 확률을 최대한 줄이는 함수를 만드는 것이 중요하다.

## 📌 해시의 장단점
장점  
중복을 제거할 수 있다.  
데이터 캐싱, 보안에 주로 사용된다.  
배열의 인덱스로 접근하기 때문에 삽입, 삭제 등의 연산이 빠르다.  

단점  
공간 복잡도가 커진다.  
충돌이 발생할 수 있다. -> 충돌이 발생할 경우 시간 복잡도는 O(n)에 가까워진다.  
순서가 있는 배열에는 어울리지 않는다.  

## 📌 딕셔너리 활용
1. 딕셔너리 루프  
    * key값으로 접근 - keys()
    * value값으로 접근 - values()
    * 두개모두를 사용 - items()
2. 딕셔너리 정렬
    * sorted() 사용 - 항상 리스트가 반환 됨
    * keys, items, values를 활용해 오름차순과 내림차순을 결정

