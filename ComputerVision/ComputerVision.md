# 📚 컴퓨터 비젼이란?? (Computer Vision)

--------
![CV](https://steemitimages.com/0x0/https://steemitimages.com/DQmfNU1h31WvoGk7BjgxugSyEwtBuC3mGfNzfWbdSu66Mbt/image.png)

컴퓨터 비전이라는 말에 이미 ‘시각'(vision)이라는 단어가 포함되어 있어서 유추할 수 있듯이, 사람의 시각과 관련한 시스템 구조를 모방하여 컴퓨터도 물체나 상황을 식별하고 해석할 수 있도록 하는 연구 분야입니다. 

## 컴퓨터 비전의 기술과 활용 🔧

딥러닝과 뉴럴 네트워크의 발전은 컴퓨터 비전 분야의 발전 속도를 가속화 시키는 계기가 되었고 제한된 영역에서만 활용되던 컴퓨터 비전은 딥러닝의 심층 신경망의 비약적인 발전에 힘입어 그 활용영역을 점차 확장해나가고 있습니다. 비전 분야에 있어서 대표적인 기술은 아래와 같습니다.

* 객체 분류(Object Classification) : 이미지 속 객체를 인지하여 그 클래스를 분류해내는 기술로 컴퓨터 비전영역에서 가장 기초적인 응용 분야
* 객체 탐지 및 위치 식별 (Object Detection & Localization) : 이미지 또는 비디오 영상에서 객체를 식별해내는 기술
* 객체 분할(Object Segmentation) : 이미지 및 비디오 영상 프레임 내에서 객체를 따로 분할하여 의미 있는 부분만 분석할 수 있게 하는 기술
* 이미지 캡셔닝(Image captioning) : 이미지의 상황을 텍스트로 설명할 수 있는 기술
* 객체 추적(Object Tracking) : 비디오 영상 내의 객체의 위치 변화를 추적하는 기술로 흔히 포인트 추적(point tracking), 커널 추적(kernel tracking), 실루엣 추적 (silhouette tracking) 등의 방법을 사용
* 행동 분류(Action Classification) : 비디오 영상 내의 객체의 행동(action)을 인식하여 분류하는 기술

## 컴퓨터 비전에서 자주 쓰이는 데이터셋 🔍

--------
* [CIFAR-10](http://www.cs.toronto.edu/~kriz/cifar.html
) :   
CIFAR-10 데이터셋은 머신러닝 연구에 가장 활발히 사용되는 데이터셋으로, 2009년에 제프리 힌튼 교수팀이 만들었습니다. 10개의 클래스(airplane, automobile, bird, cat, deer, dog, frog, horse, ship, truck)로 이루어진 6만 개의 이미지 데이터셋입니다.
* [Fashion MNIST](https://github.com/zalandoresearch/fashion-mnist):  
손글씨 우편번호를 빠르게 읽기 위해 우편봉투로부터 숫자를 직접 추출하여 만든 손글씨 숫자 데이터셋인 NIST를 일반화, 표준화하여 발전시킨 MNIST에 기원을 두는 데이터셋입니다. 손글씨 숫자를 패션과 관련된 이미지로 대체한 것인데요. Fashion MNIST는 10개의 카테고리로 분류되는 70,000개의 흑백 이미지로 구성된 데이터셋입니다.
* [ImageNet](https://image-net.org/index.php):  
ImageNet은 1,400만 개 이상의 공개 이미지 데이터셋으로, 스탠포드 대학의 Fei-Fei Li 교수와 그녀의 공동 작업자가 컴퓨터 비전 분야에 있어 학습 데이터의 부족 문제 해결을 위해 2009년에 시작한 데이터셋입니다. 그 분류가 매우 다양해서 일상생활에서 볼 수 있는 거의 모든 종류의 이미지를 얻을 수 있습니다.  
* [MS COCO](https://cocodataset.org/#home):  
COCO는 Common Objects in COntext의 약자로 딥러닝 프로그램을 교육하는 데 사용되는 가장 인기 있는 오픈소스 데이터베이스 중 하나로, Object Detection, Segmentation, Keypoint Detection 등에 쓰입니다. COCO 데이터는 이미지를 설명하는 캡션도 함께 제공하여, 이미지를 설명하는 문장을 학습시켜 유사한 이미지가 주어졌을 때 설명을 자동으로 생성할 수 있도록 하는 데 큰 기여를 했습니다. COCO 데이터셋에 대한 관심도 많지만 이 데이터들을 저장하는 COCO 데이터셋의 방식인 데이터 포맷에 대한 관심도 많은데요. 이에 대해 관심있으신 분들은 이 영상을 참조해주세요.
* [Cityscapes](https://www.cityscapes-dataset.com/):  
자율주행에서 사용될 수 있는 도로환경과 관련된 가장 유명한 데이터셋입니다. 50개 도시의 거리 장면에서 기록된 다양한 스테레오 비디오 시퀀스 세트를 포함하는 새로운 대규모 데이터셋으로 도시 장면에 대한 의미론적 이해에 중점을 둡니다.
* [Open image](https://storage.googleapis.com/openimages/web/index.html):  
구글이 머신러닝을 위해 2016년에 공개한 이미지에 주석이 달린 데이터셋으로 약 190만개에 전문 라벨러들이 라벨링을 검수한 이미지들을 포함하고 있습니다. 데이터셋은 V1부터 계속 업데이트 되어 2020년 2월 기준으로 가장 최신 버전인 V6버전까지 공개되었습니다. 이미지 상의 객체간 관계를 보여주는 라벨링, 이미지를 설명하는 캡션과 음성 나레이션이 추가되어 이미지와 캡션 사이를 연결하는 복잡한 모델을 만드는 데 유용하게 사용되고 있습니다.

## 프로그램 라이브러리 🔩
* MMDetection : PyTorch 기반. [github](https://github.com/open-mmlab/mmdetection)
* Ultralytics YOLO V3 : PyTorch 기반. [github](https://github.com/ultralytics/yolov3)
* AutoML EfficientDet : (가벼움)TensorFlow, Keras 기반. [github](https://github.com/google/automl/tree/master/efficientdet)
* OpenCV DNN : [github](https://github.com/opencv/opencv)
* TensorFlow Hub : [github](https://github.com/tensorflow/hub)

[이미지 출처](https://sungyun7295.tistory.com/25)