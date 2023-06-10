import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { ImgLandingNaechinso } from "../../asset/image";
import { GTM_CLASS_NAME } from "../../util/const/gtm";

interface LandingBoxProps {
  setAccessToken: React.Dispatch<React.SetStateAction<boolean>>;
  handleMoveLandingPage: () => void;
}

export default function LandingBox(props: LandingBoxProps) {
  const { setAccessToken, handleMoveLandingPage } = props;
  const location = useLocation();

  useEffect(() => {
    localStorage.removeItem("questionList");
    localStorage.removeItem("checkedQ1");
    localStorage.removeItem("firstRecommend");
    localStorage.removeItem("secondRecommend");
    localStorage.removeItem("eduInfo");
    localStorage.removeItem("jobInfo");
    localStorage.removeItem("appealDetail");
    localStorage.removeItem("dontGo");
    localStorage.removeItem("appeals");
    localStorage.removeItem("friendInfo");
    localStorage.removeItem("keywordList");
    localStorage.removeItem("postRecommender");
    localStorage.removeItem("genderTypeList");
    localStorage.removeItem("uuid");
    localStorage.removeItem("landingUrl");
    localStorage.removeItem("recommenderName");
    localStorage.removeItem("priceType");
    localStorage.removeItem("memberName");
    localStorage.removeItem("checkedKeywordList");
    localStorage.removeItem("checkedSelectiveQ");
    localStorage.removeItem("selectiveRecommend");
    localStorage.removeItem("friendLoverType");
    localStorage.removeItem("friendLoverTypeList");
    localStorage.removeItem("appealDetail");
    localStorage.removeItem("appealDetailList");

    if (location.pathname.startsWith("/landing")) {
      const memberUuid = location.pathname.substring(8);
      memberUuid.length === 37 && localStorage.setItem("member-uuid", memberUuid);
    } else if (location.pathname.startsWith("/edit")) localStorage.setItem("landingUrl", "edit");
    else localStorage.removeItem("member-uuid");
    localStorage.getItem("accessToken") && setAccessToken(true);
  }, [location]);

  useEffect(() => {
    localStorage.getItem("accessToken") && handlePostMemberReissue();
  }, []);

  const handlePostMemberReissue = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
      setAccessToken(true);
    } else setAccessToken(false);
  };

  return (
    <St.LandingBox>
      <St.Naechinso src={ImgLandingNaechinso} alt="내친소" />
      <St.TitleWrapper>
        <St.Title>친구를 소개하러 온 걸</St.Title>
        <St.Title>환영해!🧡</St.Title>
      </St.TitleWrapper>
      <St.Button onClick={handleMoveLandingPage} type="button" className={GTM_CLASS_NAME.startAccess}>
        5분 추천사 작성하기
      </St.Button>
    </St.LandingBox>
  );
}

const St = {
  LandingBox: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 0 2rem;
  `,
  Naechinso: styled.img`
    width: 12.1rem;
    height: 12.1rem;
  `,
  TitleWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.01em;
    margin-top: 1.6rem;
    margin-bottom: 3.6rem;
  `,
  Title: styled.p`
    width: fit-content;
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.head1};
  `,
  Button: styled.button`
    bottom: 3.5rem;
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.sub3};

    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 100%;
    }
  `,
};
