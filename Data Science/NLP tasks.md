# NLP tasks

[10 Important NLP Tasks Commonly Used in Language Modeling](https://dev.to/amananandrai/10-important-nlp-tasks-commonly-used-in-language-modeling-3ppa)

1. Stemming(형태소 분석)
2. Name Entity Recognition (NER)
3. Text Classification(분류)

# 한국어 형태소 분석기

- **형태소 분석**이란 형태소를 비롯하여, 어근, 접두사/접미사, 품사(POS, part-of-speech) 등 다양한 언어적 속성의 구조를 파악
- **품사 태깅** 은 형태소의 뜻과 문맥을 고려하여 그것에 마크업을 하는 것.

`가방에 들어가신다 -> 가방/NNG + 에/JKM + 들어가/VV + 시/EPH + ㄴ다/EFN`

## KoNLPy 속 태거들

- Okt
- Komoran
- Kkma
- Mecab

→ 결론 : 맞춤법이 잘 지켜지고 띄어쓰기가 잘 되어있는 문장의 경우 모두 성능이 괜찮음 

→ 속도는 **Mecab**이 가장 빠름 , but 윈도우 작동 불가능 (해결 방법은 있는 듯 함)

![Untitled 1](https://user-images.githubusercontent.com/97663140/172177685-194f88b2-9623-4979-ad04-a4da49b24a80.png)
![Untitled](https://user-images.githubusercontent.com/97663140/172177700-fbd5f6dd-99e9-4baa-b6e4-9a86d9de4e89.png)

# NER(개체명 인식)

- 비정형 텍스트의 개체명 언급을 미리 정의된 카테고리(인명, 지명, 시간 등)으로 분류하는 것
- ‘미쓰에이 **수지**가 **용인 수지**에서 단독 공연을 개최하는 건 **수지**에 맞지 않는다고 한다.’라는 예시 문장이 있을 때, 각각의 수지는 인명, 지명 등으로 분류되어야 한다.
- NER을 활용하면 해당 단어가 어떤 카테고리인지에 따라 데이터를 보다 정교하게 분석 가능

## NER의 모델 구조

![Untitled 2](https://user-images.githubusercontent.com/97663140/172177692-64c2569c-a9fc-42d8-9257-0a7bc7c432a6.png)

1.    **Distributed Representations for Input***

인풋 데이터를 벡터 등으로 표현하는 층으로 Pre-trained word embedding, Character-level embedding, POS* tag,Gazetteer 등을 이용

1.  **Context Encoder**

문맥 정보를 인코딩하는 층으로 CNN*, RNN*, Language model*, Transformer* 등의 모델을 이용

1.   **Tag Decoder**

태그 정보를 디코딩하는 층으로 Softmax, CRF*, RNN, Point network 등의 모델을 이용

## NER 관련 라이브러리

- 한국어에만 특화된 NER 라이브러리는 찾기 힘들고, 다국어 학습 모델에서 찾을 수 있음

![Untitled 3](https://user-images.githubusercontent.com/97663140/172177697-c55150c8-e78e-4324-908f-2b9d04d3af52.png)

## 한국어 NER 데이터 셋

- **국립국어원 NER 데이터 셋**
    - 총 3,555개 문장
    - BIO 태깅 시스템 사용
    - 5종류의 Annotated Entities –  { 장소(LC), 날짜(DT), 기관(OG), 시간(TI), 인물(PS) }
    - **국립국어원 모두의 말뭉치, [https://corpus.korean.go.kr](https://corpus.korean.go.kr/)**
- **한국해양대학교 자연어처리 연구실 NER 데이터 셋**
    - 총 23,964개 문장
    - BIO 태깅 시스템 사용
    - 10 종류의 Annotated Entities –  { 인물(PER), 기관(ORG), 지명(LOC), 기타(POH), 날짜(DAT), 시간(TIM), 기간(DUR), 통화(MNY), 비율(PNT), 기타 수량표현(NOH) }
    - **한국해양대학교 자연언어처리 연구실 깃허브, [https://github.com/kmounlp](https://github.com/kmounlp)**
- **NAVER NLP Challenge 2018**
    - 총 82, 393개문장
    - BIO 태깅 시스템 사용
    - 14 종류의 AnnotatedEntities – { 인물(PER), 학문분야(FLD), 인공물(AFW), 기관및 단체(ORG), 지역명(LOC), 문명 및문화(CVL), 날짜(DAT), 시간(TIM), 숫자(NUM), 사건사고 및 행사(EVT), 동물(ANM), 식물(PLT), 금속/암석/화학물질(MAT), 의학용어/IT관련 용어(TRM) }
    - **네이버 NLP Challenge 깃허브, [https://github.com/naver/nlp-challenge](https://github.com/naver/nlp-challenge)**

# 한국어 기술문서 분석을 위한 BERT 기반의 분류모델

- 원본 : [http://koreascience.or.kr/article/JAKO202014264110274.pdf](http://koreascience.or.kr/article/JAKO202014264110274.pdf)
- 현재 사용하고자 하는 기술에 가장 근접한 활용 방식이라 조사해봄

## N줄요약

- 7,000건 이상의 국가과제기술문서의 33개의 기술분류를 각각 예측하는 task
- 데이터와 과제의 특성을 고려하면 평균 0.5 이상의 f-score, 평균 정밀도 값을 볼 수 있었음
- 유의미한 성능이며, 한국어 BERT 기반 분류 모델을 이용한 기술문서 분류 과제 해결이 가능함을 확인함

### 참고

[10 Important NLP Tasks Commonly Used in Language Modeling](https://dev.to/amananandrai/10-important-nlp-tasks-commonly-used-in-language-modeling-3ppa)

[고졸 입니다만..](https://mr-doosun.tistory.com/22)

[](https://blog.est.ai/2020/10/ner/)

[NER의 현재와 미래: 02. 모델 구조와 데이터 셋 현황](https://www.letr.ai/explore/tech-20210730)

[[논문리뷰] 한국어 기술문서 분석을 위한 BERT 기반의 분류모델](https://miinkang.tistory.com/12)