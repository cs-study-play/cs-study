# 쿠버네티스란?
- 쿠버네티스는 컨테이너 오케스트레이션 중 하나
- 컨테이너화된 애플리케이션의 자동 디플로이, 스케일링 등을 제공하는 관리시스템
- 구글에 의해 설계, 현재 리눅스 재단에 의해 관리

## 참고
해당 페이지는 쿠버네티스를 잘 설명해주는 44BITS라는 유튜브 채널의 [초보를 위한 쿠버네티스 안내서] 영상을 시청하고 이를 정리하였습니다.
[![미리보기](https://img.youtube.com/vi/Ia8IfowgU7s/0.jpg)](https://www.youtube.com/watch?v=Ia8IfowgU7s&list=PLIUCBpK1dpsNf1m-2kiosmfn2nXfljQgb)


## 컨테이너 오케스트레이션 
서버 관리 변화와 함계 알아보는 컨테이너 오케스트레이션
### 1. 문서화 📃
- .txt
- .ppt
- .pdf
 
### 2. 서버관리 도구 사용 🪛
- 기존에 직접 서버에 접속해서 명령어를 입력했다면 해당 도구를 이용하면 해당 도구가 명령어를 입력해줌
- 관리자는 도구에 맞게 프로그램을 설치하고 설정을 하면 됨
- 하지만 설정 도구를 공부해야 하며, 서버가 복잡해진다면 결국 관리가 힘들어 진다.
- 종류(예시)  
  - [Chef](https://docs.chef.io/platform_overview/)
  - [Puppet](https://puppet.com/docs/puppet/7/puppet_overview.html)
  - [Ansible](https://www.redhat.com/ko/technologies/management/ansible/what-is-ansible) 

### 3. 가상머신 💿
- 가상머신은 느리지만 관리도 직관적이지 않지만 괜찮음
- 하지만 클라우드 환경에 맞지 않음
- 특정 업체에 의존하게 됨.
- 멀티클라우드에 맞지 않음

### 4. docker 🐋
- 모든 실행 환경을 컨테이너로 구성
- 어떤 환경에서든 동작하기 쉬움
- 효율적으로 동작함
- 많은 서버관리자들의 복잡함을 해결해줌
- 컨테이너의 특징
  - 가상머신과 비교하여 컨테이너 생성이 쉽고 효율적
  - 컨테이너 이미지를 이용한 배포와 롤백 간단
  - 언어, 프레임워크에 상관없이 애플리케이션을 동일한 방식으로 관리
  - 개발, 테스팅, 운영 환경, 로컬, 클라우드에서 모두 동일한 환경을 구축할 수 있음
  - 특정 클라우드 업체에 종속적이지 않음
- 이러 장점 덕분에 점점 MySQL, redis, Jenkins 등 많은 소프트웨어를 컨테이너로 이용하게 됨
- docker를 이용한 개발 흐름 
  1) 코드작성
  2) docker 이미지 생성
  3) docker 이미지 저장
  4) docker 이미지 실행
- docker 이미지로 만들기만 하면 되기떄문에 서버 개발이 표준화가 됨
- 하지만 컨테이너가 매우 많아지면 각각의 컨테이너를 관리하는데 손이 많이 감
- 컨테이너의 개수가 많은 경우 생기는 문제점
  - 하나 하나 접속해서 실행해야하기 때문에 관리하기 어려움
  - 여유가 있는 서버가 무엇인지 모니터링하기 힘듬
  - 배포와 관련해서 롤아웃/롤백에 손이 많이 감
  - 마이크로서비스로 인해 내부 통신이 많아졌으며 이때 LoadBalancer 설치에 손이 많이감
  - 서비스 노출시 자동으로 설정이 안됨
  - 서비스 이상이나 부하 모니터링 불가

### 5. 컨테이너 오케스트레이션(Container Orchestration) 🎻
- 복잡 컨테이너 환경을 효과적으로 관리하기 위한 도구를 의미
- 서버관리자의 일을 대신 해주는 툴
- 특징 및 역핳
  1) 중앙제어 (master-node)
    - 컨테이너 오케스트레이션은 node를 cluster 단위로 추상화하여 관리함
    - 마스터 서버를 이용하여 다수의 cluster를 통제함
    - cluster 내부 node끼리 네트워크 통신이 잘 되도록 설정해줌
    - node의 개수가 매우 많더라도 문제 없이 돌아가도록 설정해줌
  2) 상태관리 
    - 관리자의 직접 조치 없이 알아서 상태를 유지해줌
  3) 배포 관리
    - 배포 시 서버를 자동으로 관리해줌 
  4) 배포 버전관리
    - RollOut/RollBack를 중앙관리
  5) 서비스 등록 및 조회
    - 등록된 서버를 사용하는 PROXY는 자동으로 재설정해줌 
  6) 볼륨 스토리지
    - 다양한 노드 각각에 볼륨을 마운트해야 하는 경우 설정으로 관리할 수 있음
- 다양한 오케스트레이션 도구들의 탄생
  - [Deis](https://github.com/deis/deis)
  - [RANCHER](https://rancher.com/why-rancher)
  - [MESOS](https://mesos.apache.org/)
  - [Marathon](https://mesosphere.github.io/marathon/)
  - [Nomad](https://www.nomadproject.io/)
  - [docker Swarm](https://docs.docker.com/engine/swarm/)
- 이러한 오케스트레이션 춘추전국시대에 지금 표준이 된 "Kubernetes"가 등장 🌅


## Kubernetes
(다음주 계속...)