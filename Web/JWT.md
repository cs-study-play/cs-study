클라이언트-서버 구조에서 Rest API를 사용하는 경우가 매우 많은다. Rest API는 특히 인터넷을 이용한 통신이기 때문에 보안을 신경써야 하는데 API KEY를 이용한 보안과 TOKEN을 이용한 보안 방식 등이 있다.

그중에서도 Token을 이용한 보안 방식인 JWT(Json Web Token)에 대해 알아보고자 한다.

<br><br>

## Token 인증 방식

클라이언트가 인증 서버에 요청하면 유효한 토큰을 발급해주고, 클라이언트는 토큰을 저장하여 그 이후 인증이 필요한 활동을 할 때 사용하는 방식이다. 사용할 수 있는 토큰의 종류도 여러가지이다. 자주 비교되는 것은 OAuth Bearer token과 JWT이다.

1. OAuth Bearer token

- OAuth와 JWT를 비교하는 경우가 많지만 OAuth는 인증, 인가를 위한 프레임워크이기때문에 일대일 비교는 어렵다. 오히려 산출물인 OAuth Bearer token과 비교하는 것이 적당하다.
- 토큰 자체는 랜덤한 문자열로 특별한 정보를 가지고 있지 않다. 다만 서버에서 토큰을 발급해줄 때 토큰과 함께 관련 정보를 저장하기 때문에 토큰을 이용해 해당 정보에 접근하여 인증/인가가 가능하다.

<img src="https://t1.daumcdn.net/cfile/tistory/266EC05054CAE28510">
출처 : https://bcho.tistory.com/999

2. Claim 기반 토큰

- 특정한 구조에 정보를 담고 있는 토큰이다.
- 사용자에 대한 속성을 Claim이라 하며 특정 형식을 이용해 Claim을 정의한 토큰이다.
- 서버 측에서 따로 정보를 저장할 것 없이 토큰에 정보가 저장 되어 매번 별도로 서버에서 인증과 인가를 위한 조회를 할 필요가 없다.

<img src="https://t1.daumcdn.net/cfile/tistory/2573FD5054CAE2870D">
출처 : https://bcho.tistory.com/999

<img src="https://auth0.com/learn/wp-content/uploads/2016/01/17-1024x538.png">
출처 : https://auth0.com/learn/json-web-tokens/?_gl=1*1lrhrzv*rollup_ga*NzEyMTAwOTc4LjE2NTUxMjgzODc.*rollup_ga_F1G3E656YZ*MTY1NTEzMzE3Mi4yLjEuMTY1NTEzNTA5MS41NQ..&_ga=2.216326870.13681769.1655128387-712100978.1655128387

<br><br>

## JWT의 특징

1. Stateless와 확장성

- 이는 서버에 세션을 저장하던 기존의 방식과 달리 토큰을 이용한 보안 방식 전체의 특징이라고 할 수 있다.
- 서버에 유저의 로그인 상태를 저장해놓을 필요가 없어 분산 처리가 용이하고 프로그램 구조가 더 간단해진다는 장점을 갖는다.

2. Claim 기반의 토큰

- 정보 자체를 토큰이 가지고 있어 매번 인증 서버에 토큰을 조회할 필요가 없어 부하가 줄어든다.

3. 무결성

- 한 번 발급한 토큰은 수정할 수 없으므로 claim의 무결성이 보장된다.

3. 사용 편의성

- 다른 Claim 기반의 토큰에 비해 길이가 짧고, 파싱이 편리하다는 장점이 있다.
- SAML(Security Assertion Markup Language Tokens)의 경우 XML을 이용해 같은 내용을 담더라도 훨씬 길이가 길고 파싱이 어려운 형태로 저장이 된다.
  <img src="https://cdn.auth0.com/content/jwt/comparing-jwt-vs-saml2.png">
  출처 : https://jwt.io/introduction

<br><br>

## JWT의 구조

JWT는 Header와 Payload, Signature로 구성되어 있으며 xxx.yyy.zzz의 형식으로 나타낼 수 있다.

1. Header

- alg : 사용한 알고리즘
- typ : 토큰의 종류 (JWT)

2. Payload

- claim을 담고 있는 곳으로 아래 언급한 것 외에도 여러 정보를 담을 수 있다. [참고](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1)
- sub : 토큰의 주인. 서비스 이용자(토큰을 발급받은 자)
- iss : 토큰을 발행한 주체
- iat : 토큰을 발행한 날짜와 시간
- exp : 토큰이 만료되는 시간

3. Signature

- 전자 서명 발행을 위한 부분으로 토큰의 유효성 검사에 사용됨

<img src="https://cdn.auth0.com/blog/legacy-app-auth/legacy-app-auth-5.png">
출처 : https://jwt.io/introduction

<br><br>

## JWT 사용시 주의사항

1. 크기

- 일반 난수 문자열인 OAuth Bearer token과 달리 Claim을 담고 있기 때문에 자칫 잘못하면 크기가 매우 커질 수 있다.
- HTTP Header에 저장 가능한 크기가 약 8K(웹서버마다 다르다고 함)로 제한되어 있어 너무 많은 정보를 담으려하면 안된다.
- 토큰의 길이가 길어지면 네트워크 대역폭을 많이 차지하게 돼 낭비가 심해질 수 있다.

2. 만료 시간

- 위에서 언급했듯 JWT는 수정이 불가능한 토큰으로 잘못 발급해도 수정할 수 없다.
- 만료 시간을 명시해 잘못된 토큰을 사용하는 일을 줄여야 한다.

<br><br>

## 참고

https://jwt.io/introduction
<br>
https://bcho.tistory.com/999
<br>
https://brunch.co.kr/@sangjinkang/50
<br>
https://dongwooklee96.github.io/post/2021/03/28/rest-api-%EB%B3%B4%EC%95%88-%EB%B0%8F-%EC%9D%B8%EC%A6%9D-%EB%B0%A9%EC%8B%9D/
<br>
https://velog.io/@city7310/%EB%B0%B1%EC%97%94%EB%93%9C%EA%B0%80-%EC%9D%B4%EC%A0%95%EB%8F%84%EB%8A%94-%ED%95%B4%EC%A4%98%EC%95%BC-%ED%95%A8-5.-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%EC%A6%9D-%EB%B0%A9%EC%8B%9D-%EA%B2%B0%EC%A0%95
