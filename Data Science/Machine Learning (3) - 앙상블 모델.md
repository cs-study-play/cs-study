# [Data Science] 머신 러닝(Machine Learning) (3)

오늘은 머신러닝의 다양한 알고리즘 중 앙상블 알고리즘에 대해 알아보고자 한다.<br/>
앙상블 모델이 무엇이고, 어떤 알고리즘들이 존재하는지 정리해보았다.<br/><br/>

# Random Forest
의사결정 나무(Decision Tree)는 과적합(Overfitting)될 가능성이 높다는 단점이 있다. <br/>
가지치기(Pruning)를 통해 어느 정도 해결할 수 있지만 완벽하게 해결할 수는 없기 때문에 <br/>
이러한 문제를 해결하기 위해 고안된 알고리즘이 Random Forest 알고리즘이다. <br/>

Random Forest 모델은 앙상블(Ensemble) 모델 중 Bagging기법을 사용하는 머신러닝 모델이다.<br/>
이를 이해하기 위해 앙상블과 Bagging의 무엇인지 알아보자.

## 1. 앙상블(Ensemble)
앙상블의 영어 뜻은 함께, 동시에, 협력하여라는 뜻을 가지고 있다. <br/>
앙상블 모델은 "여러 모델이 동일한 문제를 해결하여 더 나은 결과를 얻을 수 있도록 훈련시키는 기계학습 방법"이다. <br/>
하나의 모델만으로는 성능이 부족할 때 개별로 학습시킨 여러 개의 모델을 조합하여 성능을 향상하는 것이 앙상블 모델이다.<br/>
![image](https://user-images.githubusercontent.com/93183070/163190272-84afde56-9853-4e32-bba4-de8b0175156b.png) <br/>

대표적인 앙상블 기법으로는 배깅(Bagging)과 부스팅(Boosting)이 있다.<br/><br/>

## 2. 배깅(Bagging)
Bagging 은 Bootstrap Aggregating의 줄임말로 직역하면 '랜덤 샘플링하여 추출한 후 집계한다'라는 뜻이다. <br/>
Bagging 모델은 임의 추출(Bootstrap)된 데이터를 각각의 모델들에게 학습시킨 후, 학습된 모델의 모든 결과를 집계하여 최종 결과 값을 구하게 된다. <br/>
최종 모델의 결과 값을 구할 때 이산 데이터(Categorical Data)에 대해서는 투표(Voting)를 통해 결정하고, 연속 데이터(Continuous Data)에 대해서는 평균으로 집계한다.<br/><br/>
Bagging 방식은 전체 데이터 중 일부를 랜덤으로 추출하여 학습 데이터를 구성하고 모델에 학습시키기 때문에, 전체 학습 데이터가 충분하지 않더라도 높은 학습효과를 얻을 수 있다.<br/><br/>
Bagging 방식은 다수의 학습 모델이 생성되고, 그 결과를 통해 최종 결과가 집계되기 때문에 학습 데이터에 대해 과적합(Overfitting) 되는 것을 예방할 수 있다.

![image](https://user-images.githubusercontent.com/93183070/163190907-8cebcbc4-f121-4592-ba3d-a7841ef197da.png)

가장 대표적인 Bagging 알고리즘이 랜덤 포레스트(Random Forest)이다.<br/>
랜덤 포레스트(Random Forest)는 여러 개의 Decision Tree를 생성하고 전체 데이터 셋에서 임의로 학습 데이터를 구성하여 각 Tree를 학습시켜 모델을 구축한다.<br/>
이후 분류를 진행할 때 새로운 데이터를 각 Tree에 통과시켜 최종 결과 값을 얻은 후 가장 많이 나온 결과 값을 최종 분류 결과로 선택한다.<br/>

![image](https://user-images.githubusercontent.com/93183070/163191116-75bb0dab-a15e-4f4e-b072-1986ac4f3867.png)
<br/><br/><br/>

# XGBoost
XGBoost는 Extreme Gradient Boosting의 약자로 여러 개의 의사결정 나무(Decision Tree)를 조합해서 사용하는 앙상블(Ensemble) 기법 중 하나이다. <br/>
랜덤 포레스트도 여러 개의 의사결정 나무를 조합한 앙상블 모델인데 XGBoost는 Bagging 모델이 아닌 Boosting 모델이라는 차이점이 있다.<br/><br/><br/>

## 1.부스팅(Boosting)

배깅(Bagging) 기법이 여러 개의 모델을 학습시켜 분산을 최소화하는 것을 목표로 하였다면, 부스팅(Boosting)은 성능을 강화하고자 하는 목적으로 생성된 기법이다.<br/><br/>
배깅의 각 모델들은 서로에게 영향을 주지 않지만 부스팅은 순차적으로 학습을 진행하고, 이전 모델의 학습 결과를 토대로 다음 모델의 가중치를 조정해 학습을 진행한다. <br/>
즉, 먼저 생성된 모델을 점차 강화시키는 방향으로 학습이 진행되는 것이다. 
![image](https://user-images.githubusercontent.com/93183070/163191747-03f1cd9c-56da-46d4-9d9a-cd677627bcc8.png)
<br/>

대표적인 모델로는 XGBoost가 있다.
![image](https://user-images.githubusercontent.com/93183070/163191898-05cf0446-0024-43c5-8b6b-d9cce4ca21b2.png)

XGBoost는 Gradient Boosting 프레임워크를 사용하는 의사결정 나무 기반 앙상블 머신러닝 알고리즘으로, <br/>
정형 데이터를 예측하는 의사결정 트리 기반 알고리즘에서는 가장 성능이 좋다고 알려져 있다.<br/> 
XGBoost는 시스템 최적화 및 알고리즘 향상을 통해 일반 Gradient Boosting 알고리즘보다 좋은 성능을 낼 수 있다.<br/><br/>

XGBoost에 대한 자세한 개념 정리는 아래 블로그에 잘 정리되어 있다. <br/>
https://towardsdatascience.com/https-medium-com-vishalmorde-xgboost-algorithm-long-she-may-rein-edd9f99be63d
