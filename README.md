# Youtube-Clone-Coding

유튜브의 오픈 API를 이용하여 유튜브를 클론코딩해보기
<br><br>

### 사용한 TECH STACK 

- JavaScript
- HTML
- CSS
- PostCSS
- ReactJS
- RESTAPI

<br><br><br>

### What I Learned
- 디스트럭쳐링: 
1. 기본적으로 ({ props })로 만들어주는 것
2. ({ props: { props안에 있는 프로퍼티 } })로 한번 더 디스트럭쳐링해서 props 안의 프로퍼티로 들어갈 수 있다

- service 폴더를 따로 만들어서 네트워크 통신하는 부분 클래스로 만들어 분리해주기
   -> 효과: 테스트에 영향을 주지 않고 가독성에도 도움이 되고, 그리고 불필요한 네트워크 통신을 하지 않아도 되서 성능에 악영향을 주지 않는다

- 컴포넌트는 무엇을 할 지 굳이 다 알 필요없이 필요하면 가져다 쓸 수 있도록 만들면 된다 'dependency injection'으로 미리 분리해놨다가 필요한 컴포넌트에 넣어서 사용하면 된다(모듈화해서)

- .env변수를 사용해서 API 키 숨기기

- postman 사용하여 API 개발하기

- PostCSS를 사용하여 css 모듈화하기

<br><br><br>

### 결과물

1. 유튜브의 동영상을 보여주기

![image](https://user-images.githubusercontent.com/70791860/131779681-a1aa42f3-134f-4c99-8ea3-ea95097cc951.png)

2. 원하는 동영상 검색하기

![image](https://user-images.githubusercontent.com/70791860/131779769-cf7a5e35-de62-4431-849d-316b087242a5.png)

3. 상세페이지에서 동영상보기와 관련 영상 보여주기
![image](https://user-images.githubusercontent.com/70791860/131802275-d0730c8a-9929-4830-b3eb-60c75ab22803.png)


<br><br><br>

### 느낀점

#### 1번 결과물을 구현하면서
- props로 넘겨주는 도중에는 간단하게 처리해서 넘겨주고 최종적으로 넘겨주는 곳에서 props를 프로퍼티로 연결해서 작성하기
- 중간에 작성하면 컴포넌트가 몰라도 되는 것들을 집어넣는 거라서 컴토넌트가 지저분해진다


#### 2번 결과물을 구현하면서
- 메서드(onClick 등)을 작성할 때는 안에 지저분하게 작성하지말고 따로 콜백만 넘겨주는 새로운 메서드를 작성해서 해당 이벤트 안에서 실행하여 코드를 깔끔하게 쓰기
- 네트워크 통신은 다른 파일에 빼서 깔끔하게 보이도록, 테스트에 용이하도록, 불필요한 네트워크 통신이 렌더링마다 발생하지 
