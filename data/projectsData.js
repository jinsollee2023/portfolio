export const projects = [
  {
    id: "protfolio-website",
    title: "포트폴리오 웹사이트",
    projectPeriod: "2024.01.08 ~ 2024.01.17",
    headCount: "1명",
    techStacks: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    link: { gitHub: "https://github.com/jinsollee2023/portfolio", website: "" },
    summary:
      "A friendly atmosphere and natural delights await your visit to the town of Wells! Stay at this well-equipped 1-bath studio and enjoy easy access to several beaches, including Wells Beach and Drakes Island Beach, as well as Rachel Carson National Wildlife Refuge - the best spot for wildlife viewing just 8 miles away. Not to mention, with the downtown area just 10 minutes from vacation rental.",
    images: [
      require("@/public/images/workwave1.png"),
      require("@/public/images/workwave1.png"),
      require("@/public/images/workwave1.png"),
    ],
    mainFunction: ["간단한 자기소개", "프로젝트 경험", "간편 메일 전송"],
    myFunctions: [
      { title: "기능1", desc: ["테스트11111", "테스트22222", "테스트33333"] },
      { title: "기능2", desc: ["테스트11111", "테스트22222", "테스트33333"] },
    ],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis adipisci perspiciatis saepe accusamus? Doloremque molestias velit vel sapiente, nostrum beatae!",
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
      "A friendly atmosphere and natural delights await your visit to the town of Wells! Stay at this well-equipped 1-bath studio and enjoy easy access to several beaches, including Wells Beach and Drakes Island Beach, as well as Rachel Carson National Wildlife Refuge - the best spot for wildlife viewing just 8 miles away. Not to mention, with the downtown area just 10 minutes from vacation rental.",
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
        ],
      },
      {
        title: "기업/마이페이지(우리 기업 구성원, 프로필 이미지 수정 기능)",
        desc: [
          "supabase를 활용한 구성원 목록 CRUD",
          "조건문을 통하여 프로필 이미지가 첨부된 경우 storage와 Database Table 모두 업데이트, 첨부되지 않은 경우 Database Table만 업데이트 실행",
          "supabase storage에서 파일 업데이트를 하는 과정에 storage에 파일은 변경되었는데 화면에 바로 적용되지 않는 문제 발생 → 같은 파일명일 경우 캐시 문제 발생할 수 있다하여 저장 및 업데이트시 url 뒤로 ?updated=${new Date().getTime()}를 붙여주어 해결",
        ],
      },
      {
        title: "유효성 검사",
        desc: [
          "useValidation이라는 custom Hook을 생성하여 중복 코드 최소화",
          "onBlur를 이용하여 특정 문항에서 포커스 아웃될 시 특정 항목 유효성 검사 함수 실행, 제출 버튼 클릭시 모든 항목 유효성 검사 함수 실행 → 에러메세지를 setState에 저장하여 화면에 출력",
          "setState와 submit이 하나의 함수에서 진행하면 에러메세지가 저장되기 전에 submit이 진행되어 유효성 검사가 제대로 진행되지 않는 문제 발생 → 버튼 클릭시 유효성 검사를 진행하고 useEffect를 이용하여 setState 진행 후 에러가 없을 경우 submit 되도록 수정하여 해결 storage에서 파일 업데이트를 하는 과정에 storage에 파일은 변경되었는데 화면에 바로 적용되지 않는 문제 발생 → 같은 파일명일 경우 캐시 문제 발생할 수 있다하여 저장 및 업데이트시 url 뒤로 ?updated=${new Date().getTime()}를 붙여주어 해결",
        ],
      },
    ],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis adipisci perspiciatis saepe accusamus? Doloremque molestias velit vel sapiente, nostrum beatae!",
  },
];
