# 🖱️ [딸깍톤] Vibe Coding으로 4시간 안에 디자인부터 배포까지
 ## MEMORY ALCHEMY

  > 부끄럽고 지우고 싶은 기억을 AI가 새로운 서사로 재구성해주는 웹 앱

  ---

  ### 프로젝트 소개

  사용자가 입력한 부정적인 기억을 선택한 모드에 따라 LLM이 새로운 형식으로 변환합니다.
  교훈, 뉴스 기사, 음모론, 법정 판결문 중 원하는 스타일을 선택해 기억을 미화할 수 있습니다.

  ---

  ### 주요 기능

  - 기억 입력 → 미화 모드 선택 → AI 변환 결과 출력
  - 4가지 변환 모드: **The Lesson / The News / The Conspiracy / The Verdict**
  - 원본 기억과 변환된 기억을 나란히 비교
  - 원본 기억 삭제 시뮬레이션 (로딩 애니메이션 포함)
  - Markdown 형식으로 렌더링된 변환 결과

  ---

  ### 기술 스택

  | 분류 | 기술 |
  |------|------|
  | Frontend | React 19, TypeScript |
  | Build Tool | Vite |
  | Styling | Tailwind CSS v3, @tailwindcss/typography |
  | Routing | React Router v6 |
  | Markdown | react-markdown |
  | AI API | Claude Sonnet 4.6 (MindLogic Gateway) |
  | Font | Manrope, Pretendard, Inter (Google Fonts) |

  ---

  ### 시작하기

  ```bash
  # 의존성 설치
  npm install

  # 환경변수 설정
  cp .env.example .env
  # .env 파일에 VITE_API_KEY 입력

  # 개발 서버 실행
  npm run dev

  ---
  환경변수

  VITE_API_KEY=your_api_key_here

  ▎ .env 파일은 .gitignore에 등록되어 있어 Git에 업로드되지 않습니다.

  ---
  페이지 구성

  ┌──────────┬──────────────────────┐
  │   경로   │         설명          │
  ├──────────┼──────────────────────┤
  │ /        │ 기억 입력             │
  ├──────────┼──────────────────────┤
  │ /mode    │ 변환 모드 선택        │
  ├──────────┼──────────────────────┤
  │ /result  │ 변환 결과 확인        │
  ├──────────┼──────────────────────┤
  │ /erasing │ 삭제 진행 애니메이션  │
  ├──────────┼──────────────────────┤
  │ /failed  │ 삭제 실패 화면        │
  ├──────────┼──────────────────────┤
  │ ```      │                      │
  └──────────┴──────────────────────┘
