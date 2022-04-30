# 자연어 처리 (Natural Language Processing, NLP)

<br/>

## 1. 자연어란?
**자연어 [ Natural Language, 自然語 ]** <br/>
인간이 일상생활에서 의사소통을 위해 사용하는 언어<br/><br/>

**자연어 처리 [ Natural Language Processing, 自然語處理 ]** <br/>
컴퓨터를 이용하여 인간 언어의 이해, 생성 및 분석을 다루는 인공지능 기술<br/><br/>

<br/>

## 2. 자연어 처리 과정
<br/>
[ 데이터 전처리 → Tokenizing → Lexical Analysis → Syntactic Analysis → Semantic Analysis ] <br/><br/> 

![image](https://user-images.githubusercontent.com/93183070/166083381-cd2744c3-b74f-4152-989f-2ab496041af4.png)

* N-gram : N-gram은 확률적 언어 모델의 대표적인 것으로서, N개 단어를 연속적으로 나열하여 분석하는 것<br/>
  ex ) An adorable little boy is spreding smiles<br/>
  4-grams : An adorable little boy,  adorable little boy is, little boy is spreding, boy is spreding smiles<br/><br/>

<br/>

## 3. Word Embedding

### One-Hot Encoding
One-Hot encoding 방식을 활용하여 자연어를 좌표 평면에 표현이 가능<br/>

ex) '세상 모든 사람'이라는 단어를 좌표 평면에 표현하는 경우<br/>

![image](https://user-images.githubusercontent.com/93183070/166083474-cf147f38-0451-4d25-bbe7-6657f7191ea6.png)

- n개의 단어에 대한 n차원의 벡터가 생성됨
- 단어가 커질수록 차원의 개수가 늘어남
- 단어의 의미를 유추할 수 없음

<br/><br/>

### Word2Vec
Word2Vec 알고리즘은 자연어의 의미를 벡터 공간에 임베딩<br/>
한 단어의 주변 단어들을 통해 그 단어의 의미를 파악<br/>

분산 표현(distributed representation) 방법은 기본적으로 분포 가설(distributional hypothesis)이라는 가정 하에 
만들어진 표현 방법입니다. 이 가정은 '비슷한 문맥에서 등장하는 단어들은 비슷한 의미를 가진다'라는 가정입니다. 
강아지란 단어는 귀엽다, 예쁘다, 애교 등의 단어가 주로 함께 등장하는데 분포 가설에 따라서 해당 내용을 가진 텍스트의 
단어들을 벡터화한다면 해당 단어 벡터들은 유사한 벡터 값을 가집니다. 분산 표현은 분포 가설을 이용하여 텍스트를 학습하고, 
단어의 의미를 벡터의 여러 차원에 분산하여 표현합니다.


- 한정된 차원으로 의미 표현 가능
- 의미 관계를 유추할 수 있음
- 비지도 학습으로 단어의 의미를 학습할 수 있음

Word2Vec 참고 : https://wikidocs.net/22660

<br/><br/>

### FastText
Facebook research에서 공개한 오픈소스 라이브러리.<br/>
기존의 word2vec과 유사하나, 단어를 N-gram으로 나누어 학습을 수행

Word2Vec는 단어를 쪼개질 수 없는 단위로 생각한다면, FastText는 하나의 단어 안에도 여러 단어들이 존재하는 것으로 <br/>
간주합니다. 내부 단어. 즉, 서브 워드(subword)를 고려하여 학습합니다.<br/>

N-gram의 범위가 2-5 일 때 다음과 같이 분리하여 학습함<br/>
ex) assumption = (as, ss, su, ... , ump,mpt, ... , ption, assumption)<br/>
N-gram으로 나눠진 단어는 사전에 들어가지 않으며, 별도의 N-gram 벡터를 형성함<br/>

- N-gram 벡터를 통해 유사한 N-gram을 가지고 있는 단어는 비슷한 의미를 가지는 벡터를 형성할 수 있음<br/>
  ex) Orange와 Oranges의 N-gram은 유사한 단어 벡터를 생성할 수 있음
- 동형어, 다의어 등에 대해서는 embedding 성능이 좋지 못하다는 단점이 있음

FastText 참고 : https://wikidocs.net/22883
<br/><br/><br/>


# 언어 모델(Language Model)

## 1. 모델이란?

**모델 [ Model ]** <br/>
어떤 상황이나 물체 등 연구 대상 주제를 도면이나 사진 등 화상을 사용하거나 수식이나 악보와 같은 기호를 사용하여 표현한 것.<br/><br/>

**모델의 종류**
- 일기예보 모델, 비즈니스 모델, 분자 모델 등
<br/>

**모델의 특징**
- 자연법칙을 컴퓨터로 모사함으로써 시뮬레이션이 가능
- 이전 상태를 기반으로 미래의 상태를 예측할 수 있음<br/>

<br/><br/>


## 2. 언어모델
**언어 모델 [ Language Model ]** <br/>
자연어의 법칙을 컴퓨터로 모사한 모델<br/>
주어진 단어들로부터 그다음에 등장한 단어의 확률을 예측하는 방식으로 학습<br/><br/>

### Markov 확률 기반의 언어 모델
초기의 언어 모델은 다음의 단어나 문장이 나올 확률을 통계와 단어의 N-gram을 기반으로 계산

![image](https://user-images.githubusercontent.com/93183070/166083749-fd185683-ea64-41b4-b031-fd80a5868bfd.png)

<br/><br/>

### RNN(Recurrent Neural Network(RNN) 기반의 언어모델
RNN은 히든 노드가 방향을 가진 엣지로 연결돼 순환구조를 이루는 인공신경망의 한 종류<br/>
이전 상태 정보가 다음 상태를 예측하는 데 사용됨으로써, 시계열 데이터 처리에 특화<br/><br/>

![image](https://user-images.githubusercontent.com/93183070/166083772-3534b0ef-e688-4f8a-b1ad-6abb3a15c1ce.png)

<br/><br/>

 # 참고
 [T아카데미 자연어 언어모델 ‘BERT’] : https://tacademy.skplanet.com/live/player/onlineLectureDetail.action?seq=164





