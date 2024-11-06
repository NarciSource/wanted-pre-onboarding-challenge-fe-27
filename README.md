# Sticky Todo

## 기술스택

-   ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=javascript&logoColor=white) [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://ko.vite.dev)
-   [![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)](https://reactjs.org) [![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main) [![React_Hook_Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white)](https://www.react-hook-form.com/)
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

## 컴포넌트 구성

![components](https://github.com/user-attachments/assets/d1803e7c-e84e-43b5-8ecf-c4e556e7bbd0)

## 아키텍처

<p align="center">
<img src="https://github.com/user-attachments/assets/c8b1d33a-9afb-404a-8de7-26013937b95f" width="50%" />
</p>

## 폴더구조

```python
Sticky-Todo
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
│  ├─ icons
│  │  └─ todo_list.svg
│  └─ images
│     └─ logo.png
├─ README.md
├─ src
│  ├─ index.css
│  ├─ main.tsx # /main 진입점
│  ├─ auth.tsx # /auth 진입점
│  ├─ App.tsx # 프로바이더 스택
│  ├─ api # 외부 api 호출 설정
│  │  ├─ interceptors # axios 인터셉트
│  │  │  ├─ todoRequest.ts
│  │  │  ├─ todoResponse.ts
│  │  │  └─ userResponse.ts
│  │  ├─ services # 서비스별 api 호출 함수
│  │  │  ├─ serverHealthy
│  │  │  │  └─ ping.ts
│  │  │  ├─ todo
│  │  │  │  ├─ createTodo.ts
│  │  │  │  ├─ deleteTodo.ts
│  │  │  │  ├─ readAllTodo.ts
│  │  │  │  ├─ readTodo.ts
│  │  │  │  └─ updateTodo.ts
│  │  │  └─ user
│  │  │     ├─ fetchLogin.ts
│  │  │     └─ fetchSignUp.ts
│  │  ├─ todoApi.ts
│  │  └─ userApi.ts
│  ├─ app # 애플리케이션 설정
│  │  ├─ contexts # 중앙 상태저장소
│  │  │  └─ HealthyCheckContext.tsx
│  │  ├─ hooks # 커스텀 훅
│  │  │  ├─ useLoggedIn.ts
│  │  │  └─ useServerHealth.ts
│  │  └─ router
│  │     ├─ authRouter.tsx
│  │     └─ mainRouter.tsx
│  ├─ components # 컴포넌트 모음
│  │  ├─ layouts
│  │  │  ├─ CommonLayout.tsx
│  │  │  ├─ Navbar.tsx
│  │  │  └─ Popover.tsx
│  │  ├─ serverHealth
│  │  │  └─ ServerHealthCheck.tsx
│  │  ├─ todoCard
│  │  │  ├─ EmptyCardItem.tsx
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
│  │  ├─ ui
│  │  └─ user
│  │     ├─ LoginForm.tsx
│  │     ├─ LoginFormLayout.tsx
│  │     ├─ SignUpForm.tsx
│  │     └─ SignUpFormLayout.tsx
│  ├─ entities # 도메인 모델
│  │  ├─ LoginCredential.ts
│  │  ├─ SignUpCredential.ts
│  │  └─ TodoItem.ts
│  ├─ pages # 페이지
│  │  ├─ auth
│  │  │  └─ AuthPage.tsx
│  │  └─ todo
│  │     ├─ TodoDetailPage.tsx
│  │     └─ TodoPage.tsx
│  ├─ services # 애플리케이션 서비스
│  │  ├─ todo
│  │  │  ├─ getAllTodos.ts
│  │  │  ├─ getTodo.ts
│  │  │  ├─ removeTodo.ts
│  │  │  └─ upsetTodo.ts
│  │  └─ user
│  │     ├─ login.ts
│  │     └─ signUp.ts
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ vitest.workspace.ts

```
