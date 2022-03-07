# 브라우저(browser)란?
 ✔ 웹 서버에서 이동하며(navigate) 쌍방향으로 통신하고 HTML 문서나 파일을 출력하는 그래픽 사용자 인터페이스 기반의 응용 소프트웨어이다.<br>
 출처 : [위키백과](https://ko.wikipedia.org/wiki/%EC%9B%B9_%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80)<br><br>

# 렌더링(rendering)이란?
✔ HTML, CSS, Javascript 등을 브라우저에서 그래픽 형태로 출력하는 과정이다

<br>각 브라우저는 렌더링을 수행하는 <u>렌더링 엔진</u>이 존재한다  👇
![engine](https://www.wishket.com/media/news/646/2.png)<br><br>
렌더링 엔진은 요청 받은 내용을 화면에 표시하는데,  그 과정은 다음과 같다<br>
## <br>1. 파싱을 통한 DOM(<u>Document Object Model</u>)  &  CSSOM(<u>CSS Object Model</u>) 트리 생성
![DOM](https://miro.medium.com/max/1400/0*rkjgCl-RSVTvRGgS)
<br><center> ___DOM tree___</center><br>
<br>![CSSDOM](https://miro.medium.com/max/1164/0*SMOVnyZjS0-Tp-pp)
<br><center>___CSSDOM tree___</center><br><br>
## <br>2. 렌더링 트리 생성(DOM  +  CSSDOM)<br><br>
<br>![Rendering](https://miro.medium.com/max/1400/0*9Xbmy7JUOcRxn2Vh)<br>
<br><center>___Rendering tree___</center><br><br>
## <br>3. 렌더링 트리에서 각 노드의 위치와 크기 값을 계산, 계산된 값을 이용해 화면상의 실제 픽셀로 변환하여 화면에 페인팅함. 이때 변환된 결과는 여러개의 레이어로 관리됨<br><br>
# 이 과정을 5단계로 나눈다면?
+ __Parsing__(트리 구성)  
+ __Style__(렌더트리 구성) 
+ __Layout__(노드 계산)
+ __Paint__(픽셀 변환) 
+ __Composite__(레이어 합성 -> 화면에 나타냄) 
