# Sticky Todo

## 기술스택

-   ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=javascript&logoColor=white) [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://ko.vite.dev)
-   [![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)](https://reactjs.org) ![React_Hook_Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=reacthookform&logoColor=black) [![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main)
-   [![React Query](https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query/latest/docs/framework/react/overview) [![Axios](https://img.shields.io/badge/Axios-%235A29E4?style=flat-square&logo=axios)](https://axios-http.com/kr/docs/intro)
-   [![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=flat-square&logo=chakraui&logoColor=white)](https://www.chakra-ui.com/)

## 실행방법

1. [서버 실행](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api) (포트: 8080으로)
2. [입장](https://narcisource.github.io/wanted-pre-onboarding-challenge-fe-27)

## 스크린샷

![Sticky-Todo](https://github.com/user-attachments/assets/b1918442-0660-499f-8f4f-f4e381aba310)

## 요구사항

### Assignment 1 - Login / SignUp

-   /auth 경로에 로그인 / 회원가입 기능을 개발합니다
    -   로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
    -   [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
-   이메일과 비밀번호의 유효성을 확인합니다
    -   [x] 이메일 조건 : 최소 `@`, `.` 포함
    -   [x] 비밀번호 조건 : 8자 이상 입력
    -   [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
-   로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
    -   [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
    -   [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
    -   [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

### Assignment 2 - Todo List

-   Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
    -   [x] 목록 / 상세 영역으로 나누어 구현해주세요
    -   [x] Todo 목록을 볼 수 있습니다.
    -   [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
    -   [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
    -   [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
-   한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
    -   [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
    -   [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
-   한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

    -   [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 폴더구조

```python
Sticky-TODO
├─ .env
├─ .git
├─ .gitignore
├─ .prettierrc
├─ auth.html
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
├─ README.md
├─ src
│  ├─ api
│  │  ├─ interceptors # axios 인터셉트
│  │  │  ├─ todoRequest.ts
│  │  │  ├─ todoResponse.ts
│  │  │  └─ userResponse.ts
│  │  ├─ services # 서비스별 api 호출 함수
│  │  │  ├─ todo
│  │  │  │  ├─ createTodo.ts
│  │  │  │  ├─ deleteTodo.ts
│  │  │  │  ├─ readAllTodo.ts
│  │  │  │  ├─ readTodo.ts
│  │  │  │  └─ updateTodo.ts
│  │  │  └─ user
│  │  │     ├─ loginUser.ts
│  │  │     └─ signUpUser.ts
│  │  ├─ todoApi.ts
│  │  └─ userApi.ts
│  ├─ App.tsx # 프로바이더 스택
│  ├─ auth.tsx # 진입점
│  ├─ components # 컴포넌트 모음
│  │  ├─ auth
│  │  │  ├─ LoginForm.tsx
│  │  │  ├─ LoginFormLayout.tsx
│  │  │  ├─ SignUpForm.tsx
│  │  │  └─ SignUpFormLayout.tsx
│  │  ├─ layouts
│  │  │  ├─ CommonLayout.tsx
│  │  │  ├─ Navbar.tsx
│  │  │  └─ Popover.tsx
│  │  ├─ todoCard
│  │  │  ├─ TodoCardAddable.tsx
│  │  │  ├─ TodoCardItem.tsx
│  │  │  ├─ TodoCardList.tsx
│  │  │  └─ TodoDeleteButton.tsx
│  │  ├─ todoDetail
│  │  │  ├─ TodoDetail.tsx
│  │  │  ├─ TodoEditable.tsx
│  │  │  └─ TodoView.tsx
│  │  ├─ todoForm
│  │  │  ├─ TodoForm.tsx
│  │  │  └─ TodoFormLayout.tsx
│  │  └─ ui
│  ├─ entities # 도메인 객체
│  │  ├─ LoginCredential.ts
│  │  ├─ SignUpCredential.ts
│  │  └─ TodoItem.ts
│  ├─ hooks # 커스터마이징 훅
│  │  └─ useLoggedIn.ts
│  ├─ index.css
│  ├─ main.tsx # 진입점
│  ├─ pages # 페이지
│  │  ├─ auth
│  │  │  └─ AuthPage.tsx
│  │  └─ todo
│  │     ├─ TodoDetailPage.tsx
│  │     └─ TodoPage.tsx
│  ├─ router # 라우터
│  │  ├─ authRouter.tsx
│  │  └─ mainRouter.tsx
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ vitest.workspace.ts
```
