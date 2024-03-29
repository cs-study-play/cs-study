# DevOps
[원본 링크](https://paabaep.tistory.com/59)
### 📝 DevOps 모델 정의

DevOps는 애플리케이션과 서비스를 빠른 속도로 제공할 수 있도록 조직의 역량을 향상 시키는 '문화 철학' 과 '방식 및 도구'의 조합이다.
DevOps를 사용하는 조직은 기존의 소프트웨어 개발 및 인프라 관리 프로세스를 사용하는 조직보다 제품을 더 빠르게 혁신하고 개선할 수 있다. 
이런 빠른 속도를 통해 더 나은 고객지원은 물론 더 효과적인 시장 전략을 만들 수 있다.
![image](https://user-images.githubusercontent.com/55613591/158169094-5fb88d15-4be5-4e0e-9958-6d07f9907d12.png)


### 🛠 DevOps 작동 방식

이 모델에서는 개발팀과 운영팀이 고립되어 존재하지 않는다. 이 두 팀이 단일팀으로 합쳐서 엔지니어가 개발에서 테스트, 배포, 운영에 이르기까지 전체 애플리케이션 수명 주기에 걸쳐 작업하고 단일 기능에 한정되지 않은 광범위한 기술을 개발하게 된다.

이런 팀에서는 속도가 느리고 수동으로 진행되던 프로세스를 자동화 하게 된다. 애플리케이션을 안정적으로 빠르게 운영하고 개선하는 데 도움이 되는 다양한 기술 스택과 도구의 사용으로 엔지니어는 코드 배포, [인프라 프로비저닝](https://www.redhat.com/ko/topics/automation/what-is-provisioning)와 같은 작업을 독립적으로 수행할 수 있게 된다. 이는 나아가 팀 전체의 작업속도 향상에 도움을 준다.

### 🐣 DevOps 이점

1. 속도

    작업 속도가 빨라지므로, 더 빠른 혁신에 도움이 되고, 시장변화에 잘 적응할 수 있게 된다. 
    **마이크로 서비스**와 **지속적 전달**을 사용하면 빠른 업데이트 릴리즈가 가능해진다.

2. 신속한 제공
	
    릴리즈의 빈도와 속도를 개선해서 제품을 더 빠르게 혁신하고 개선할 수 있다.
    빠르게 고객 요구에 대응 가능해지므로 제품의 시장성을 강화할 수 있다.
    **지속적 통합**과 **지속적 전달**은 빌드에서 배포까지 소프트웨어 릴리즈 프로세스를 자동화하는 방식이다.
    
3. 안정성

	End user에게 지속적으로 긍정적인 경험을 제공하는 한편, 
    더 빠르게 안정적으로 제공할 수 있도록 애플리케이션 업데이트와 인프라 변경의 품질을 보장한다.
    **지속적 통합** 및 **지속적 전달**과 같은 방식을 사용해서 각 변경사항이 올바르게 작동하는지, 안전한지 등을 테스트 한다.
    **모니터링과 로깅** 방식을 통해 실시간으로 성능에 대한 정보를 얻을 수 있다.
    
4. 확장

	규모에 따라 인프라와 개발 프로세스를 운영 및 관리한다.
    자동화의 일관성이 지원되므로 위험을 줄이면서 복잡한 시스템 또는 변화하는 시스템을 효율적으로 관리하는 것이 가능해진다.
    예를 들어 **코드형 인프라**를 사용하면 개발, 테스트 및 프로덕션 환경을 반복하고 좀 더 효율적인 방식으로 관리할 수 있다.
    
5. 협업 강화

	주인 의식 및 책임과 같은 가치를 강조하는 DevOps 문화 모델은 보다 효과적인 팀을 구축하는 데 도움을 준다.
  개발자와 운영팀은 긴밀하게 **협력**하고, 많은 책임을 공유하면서 워크플로우를 결합한다.
  이런 과정을 통해 개발자와 운영팀 간의 인도 기간 단축, 실행되는 환경을 고려한 코드 작성과 같이 비효율성을 줄이고 시간을 절약한다.
    
6. 보안

	제어를 유지하고 규정을 준수하면서 신속하게 진행할 수 있다.
  자동화된 규정 준수 정책, 세분화된 제어 및 구성 관리 기술을 사용함으로써 보안을 그대로 유지하면서 DevOps 모델을 도입할 수 있다.
  예를 들어 코드형 인프라와 **코드형 정책**을 사용하면 규모에 따라 규정 준수를 정의하고 추적할 수 있다.
    
### 🎯 DevOps가 중요한 이유

```
빠르게 변화하는 End User의 요구와 발전하는 기술들은 이제 흔한 이야기가 되었다. 
소프트웨어는 과거 비즈니스를 지원하는 것에 초점이 맞춰져 있었다면 이제는 비즈니스 모든 부분에서 핵심적인 구성요소로서 자리하고 있다. 
소프트웨어가 핵심이 된 만큼 이를 구축하고 제공하는 방법을 혁신해야 하기 때문에 DevOps는 점점 더 중요해지고 있다.
```

### 🌱 간단한 DevOps 도입방법 (방식 설명)

* 기본 방식 : 소규모 업데이트를 자주하는 것 (각 배포의 위험이 줄며, 더 빠르게 버그의 원인을 찾아 해결할 수 있게 됨)
* 마이크로 서비스 아키텍쳐 사용 : 애플리케이션의 유연성과 혁신의 속도를 높일 수 있음, 업데이트를 위한 조정 오버헤드 줄이기 가능

### 🎶 DevOps 모범 사례

1. [지속적 통합](https://aws.amazon.com/devops/continuous-integration/)   
	자동화된 빌드 및 테스트가 수행된 후, 개발자가 코드 변경 사항을 중앙 리포지토리에 정기적으로 병합하는 소프트웨어 개발 방식
    신속한 버그 해결, 소프트웨어 품질 개선, 새로운 소프트웨어 업데이트를 검증 및 릴리즈하는 데 걸리는 시간 단축이 목표

2. [지속적 전달](https://aws.amazon.com/devops/continuous-delivery/)   
	프로덕션에 릴리즈 하기 위한 코드 변경이 자동으로 빌드, 테스트 및 준비된느 소프트웨어 개발 방식
    빌드 이후의 모든 코드 변경 사항을 테스트 환경 및 프로덕션 환경에 배포함으로서 지속적 통합을 확장
    지속적 전달이 적절하게 구현되면, 개발자는 언제나 즉시 배포가 가능해짐과 동시에 표준화된 테스트 프로세스를 통과한 빌드 아티팩트를 보유
    
3. 마이크로 서비스   
	단일 애플리케이션을 작은 서비스의 집합으로 구축하는 설계 접근 방식
    각 서비스는 자체 프로세스에서 실행, 주로 HTTP 기반의 API라는 간편한 메커니즘을 사용하는 잘 정의된 인터페이스를 통해 다른 서비스와 통신
    보통 비즈니스 기능 중심으로 구축되며, 각 마이크로 서비스는 단일 목적으로 한정
    다양한 프레임워크 또는 언어를 사용하여 각 마이크로 서비스를 제작하고 이를 독립적으로 배포하거나 서비스 그룹으로 묶어 배포 가능
    
4. 코드형 인프라   
	버전관리 및 지속적 통합과 같은 코드와 소프트웨어 개발 기술을 사용해서 인프라를 프로비저닝하고 관리하는 방식
    클라우드의 API 중심 모델을 사용하면 개발자와 시스템 관리자가 수동으로 리소스를 설정, 구성할 필요없이
    프로그래밍 방식으로 대규모 인프라와 상호 작용 가능해짐   
      * 구성관리 : 코드를 사용함으로써 구성 변경을 반복하고 표준화 할 수 있음(이를 수동으로 구성할 필요 없어짐)
      * 코드형 정책 : 코드를 통해 설명된 인프라는 자동화된 방식으로 추적, 검증, 재구성이 가능해짐

5. 모니터링 및 로깅   
	지표와 로그를 모니터링해서 애플리케이션 및 인프라의 성능이 제품의 최종 UX에 어떤 영향을 미치는 지 확인
    문제의 근본 원인 또는 예상치 못한 변경에 대한 통찰력을 확보할 수 있어짐
    특히 서비스는 24시간 구동되어야 하기 때문에 적극적인 모니터링이 중요한데, 이에 도움을 줄 수 있음
    
6. 커뮤니케이션 및 협업   
	많은 커뮤니케이션과 협업은 DevOps에서 중요한 문화적 측면
    위의 자동화 도구등을 통해 개발 및 운영의 워크플로와 책임을 물리적으로 합침으로써 협업이 이루어짐
    이 위에 채팅, 문제 또는 프로젝트 추적 시스템, wiki를 사용하여 커뮤니케이션을 지원하고 정보를 공유하는 강력한 문화적 표준을 확립
    
![image](https://user-images.githubusercontent.com/55613591/158169303-b8f2be45-2e98-4e27-9b58-f8a2491f4347.png)

    
 ### 📚 참고 문헌
 https://aws.amazon.com/ko/devops/what-is-devops/
 
 
 
