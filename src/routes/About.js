import React from "react";
import "./About.css";
import { TiSocialInstagram } from "react-icons/ti";
import { GrFacebook } from "react-icons/gr";

function About() {
  return (
    <div className="abContainer">
      <h3>
        리액트를 사용하여 만들어본 간단한 영화 소개 어플리케이션 입니다.
        <br />
        리액트 기초와 간단한 API를 호출하는법을 공부했습니다. 감사합니다.
      </h3>

      <div className="sns">
        <a href="https://www.instagram.com/sikangk/" target="blank">
          <TiSocialInstagram size="40" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100003571946430"
          target="blank"
        >
          <GrFacebook size="40" />
        </a>
      </div>
    </div>
  );
}

export default About;
