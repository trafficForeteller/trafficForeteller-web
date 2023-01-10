import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { routePaths } from "../../core/routes/path";
import { SubTitle, Title } from "../@common";

export default function RecommendLandingPage() {
  const [alert, alertSet] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      alertSet(false);
    }, 2000);
  });

  useEffect(() => {
    navigate(`${routePaths.Recommend}`);
  });

  return (
    <>
      {alert ? (
        <St.RecommendLandingPage>
          <St.TitleWrapper>
            <Title title="친구를 소개해줘!" />
            <Title title="네 친구라면 분명 멋있겠지?" />
          </St.TitleWrapper>
          <St.SubTitleWrapper>
            <SubTitle subTitle="현재는 수도권에 거주하는 89~99년도생만 내친소를 이용할 수 있어!" />
            <SubTitle subTitle="(추천하는 사람의 나이는 상관없어)" />
          </St.SubTitleWrapper>
          <St.BackgroundColor></St.BackgroundColor>
        </St.RecommendLandingPage>
      ) : (
        <></>
      )}
    </>
  );
}

const St = {
  RecommendLandingPage: styled.main`
    height: 100vh;

    display: flex;
    flex-direction: column;
  `,
  BackgroundColor: styled.div`
    width: 100%;
    height: 67.86%;
    position: absolute;
    bottom: 0;
    transform: rotate(-180deg);
    background: linear-gradient(180deg, #ffe49d 2.78%, #ffffff 100%);
    z-index: -1;
  `,
  TitleWrapper: styled.section`
    margin: 25.2rem 0 2.6rem 3.5rem;
  `,
  SubTitleWrapper: styled.section`
    width: 30rem;
    margin: 0 auto;
  `,
};