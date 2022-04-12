# [Data Science] 머신 러닝(Machine Learning) (2)

오늘은 머신러닝의 기초가 되는 회귀 분석과 의사결정 나무 알고리즘에 대해서 알아보고자 한다.

# 회귀분석
- **회귀 (回歸) : 한 바퀴 돌아 제자리로 돌아오거나 돌아감.**<br/>
- **회귀분석의 시초는 1885년 영국 F.Galton의 1078쌍 부자간의 키 관계 분석이다.**<br/>
  영국의 유전학자 Frnacis Galton은 부모 자식 간의 키를 조사하여 '일반적으로 장신인 부모의 아이는 장신이지만, 키가 커지거나 작아지는 것보다는 전체의 평균으로 회귀하려는 경향이 있다.'라는 가설을 세웠고 이 가설을 분석하는 방법을 회귀분석이라고 하였다. 

 

- **회귀 분석은 두 개의 변수가 주어진 경우에 한 변수로부터 다른 변수를 예측하거나, 두 변수 사이의 관계를 구명하는데 사용하는 방법이다**.<br/>
  독립변수(Indipendent Variable) : 영향을 미칠 것이라고 생각되는 변수(예측인자, Predictor)<br/>
  종속변수(Dependent Variable) : 영향을 받을 것이라고 생각되는 변수(예측량, Predictand)<br/>

 

- **회귀분석 (Regression)**<br/>
  하나의 종속 변수와 두 개 이상의 독립 변수 사이에 나타나는 관계를 최소 제곱법으로 추정하는 방법.
  
  ![image](https://user-images.githubusercontent.com/93183070/162881909-8460e872-4e52-4e08-aff8-9d794790a69d.png)

<br/><br/>

# 선형 회귀분석 (Linear Regression)
- 두 변수들 사이의 관계를 분석하는 방법
- X변수(독립변수), Y변수(종속변수)
- 선형 회귀모델 : 독립변수와 종속변수 사이의 관계를 직선으로 표현
  - 단순 선형 회귀 : 독립변수 1개
  - 다중 선형 회귀 : 독립변수 2개 이상 

![image](https://user-images.githubusercontent.com/93183070/162883893-eb292edb-82f7-4d88-b7a9-57bd7e3f520c.png)

- 그림 4 에서 점들의 분포를 가장 잘 나타내는 회귀식을 어떻게 찾는가?  최소제곱법
- 최소제곱법 : 잔차를 최소화하는 회귀모델의 계수를 추정하는 방법
- 잔차(e) : 실체 관측 값과 회귀 모델 추정 값의 차이

![image](https://user-images.githubusercontent.com/93183070/162884005-4100a3a5-05ce-41c9-b331-5e38cffe5c45.png)

![image](https://user-images.githubusercontent.com/93183070/162884036-787f7f51-85d9-48e2-9a61-dda4d66400f1.png)

<br/><br/>

# 로지스틱 회귀분석(Logistic Regression)

- 대표적인 비선형 회귀분석이며 데이터를 분류할 때 사용하는 모델이다. <br/>
  로지스틱 회귀분석은 분석하고자 하는 대상들이 두 집단 혹은 그 이상의 집단으로 나누어진 경우에 개별 관측치들이 어느 집단으로 분류할 수 있는가를 분석하고, 이를 예측하는 모형을 개발하는 데 사용되는 대표적인 비선형 회귀분석 기법이다.

- 독립변수의 선형 결합을 이용하여 사건의 발생 확률을 예측하는 데 사용하는 통계기법이다.

- 선형 회귀분석과 차이점은 종속변수에 연속형 데이터가 쓰이지 않고 범주형 데이터가 쓰인다.<br/>
  범주형 데이터 : 집합의 특성을 가지는 불연속적인 데이터, 일정한 규칙을 가지고 데이터를 분류해놓은 변수

![image](https://user-images.githubusercontent.com/93183070/162884286-9d719066-b898-45b3-b9ce-dc0ceddb2484.png)

- 로지스틱 회귀분석은 종속 변수 값이 비연속적인 값을 가지기 때문에 독립변수와 종속변수 사이의 관계를 명확하게 규명하기 어렵다는 한계점이 있다.<br/>
  이러한 문제를 해결하기 위해 종속변수를 '특정한 값을 가질 확률'로 변경하여 비연속적인 문제를 해결하였다. Odds라는 개념을 도입하여 종속변수를 범주형 데이터에서 비율 척도로 변경하였다.

![image](https://user-images.githubusercontent.com/93183070/162884359-207693fa-2de0-4938-9bca-60f777a8b47d.png)

![image](https://user-images.githubusercontent.com/93183070/162884375-48f302af-5582-43d5-8309-594a14983bb5.png)

- 장점
  1) 가장 구현이 쉬운 분류 알고리즘
  2) 데이터의 차원이 낮은 경우 과적합**의 경향이 적음
  3) 데이터가 선형적으로 구분될 경우 성능이 좋은 편

- 단점 
  1) 데이터의 차원이 증가하면, 과적합의 경향도 증가
  2) 데이터가 선형적으로 구분이 잘 안 되는 경우 성능이 좋지 못함
 

- 과적합(Overfitting) <br/>
  기계학습에서 학습 데이터에 과하게 학습되는 것. 학습 데이터에 대해서는 높은 정확도와 좋은 성능을 보여주지만 새로운 데이터에 대해서는 오차가 증가하게 된다.
  
![image](https://user-images.githubusercontent.com/93183070/162884500-a13fc378-e4cd-487b-a230-bfcf59d407da.png)

<br/><br/>

# 의사결정 나무

- 분류(Classification)에서 가장 많이 사용되는 머신러닝 모델이다.
- 의사결정 나무는 의사결정 규칙을 나무 구조로 나타내어 전체 자료를 몇 개의 소집단으로 분류하거나 결과 값을 예측하는 분석방법을 말한다.

![image](https://user-images.githubusercontent.com/93183070/162884549-a7377fc0-7264-442e-9a91-c25d15b110cf.png)


- 의사결정 나무 기법 <br/>
  1) 명목형 목표 변수 : C5.0, QUEST(Quick Unbiased Efficient Statistical Tree)
  2) 연속형 목표변수 : CART(Classification & Regression Tree), CHAID(Chi-sqare Automatic Interaction Detection)

 

- 의사결정 나무의 분류 과정 <br/>
  의사결정 나무의 최상단에서부터 기준에 따라 데이터가 분류된다. depth 1에서는 'x[1]<= 0.06'을 기준으로 데이터를 분류하고 depth 2에서는  분류된 데이터를 기반으로 ' x[0]<=0.18' , 'x[0] <= 1.195' 두 가지 조건에 따라 다시 분류된다. 해당 과정을 통해 분류된 데이터를 얻을 수 있게 된다. 

![image](https://user-images.githubusercontent.com/93183070/162884601-68504a1f-60dc-408f-8771-07b8663c3803.png)


- 나무의 모형과 크기, 깊이는 과대적합 또는 과소적합이 일어나지 않도록 합리적인 기준에 의해 조절되어야 한다. 

- 의사결정 나무를 만들 때에는, 각 노드들의 불순도가 가장 낮은 방향으로 만들어지며, 결과 노드 안에서 섞여있는 정도가 가장 낮은 나무를 만드는 것이 목표이다.

<br/><br/>

### 불순도
![image](https://user-images.githubusercontent.com/93183070/162884642-a9ff6ab6-d468-4472-8901-116da5b442a3.png)

- 의사결정 나무는 불순도가 낮아지는 방향으로 분류를 진행하게 되며 불순도의 지표로는 Entropy, GINI Index, Chi-square, Variance 등이 존재한다.<br/>
  불순도를 Entropy로 계산한 알고리즘이 ID3<br/>
  불순도를 GINI Index로 계산한 알고리즘이 CART<br/>

<br/><br/>

### 가지치기(pruning)

나뭇가지를 잘라내는 것과 같다는 의미에서 가지치기(Pruning)이라고 부른다. 모든 노드의 순도가 100%인 상태를 Full tree라고 하는데 이러한 Full tree는 학습 데이터에 과적합될 수 있기 때문에 적절한 수준에서 노드를 결합해야 한다.
![image](https://user-images.githubusercontent.com/93183070/162884752-1bc0d60a-12c1-467e-8792-285211c7a96b.png)

![image](https://user-images.githubusercontent.com/93183070/162884781-db9fdd27-ff26-4c76-94c0-a362c3566189.png)

- 장점<br/>
  1) 직관적으로 이해할 수 있는 모델, 화이트 박스 모델
  2) 데이터 탐색 시 어떤 변수들이 중요한 변수인지 파악할 수 있음
  3) Outlier, 결측치의 영향을 적게 받음, 다른 알고리즘들에 비해 Data cleaning이 덜 요구됨
  4) 데이터 Scaling의 영향을 받지 않음
  5) 범주형 및 수치형 데이터를 모두 다룰 수 있음 

- 단점<br/>
  1) 쉽게 과대 적합이 일어남 (가지치기를 통해 해결)
  2) 연속형 변수들에 적합하지 않음, 회귀모형에서 예측력이 낮음
  3) 복잡한 트리 모형으로 인해 예측력이 저하되고, 해석이 어려워지며, 계산량이 많아질 수 있음
  4) 보유하고 있는 데이터 범위 외의 데이터가 들어오면 성능이 낮아짐
  5) 설명변수 간의 중요도를 판단하기 어려움


# 참고
https://blog.naver.com/jmkim461/222693014685
https://m.post.naver.com/viewer/postView.naver?volumeNo=29124872&memberNo=21815
https://blog.naver.com/lucifer246/222632171340
https://ratsgo.github.io/machine%20learning/2017/03/26/tree/
https://www.analyticsvidhya.com/blog/2016/04/tree-based-algorithms-complete-tutorial-scratch-in-python/
https://blog.naver.com/askif2/221998691305
