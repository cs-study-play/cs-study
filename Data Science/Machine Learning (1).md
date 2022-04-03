<div align="center">
최근 머신러닝(Machine Learning)과 딥러닝(Deep Learning) 등 <br>
Data Science 기술이 다양한 곳에서 활용되고 있다. <br>
이번 글에서는 머신러닝이 무엇인지에 대한 개요와 기술에 대해 <br>
간단하게 알아보고자 한다.   
</div>

# 머신러닝 이란?
머신러닝에 대해서는 다양하게 정의되고 있다.<br>
1. 기계학습, 머신러닝은 1959년 아서 사무엘(Arthur Samuel)의 논문<br>
  명시적으로 프로그램을 작성하지 않고 컴퓨터에 학습할 수 있는 능력을 부여하기 위한 연구 분야.<br><br>
2. Tom M. Mitchell 카네기멜론 대 교수<br>
  컴퓨터 프로그램이 어떤 유형의 과업(Task)들에 대해 성과평가 지표(Performance Measure)의 관점에서 경험(Experience)으로 부터 배워, 성과지표의 값이 향상된다면 컴퓨터 프로그램은 학습을 할 수 있다.<br><br>
3. 두산백과<br>
  인공지능의 연구 분야 중 하나로, 인간의 학습 능력과 같은 기능을 컴퓨터에서 실현하고자 하는 기술 및 기법<br><br>
  
# 머신러닝의 분류
머신러닝은 지도 학습, 비지도 학습, 강화 학습 3가지로 분류된다. 각 분류의 기준과 특징은 다음과 같다.<br><br>
![image](https://user-images.githubusercontent.com/93183070/161423651-ecf61d3c-df40-4865-ab62-e627c05d1f5c.png)
<br><br>
## 1. 지도 학습(Supervised Learning)

- 컴퓨터에게 답을 미리 알려주고 이를 통해 컴퓨터를 학습시키는 방법
- 훈련 데이터(Training Data)로 부터 예측(Prediction), 추정(Estimation), 분류(Classification) 함수를 만들어 내는 기계학습 기법
- 독립 변수(x1, x2, ...)와 종속변수(y)를 가지고 있고, 독립변수와 종속변수 간의 관계를 일반화하는 학습을 한다.
- 회귀(Regression) : 연속된 값, 수치를 예측하는 것
- 분류(Classification) : 연속적이지 않은 값을 예측하는 것

![image](https://user-images.githubusercontent.com/93183070/161423680-897e992d-1ae2-483a-98bc-7c5ef7cafa0c.png)
<br><br>
## 2. 비지도 학습(Unsupervised Learning)

- 사람의 도움 없이 컴퓨터가 스스로 데이터를 파악하고 규칙을 찾는 것, 즉 y값 없이 x값 만으로 학습하는 방법
- 대부분의 데이터들이 레이블 되어있지 않은 상태로 존재하기 때문에 비지도 학습은 중요함
- 패턴 인식이라고도 불림 

![image](https://user-images.githubusercontent.com/93183070/161423696-aa216dd3-7048-4926-bde3-98c7e1d86ed7.png)
<br><br>
## 3. 강화 학습(Reinforcement Learning)

- 어떤 환경 안에서 정의된 에이전트가 현재의 상태를 인식하여 선택 가능한 행동들 중 보상을 최대화하는 행동 혹은 행동 순서를 선택하는 방법
- 강화 학습은 입출력 쌍으로 이루어진 훈련 집합이 제시되지 않으며, 잘못된 행동에 대해서도 명시적으로 정정이 일어나지 않는다는 점에서 일반적인 지도학습과 다름
- 비지도 학습은 정적인 상태에서 학습을 진행했다면, 강화학습은 에이전트(Agent)가 주어진 환경(Environment)에 대해 어떤 행동(Action)을 취하고 어떤 보상(Reward)을 얻으면서 동적으로 학습을 진행함
- 미로 찾기, 알파고, 자동차 자율주행 등

![image](https://user-images.githubusercontent.com/93183070/161423723-c045ebe3-2587-4c42-95df-e43646c77ca1.png)
<br><br>
# AI와 머신러닝
## 1. 포함관계
![image](https://user-images.githubusercontent.com/93183070/161423740-fac70d0b-7945-48bb-b552-5b96510eb1d3.png)

- 인공지능(Artificial Intelligence)
  외부 관찰자에게 인간처럼 스마트하게 소프트웨어를 작동시키는 폭넓은 방법, 알고리즘 및 기술, 머신러닝, 컴퓨터 비전, 자연어 처리, 로봇 공학 및 그와 관련된 모든 주제를 포괄함
- 머신러닝(Machine Learning)
  더 많은 데이터 축적을 통해 성능을 개선할 수 있도록 하는 다양한 알고리즘과 방법론
- 딥러닝(Deep Learning)
  신경망을 부르는 다른 이름, 여러 개의 히든 레이어를 통해 깊게 학습한다고 해서 붙여진 이름
  딥러닝은 Feature를 스스로 찾아낸다.
<br><br>
## 2. 머신러닝과 딥러닝의 차이점
<br>
위에서 딥러닝은 Feature을 스스로 찾아낸다고 했다. 이러한 특징에 대해 다음 글에서 자세하게 나와있다. <br><br>

[출처] 국가과학기술연구회, "딥러닝?? 머신러닝?? 대체 뭐가 다른거야? 딥러닝과 머신러닝의 차이점"<br>
https://blog.naver.com/nststory2014/222284630857<br><br>

![image](https://user-images.githubusercontent.com/93183070/161423883-bc78499e-b250-4c2f-9f2e-fa65e459d821.png)

