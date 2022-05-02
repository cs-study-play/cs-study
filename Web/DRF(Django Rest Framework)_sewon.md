### 💕 DRF(Django Rest Framework)란? 💕
![image](https://user-images.githubusercontent.com/55613591/166238243-e8e64a79-0f18-44c1-a22f-549361946443.png)

```
Django안에서 Restful API 서버를 쉽게 구축할 수 있도록 도와주는 오픈소스 라이브러리
```
Django는 파이썬으로 웹 서버를 구축할 수 있게 하는 툴이다. 

서버 구축을 하게 된다면 거의 당연히 따라오는 것이 있는데, 바로 REST api 이다.

REST는 HTTP의 URL과 HTTP method(GET, POST, PUT, DELETE)를 사용하여 API 사용 가독성을 높인 구조화된 시스템 아키텍쳐인데, 

DRF는 이 REST api 서버를 만드는 데 도움을 주는 툴이다.

<hr/>

### 💕 DRF(Django Rest Framework)의 장점 💕
- 범용성이 좋은 웹 브라우저 API를 사용한 쉬운 개발, RESTful한 서버를 보다 쉽고 빠르게 만들기 가능
- OAuth1, OAuth2를 위한 추가적인 패키지가 인증 정책에 추가되어 있는 경우에 사용하기 유용함
- DB data를 Json으로 직렬화하는(serialize)기능
- 국제적인 기업들을 포함해서 다수의 기업이 사용하기 때문에 커뮤니티가 잘 되어 있음
이렇게 DRF를 사용하면 얻을 것이 많다.

일단 RESTful api를 쉽게 만들수 있다는 것 뿐만 아니라, 직렬화 기능이 바로 있다는 것이 두드러지는 장점이자 특징이다.

 

#### 👉 여기서 직렬화는 무엇일까?

 
```
" DB data를 JSON data로 변환 " 해주는 기능을 말한다.
```

참고로 serializer는 파이썬 형식의 코드를 다른 네트워크 환경과의 통신을 위해 직렬화 할 때, DRF에서 직렬화를 담당하는 클래스이다. 
queryset, model instance등의 복잡한 데이터를 python datatype으로 변환시켜 json, xml등의 컨텐츠 타입으로의 변환을 쉽게 만들어준다. 

 

직렬화는 이름 처럼 models에 작성한 대로 json 형태로 linear 하게 보여주는 것이다.

 

역직렬화라는 것도 있는데, 이는 직렬화와 반대되는 개념으로 

linear 한 json를 다시 구조화된 구조체로 만드는 것이다.

 

보통 정보를 보내는 쪽이 직렬화를 하게 되고, 정보를 받는 쪽이 역직렬화를 하게 된다.

 

이러한 직렬화 되는 방법과 역직렬화하는 방법이 동일해야 다른 환경과 데이터를 주고 받을 수 있다.

 

이전에 진행했던 프로젝트에서 코드를 조금 가져와서 예시를 보이면 다음과 같다.

```
from rest_framework import serializers
from .models import *
from user.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

```
위의 코드를 보면 meta class에 [ fields='__all__' ] 라고 적어둔 부분이 있는데, 이렇게 쓸 경우 한 번에 모델 내의 모든 필드가 사용될 수 있다는 의미이다. 

 

일일히 값 하나씩을 나열하면서 모델 인스턴스에 정의할 필요가 없어지는 것이다.

<hr/>

### 💕 이외에 쓰면서 편했던 부분 💕

![image](https://user-images.githubusercontent.com/55613591/166237715-2317f1e4-4087-402d-8a9d-352457acab87.png)

이 사진 처럼 api를 호출 할때 결과 정보를 보기 좋게 구성해서 용이 했다. 포스트맨을 굳이 사용하지 않아도 GET 같은 것은 바로 보기 좋게 보여줬기 때문이다. (아마 여기서도 바로 post 등도 할 수 있는 것으로 알고 있는데, 실험을 안해봐서 정확하지는 않다.)

<hr/>

또한 이건 내가 사용해보진 않았지만 공부를 하면서 발견한 점인데, 

@api_view Decorator 라는 것을 이용하면, 함수 기반 api 뷰를 짤 수 있다는 점이다.

이전 프로젝트에서는 APIView 클래스를 통해 클래스 기반 api 뷰를 짰었는데, 다른 방법도 있는 것을 알고 놀랐다.

 

사실 기능적으로는 눈에 보이는 큰 차이는 없다.

(뇌피셜이지만, 뭔가 React의 함수형 컴포넌트와 클래스형 컴포넌트 처럼 구현 방식은 다르지만 작동하는 것은 거의 똑같은 느낌이었다.)

 

일단 차이를 비교해보자면, api_view 데코레이터는 각각의 request가 오면 조건문에 의해 구분되어 그에 맞는 결과를 반환하는 식으로 동작한다. 반면 APIView 클래스는 APIView를 상속받은 클래스 안에 request 메소드에 맞는 함수를을 정의하면, 각각의 request는 메소드 이름에 맞게 구분되어 결과를 반환하게 된다.

 

예시를 가져왔다.
```
@api_view(['GET', 'POST'])
def article_list_create_api_view(request):
    if request.method == 'GET':
        articles = Article.objects.filter(active=True)
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ArticleListCreateAPIView(APIView):

    def get(self, request):
        articles = Article.objects.filter(active=True)
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```
위의 코드가 함수 기반이고 밑의 코드가 클래스 기반이다.

Django를 이용했던 프로젝트가 끝난지는 거의 한달쯤 되었지만, 개념적인 부분을 따로 정리하지 않았던 것 같아, 이번 기회에 정리해보았다. 

 

사실 난 강경 Spring Boot 파였는데 요즘 머신러닝이랑 데이터 분석을 하게 되어서 파이썬을 많이 쓰는 바람에 Django도 종종 쓸 것 같다.. 진짜 개발을 배울수록 배울게 많은 것 같다.

<hr/>


#### 참고문헌

https://velog.io/@ifyouseeksoomi/DRF-Django-REST-Framework-간단한-예습-Serializer

https://velog.io/@nathan29849/Django-Rest-Framework로-API-개발하기

https://hangjastar.tistory.com/203
