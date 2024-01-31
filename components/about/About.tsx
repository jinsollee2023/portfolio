import React from "react";
import Image from "next/image";
import profile from "@/public/images/profile.jpg";
import "./styles.css";

const About = () => {
  return (
    <section id="about" className="px-[15%] py-20">
      <h2 className="text-center mb-20 text-3xl font-semibold">About</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-center md:w-[30%]">
          <Image src={profile} alt="프로필 이미지" width={300} height={400} />
        </div>
        <div className="m-4 space-y-8 md:w-[70%] ">
          <div>
            <h3 className="profile-title">UI/UX 개선에 집중합니다.</h3>
            <p className="profile-desc">
              CX 업무를 수행하면서 직접 고객의 피드백을 수렴하고 서비스를
              지속적으로 개선한 경험이 있습니다. 항상 사용자 관점에서 생각하며,
              서비스가 사용자에게 편리함과 즐거움을 제공할 수 있도록 고민합니다.
            </p>
          </div>
          <div>
            <h3 className="profile-title">클린코드를 지향합니다.</h3>
            <p className="profile-desc">
              피드백과 코드 리뷰를 통해 Best Practice를 찾아내어, 누구나 이해할
              수 있는 코드를 작성하는 것을 목표로 하고 있습니다. 협업의 효율을
              높이기 위해 항상 정확하고 효과적인 코드를 작성하는 데 주력하고
              있습니다.
            </p>
          </div>
          <div>
            <h3 className="profile-title">커뮤니케이션이 원활합니다.</h3>
            <p className="profile-desc">
              초기 웹사이트 기획에 참여하여 디자이너, 개발자, 고객과의 원활한
              소통을 통해 다양한 역할을 수행했습니다. 또한 부트캠프 경험을 통해
              여러 개발자들과 팀 프로젝트를 진행하며 커뮤니케이션 스킬을
              향상시켰습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
