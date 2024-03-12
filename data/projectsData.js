export const projects = [
  {
    id: "commerce",
    title: "커머스 프로젝트",
    projectPeriod: "2024.02.20 ~ 2023.03.04",
    headCount: "1명",
    techStacks: [
      "Vite",
      "Typescript",
      "REACT",
      "Context API",
      "Tanstack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Firebase",
    ],
    link: {
      gitHub: "https://github.com/jinsollee2023/community-project",
      website: "https://work-wave-sage.vercel.app/",
    },
    summary:
      "팀스파르타의 콘텐츠팀 체험형 인턴 업무로 수강생들에게 제공될 커머스 프로젝트의 데모페이지입니다. 정해진 라이브러리와 기술을 구현하는 과정에서 Pre-Fethcing, Compound component, 테스트 자동화 등 다양한 성능 최적화 및 안전성 향상에 대해 학습했습니다.",
    images: [
      require("@/public/images/commerce1.png"),
      require("@/public/images/commerce2.png"),
      require("@/public/images/commerce3.png"),
      require("@/public/images/commerce4.png"),
      require("@/public/images/commerce5.png"),
      require("@/public/images/commerce6.png"),
    ],
    mainFunction: [
      "로그인/회원가입",
      "상품 등록/조회/수정/삭제",
      "상품 검색 및 가격 필터링",
      "장바구니 담기 및 주문",
      "판매 및 구매 상태 변경",
    ],

    myFunctions: [
      {
        title: "",
        desc: [
          "React router를 사용해 비로그인과 로그인에 따른 페이지 접근 제한",
          "컴포넌트 및 라우트의 지연 로딩을 통해 초기 로딩 시간을 단축",
          "Error Boundary를 이용하여 비동기 호출에서 발생하는 에러 관리",
          "Cypress 라이브러리를 통해 테스트 자동화를 진행하여 테스트 커버리지를 높임",
        ],
      },
      {
        title: "로그인/회원가입",
        desc: [
          "Firebase Authentication를 통해 이메일/비밀번호 인증을 통한 회원가입 구현",
          "react-hook-form과 zod를 사용하여 불필요한 렌더링을 단축시키고 런타임에서 타입에러를 검증",
          "로그인 후 유저의 role을 로컬스토리지에 저장하여 api 요청 단축",
        ],
      },
      {
        title: "상품 등록/조회/수정/삭제",
        desc: [
          "useInfiniteQuery, useInView를 사용하여 무한스크롤 기능을 통해 게시물 데이터 로딩 속도 단축",
          "상품 등록시 상품 이미지는 이미지 최적화 라이브러리를 사용하여 파일 크기를 압축한 뒤 Firebase Storage에 저장",
          "Firebase의 다중 쿼리 지원 불가 문제로 카테고리 정렬과 동시에 상품 최신순 정렬에 어려움 -> 데이터 저장시 category_createdAt이라는 키를 만들어 startAt() 메서드를 통해 카테고리 정렬 후 endAt() 메서드를 통해 최신순 정렬",
          "상품 상세 조회에 데이터 prefetching을 적용하여 상세 페이지 데이터를 미리 받아오고, 첫 화면 렌더링 속도를 개선",
        ],
      },
      {
        title: "상품 검색 및 가격 필터링",
        desc: [
          "무한스크롤 적용시 최초로 불러온 데이터에서 필터링된 아이템이 특정 갯수보다 적을시 특정 액션 없이도 다음 데이터를 페칭해오도록 구현",
          "Firebase 다중 쿼리 지원 불가로 상품명과 가격 동시 검색에 어려움 -> 상품명으로 1차 필터링 된 데이터를 가져온 후 가격 필터링 진행",
        ],
      },
      {
        title: "장바구니 담기 및 주문",
        desc: [
          "Context API와 로컬스토리지를 활용함으로서 페이지 이동이나 새로고침 시에도 장바구니에 담긴 상품들이 유지되도록 구현",
          "주문 정보 폼을 Compound component 패턴을 적용하며 리액트 UI 컴포넌트 디자인 패턴 습득",
          "주문 정보 입력시 react-hook-form과 zod를 사용하여 불필요한 렌더링을 단축시키고 런타임에서 타입에러를 검증",
          "아임포트 결제 SDK을 연동하여 가상 결제 구현",
        ],
      },
      {
        title: "판매 및 구매 상태 변경",
        desc: [
          "Firebase를 활용하여 주문 정보 CRUD",
          "유저의 role에 따라 주문 상태 변경이 가능하도록 구현",
        ],
      },
    ],
    techDecision: [
      {
        title: "",
        desc: "Vite, Typescript, REACT, Context API, Tanstack Query, Tailwind CSS, shadcn/ui, Firebase",
      },
      {
        title: "",
        desc: "팀스파르타 체험형 인턴으로 주어진 라이브러리를 이용하여 프로젝트를 진행하였습니다.",
      },
    ],
  },
  {
    id: "community",
    title: "커뮤니티 프로젝트",
    projectPeriod: "2024.01.29 ~ 2023.02.19",
    headCount: "1명",
    techStacks: [
      "Vite",
      "Typescript",
      "REACT",
      "Context API",
      "Tanstack Query",
      "Tailwind CSS",
      "shadcn/ui",
      "Firebase",
    ],
    link: {
      gitHub: "https://github.com/jinsollee2023/community-project",
      website: "https://work-wave-sage.vercel.app/",
    },
    summary:
      "팀스파르타의 콘텐츠팀 체험형 인턴 업무로 수강생들에게 제공될 커뮤니티 프로젝트의 데모페이지입니다. 정해진 라이브러리와 기술을 구현하는 과정에서 Debounce, Lazy Loading, Optimistic Update 등 다양한 성능 최적화 방법에 대해 학습할 수 있었습니다.",
    images: [
      require("@/public/images/community1.png"),
      require("@/public/images/community2.png"),
      require("@/public/images/community3.png"),
      require("@/public/images/community4.png"),
      require("@/public/images/community5.png"),
      require("@/public/images/community6.png"),
      require("@/public/images/community7.png"),
    ],
    mainFunction: [
      "게시물 등록/조회/수정/삭제",
      "댓글 및 대댓글",
      "멀티 미디어 지원",
      "유저 조회 및 팔로우",
      "로그인/회원가입",
      "프로필 수정 및 비밀번호 변경",
    ],

    myFunctions: [
      {
        title: "",
        desc: [
          "React router를 사용해 비로그인과 로그인에 따른 페이지 접근 제한",
          "컴포넌트 및 라우트의 지연 로딩을 통해 초기 로딩 시간을 단축",
          "Error Boundary를 이용하여 비동기 호출에서 발생하는 에러 관리",
        ],
      },
      {
        title: "게시물 등록/조회/수정/삭제",
        desc: [
          "Firebase를 활용하여 게시물 CRUD",
          "useInfiniteQuery, useInView를 사용하여 무한스크롤 기능을 통해 게시물 데이터 로딩 속도 단축",
          "react-quill 텍스트 편집기 라이브러리를 사용하여 유저가 자유롭게 글을 작성할 수 있도록 함과 동시에 사진 및 동영상 업로드 기능 구현",
          "이미지, 동영상 resize 라이브러리를 사용하여 텍스트 편집기 내에서 이미지/동영상의 크기 및 정렬을 조절할 수 있게 함",
          "이미지 등록시 이미지 최적화 라이브러리를 사용하여 파일 크기를 압축한 뒤 Firebase Storage에 저장",
          "중복된 API 요청을 방지하고 UI 플리커링을 줄이기 위해 Debounce를 적용한 좋아요 기능 구현",
          "Optimistic Updates를 통해 유저에게 액션에 따른 즉각적인 피드백 제공",
        ],
      },
      {
        title: "댓글 기능",
        desc: [
          "Firebase를 활용하여 댓글 CRUD",
          "중복된 코드를 줄이기 위하여 게시물에 사용된 좋아요 컴포넌트를 함께 사용하여 좋아요 기능 구현",
          "게시글의 작성자는 모든 댓글을 삭제할 수 있도록 삭제 권한 부여",
          "대댓글은 원 댓글 바로 아래에 소규모 들여쓰기와 함께 표시되며, 대화의 흐름을 쉽게 따라갈 수 있도록 시간순 정렬",
          "Gif 파일을 댓글에 첨부하여 동적인 표현을 할 수 있도록 구현",
        ],
      },
      {
        title: "유저 조회 및 팔로우",
        desc: [
          "사용자가 검색창에 입력할 때, race condition을 방지하고 API 요청을 줄이기 위해 debounce를 적용",
          "Firebase를 활용하여 팔로우 기능 구현",
        ],
      },
      {
        title: "로그인/회원가입",
        desc: [
          "Firebase Authentication를 통해 이메일/비밀번호 인증을 통한 회원가입 구현",
          "react-hook-form과 zod를 사용하여 불필요한 렌더링을 단축시키고 런타임에서 타입에러를 검증",
          "구글 로그인의 경우 로그인 후 데이터베이스에 유저 데이터가 없을 시 프로필 등록으로 이동하여 프로필 데이터 저장",
        ],
      },
      {
        title: "프로필 수정 및 비밀번호 변경",
        desc: [
          "프로필 사진 수정시 storage에서 기존 프로필 삭제 후 새로운 이미지 저장",
          "데이터베이스의 유저 정보뿐 아니라 Firebase 유저 객체도 업데이트 진행",
          "구글 회원과 일반 회원을 구별하여 일반 회원만 비밀번호 변경이 가능하도록 구현",
        ],
      },
    ],
    techDecision: [
      {
        title: "",
        desc: "Vite, Typescript, REACT, Context API, Tanstack Query, Tailwind CSS, shadcn/ui, Firebase",
      },
      {
        title: "",
        desc: "팀스파르타 체험형 인턴으로 주어진 라이브러리를 이용하여 프로젝트를 진행하였습니다.",
      },
    ],
  },
  {
    id: "protfolio-website",
    title: "포트폴리오 웹사이트",
    projectPeriod: "2024.01.08 ~ 2024.01.31",
    headCount: "1명",
    techStacks: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    link: {
      gitHub: "https://github.com/jinsollee2023/portfolio",
      website: "https://jinsol-porifolio.vercel.app/",
    },
    summary:
      "포트폴리오 용도로 제작한 웹사이트로 현재 보고 있는 바로 이 웹사이트에 해당합니다. nextJS를 통해 웹사이트의 성능을 향상시키기 위해 노력하였으며, 모바일 뷰를 고려해 Tailwind CSS를 활용하여 반응형 디자인을 쉽게 구현하였습니다. NextJs, Tailwind CSS 등 새로운 기술을 학습할 수 있는 좋은 경험이었습니다.",
    images: [
      require("@/public/images/portfolio1.png"),
      require("@/public/images/portfolio2.png"),
      require("@/public/images/portfolio3.png"),
      require("@/public/images/portfolio4.png"),
    ],
    mainFunction: ["간단한 자기소개", "프로젝트 경험", "간편 메일 전송"],
    myFunctions: [
      {
        title: "",
        desc: [
          "Next.js를 도입하고 시멘틱한 HTML 태그를 적극 활용하여 성능 향상 및 검색 엔진 최적화(SEO)에 기여",
          "Tailwind CSS를 통해 모바일 환경에서도 적절한 레이아웃과 디자인을 제공하여 반응형 웹 디자인 구현",
          "zod를 활용하여 런타임에서 타입 에러를 검증, React-Hook-Form을 사용하여 불필요한 리렌더링을 최소화 ",
          "이메일 전송에 대한 디바운스 함수를 통해 중복 호출을 방지하고 성능을 최적화",
        ],
      },
    ],
    techDecision: [
      {
        title: "Next.js",
        desc: "초기 로딩 속도를 최적화하고 SEO에 기여 및 프로젝트의 전반적인 구조를 쉽게 설정하는 등 개발 생산성을 향상시킬 수 있어 채택",
      },
      {
        title: "TypeScript",
        desc: "런타임 오류를 예방하고, VS Code와 같은 IDE에서 타입 검사, 자동완성과 같은 기능을 통해 협업에서 개발 생산성을 향상시킬 수 있어 채택",
      },
      {
        title: "Tailwind CSS",
        desc: "클래스 기반의 스타일링을 통해 빠르고 일관된 디자인 구현이 가능하며, 다양한 디바이스와 화면 크기에 간편하게 대응할 수 있어 채택",
      },
    ],
  },
  {
    id: "work-wave",
    title: "워크웨이브",
    projectPeriod: "2023.08.16 ~ 2023.09.18",
    headCount: "5명",
    techStacks: [
      "Typescript",
      "REACT",
      "zustand",
      "Tanstack Query",
      "styled-components",
      "supabase",
    ],
    link: {
      gitHub: "https://github.com/jinsollee2023/nabacam-final-project",
      website: "https://work-wave-sage.vercel.app/",
    },
    summary:
      "클라이언트와 프리랜서 간의 원활한 협업을 지원하는 다목적 프리랜서 플랫폼입니다. 프로젝트 초기에 코딩 컨벤션을 세밀하게 설정하고 주 1회 코드 리뷰를 통해 불필요한 코드 최소화, 함수 분할 등의 코드 최적화를 하였습니다. 그 결과 Lighthouse 성능 측정시 평균 90점대의 점수를 받을 수 있었습니다.",
    images: [
      require("@/public/images/workwave1.png"),
      require("@/public/images/workwave2.png"),
      require("@/public/images/workwave3.png"),
      require("@/public/images/workwave4.png"),
      require("@/public/images/workwave5.png"),
      require("@/public/images/workwave6.png"),
    ],
    mainFunction: [
      "프리랜서/프로젝트 탐색",
      "프로젝트 관리 도구",
      "1:1 실시간 채팅",
      "마이페이지",
    ],

    myFunctions: [
      {
        title: "프로젝트 관리도구 페이지",
        desc: [
          "supabase를 활용하여 게시글 및 업무 목록 CRUD",
          "Zustand를 활용하여 유저 정보 전역 상태 관리 및 유저 롤에 따라 특정 기능 제한",
          "자주 쓰는 데이터의 경우 Zustand를 활용해 store에 저장, Query 함수들을 queries 파일에 분리하여 재사용성을 높이고 쿼리키를 활용하는 등의 방법으로 api 요청 약 30% 감소",
        ],
      },
      {
        title: "기업/마이페이지(우리 기업 구성원, 프로필 이미지 수정 기능)",
        desc: [
          "supabase를 활용한 구성원 목록 CRUD",
          "조건문을 통하여 프로필 이미지가 첨부된 경우 storage와 Database Table 모두 업데이트, 첨부되지 않은 경우 Database Table만 업데이트 실행",
          "supabase storage에서 파일 업데이트를 하는 과정에 storage에 파일은 변경되었는데 화면에 바로 적용되지 않는 문제 발생 → 저장 및 업데이트시 파일 url 뒤로 ?updated=${new Date().getTime()}를 붙여주어 해결",
        ],
      },
      {
        title: "유효성 검사",
        desc: [
          "useValidation이라는 custom Hook을 생성하여 중복 코드 최소화",
          "onBlur를 이용하여 특정 문항에서 포커스 아웃될 시 특정 항목 유효성 검사 함수 실행, 제출 버튼 클릭시 모든 항목 유효성 검사 함수 실행 → 에러메세지를 setState에 저장하여 화면에 출력",
          "setState와 submit이 하나의 함수에서 진행하면 에러메세지가 저장되기 전에 submit이 진행되어 유효성 검사가 제대로 진행되지 않는 문제 발생 → 버튼 클릭시 유효성 검사를 진행하고 useEffect를 이용하여 setState 진행 후 에러가 없을 경우 submit 되도록 수정하여 해결",
        ],
      },
    ],
    techDecision: [
      {
        title: "React",
        desc: "SPA의 장점인 매끄러운 페이지 전환과 컴포넌트 재사용을 통해 개발의 효율성을 높이고 유지보수가 용이하여 채택",
      },
      {
        title: "TypeScript",
        desc: "런타임 오류를 예방하고, VS Code와 같은 IDE에서 타입 검사, 자동완성과 같은 기능을 통해 협업에서 개발 생산성을 향상시킬 수 있어 채택",
      },
      {
        title: "supabase",
        desc: "다양한 API를 지원하여 데이터 관리가 용이하며 PostgreSQL을 기반으로 하며, 데이터 검색과 필터링과 같은 기능을 제공하여 뛰어난 확장성과 성능을 제공하기에 다양한 데이터가 있는 우리 프로젝트와 적합하여 채택",
      },
      {
        title: "TanStack-query",
        desc: "캐싱 및 자동 업데이트 기능을 제공하여 데이터를 효율적으로 관리할 수 있어 채택",
      },
      {
        title: "zustand",
        desc: "간단한 API와 컨텍스트를 이용해 상태를 효과적으로 관리할 수 있으며 provider가 없어 앱을 래핑 하지 않아도 되기 때문에 불필요한 리렌더링을 최소화할 수 있어 채택",
      },
      {
        title: "Styled-components",
        desc: "컴포넌트 기반의 스타일링을 도입함으로써 각 컴포넌트에 필요한 스타일을 캡슐화하고 재사용성을 높일 수 있어 채택",
      },
    ],
  },
];
