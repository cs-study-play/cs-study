오늘은 머신러닝의 결과를 평가하는 방법에 대해 알아보고자 한다. <br/>
분류 모델, 예측모델이 얼마나 잘 구축되었는지 평가할 수 있는 지표들은 <br/>
어떤 것들이 있고, 어떻게 계산되는지 정리해보았다.<br/><br/>

# 모델 평가

### 1. 머신러닝 문제 별 평가지표 
![image](https://user-images.githubusercontent.com/93183070/164710943-80bd37f9-cfcd-4cd1-a88c-7f1b03a03264.png)

### 2. 모델 평가의 기준

- 일반화의 가능성
  - 같은 모집단 내의 다른 데이터에 적용하는 경우 얼마나 안정적인 결과를 제공해주는가?
  - 확장 적용이 가능한가?

- 효율성
  - 모형이 얼마나 효과적으로 구축되었는가?
  - 얼마나 적은 입력 변수로 모형을 구축했는가?

- 예측과 분류의 정확성
  - 구축된 모형이 얼마나 예측과 분류에서 뛰어난 성능을 보이는가 <br/><br/>

# 회귀 문제

### 1. 평균 절대 오차 (Mean Absolute Error)

- 실제 값과 측정(예측) 값과의 차이<br/>
- 수치가 낮을수록 성능이 좋은 모델<br/><br/>
![image](https://user-images.githubusercontent.com/93183070/164711115-2a274cea-b5d7-4080-b992-7286595493d4.png)
<br/><br/>

### 2. 평균 제곱 오차 (Mean Squared Error)

- 잔차(오차)의 제곱에 대한 평균을 취한 값<br/><br/>
- 통계적 추정의 정확성에 대한 질적인 척도<br/>
- 수치가 낮을 수록 성능이 좋은 모델<br/>
- 이상치에 민감하다는 단점<br/><br/>
![image](https://user-images.githubusercontent.com/93183070/164711210-cbfff77b-6674-419c-bd1d-715c23e33756.png)<br/>
![image](https://user-images.githubusercontent.com/93183070/164711224-0137eec8-a105-4b05-b3ba-ba77018af10e.png)<br/>

<br/>

# 분류 문제 : 혼동 행렬(Confusion Matrix)

![image](https://user-images.githubusercontent.com/93183070/164711399-18c50a48-866b-482c-a7d9-6f7b33fddc28.png)
* Positive (양성, encoding as 1) : 보통 관심 있어하는/입증하고 싶은/기존 상태에 반하는 사건을 일컬음<br/>
* Negative (음성, encoding as 0) :기존 상태에 부합하는 사건을 일컬음<br/><br/>

### 1. 정확도(Accuracy)
- (a + d) / (a + b+ c + d)
- 전체 결과 값에서 실제 정답과 같은 판단을 한 비율
- 직관적으로 이해하기 쉬운 지표이지만, 데이터가 불균형하거나 특정한 클래스에 편향될 경우 제대로 평가하기 어려운 단점이 있다.

- 예시 )
  전체 데이터 1000개 중 900개가 1, 100개가 0이다.
  예측 모델이 모든 값을 1로 예측할 경우 정확도는 90%이지만 실제 사용하기에는 부적합하다.
<br/><br/>

### 2. 정밀도(Precision)
- a / (a + c)
- True 라고 예측한 것 중에서 실제 데이터가 True인 것의 비율
- 실제 True인 값을 True로 예측하는 것이 중요할 때 주로 사용되는 지표이다.

  예시 1) 환자의 질병 여부를 판단해야하는 경우, 음성인 환자를 양성이라고 잘못 판단하면 안 됨
  예시 2) 스팸 메일 여부를 판단하는 경우, 스팸메일이 아닌 것을 스팸메일로 분류하면 문제가 발생
<br/><br/>

### 3. 재현율(Recall) 또는 민감도(Sensitivity)
- a / (a+b)
- 실제 정답인 True  얼마나 많은 True를 찾았는지에 대한 비율

  예시)
  암환자(positive) 진단의 경우 정상 환자를 암환자로 분류해서 과잉진료가 되더라도, 암환자를 제대로 진단하는 것이 중요함. 
<br/><br/>

### 4. 특이도(Specificity)
- d / (c+d) 
- 실제 정답인 False 중 얼마나 많은 False를 찾았는지에 대한 비율
<br/><br/>

### 5. F1 score
- (2 * Precision * Recall) / (Precision + Recall)
- 정확도, 정밀도, 재현율 등의 지표는 데이터가 한쪽으로 편향되어 있는 경우 좋은 지표가 될 수 없다. 
- 이를 해결하기 위해 F1 score를 사용한다.
- Precision과 Recall을 적절하게 사용한 조화 평균값, 정밀도와 재현율이 고르게 높은 값을 좋은 알고리즘이라고 판단한다.
<br/><br/>

### 6. ROC curve
- Receiver Operating Characteristic curve
- FPR(False Positive Rate)와 TPR(True Positive Rate)을 각각 x, y축으로 놓은 그래프
- FPR = 1 - 특이도(Specificity)
- TPR = 재현율(Recall)<br/><br/>
![image](https://user-images.githubusercontent.com/93183070/164711594-76e990a7-f070-462a-bff4-9b4fdeb698fd.png)
<br/><br/>

### 7. AUC (Area Under the Curve)
- x축(FPR)과 y축(TPR)의 관계로 모형을 판단
- ROC curve 밑부분 면적이 넓을수록 좋은 모형이다.
  - AUC가 1이라면 완벽한 모형
  - 일반적으로 정확한 (0.7 < AUC ≤ 0.9), 매우 정확한 (0.9 < AUC < 1) 모형으로  분류할 수 있음
