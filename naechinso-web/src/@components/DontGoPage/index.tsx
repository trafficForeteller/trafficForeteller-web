import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { postMemberReissue } from "../../apis/member.api";
import { getCheckPrice, patchRecommendFriendDetail } from "../../apis/recommend.api";
import { IcDontGo } from "../../asset/icons";
import { routePaths } from "../../core/routes/path";
import { IGetCheckPrice, IPatchFriendDetail } from "../../types/recommend";
import { GTM_CLASS_NAME } from "../../util/const/gtm";
import { FixedHeader, MoveNextPageBtn, TextAreaBox } from "../@common";

export default function DontGoPage() {
  const [text, setText] = useState("");
  const [textCheck, setTextCheck] = useState(false);
  const [patchRecommend, setPatchRecommend] = useState<IPatchFriendDetail>({
    appealDetail: "",
    appeals: [],
    dontGo: "",
    priceType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("dontGo")) {
      const dontGo = localStorage.getItem("dontGo") as string;
      setText(dontGo);
      setTextCheck(true);
    }
  }, []);

  useEffect(() => {
    handleTextCheck();
    localStorage.setItem("dontGo", text);
    setPatchRecommend({
      ...patchRecommend,
      appealDetail: localStorage.getItem("appealDetail") || "",
      appeals: JSON.parse(localStorage.getItem("appeals") || "[]"),
      dontGo: localStorage.getItem("dontGo") || "",
    });
  }, [text]);

  useEffect(() => {
    if (patchRecommend.priceType !== "") handlePatchRecommend();
  }, [patchRecommend]);

  const handleGetCheckPrice = async () => {
    // 상품을 받을 수 있는 추천사인지 확인
    await getCheckPrice(
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessGetCheckPrice,
      handleFailRequest,
      handleReissueGetCheckPrice,
    );
  };

  const handleSuccessGetCheckPrice = (userData: IGetCheckPrice) => {
    if (userData.isPrice === false) {
      setPatchRecommend({
        ...patchRecommend,
        priceType: "NONE",
      });
    } else if (userData.isPrice === true && userData.isShowRecommend === true) {
      setPatchRecommend({
        ...patchRecommend,
        priceType: "SUNGURI",
      });
    } else if (userData.isPrice === true && userData.isShowRecommend === false) {
      navigate(routePaths.ChooseGift, { state: { patchRecommend } });
    }
  };

  const handleReissueGetCheckPrice = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handleGetCheckPrice();
  };

  const handlePatchRecommend = async () => {
    // keyword, appealDetail, dontGo POST 성공할 시
    await patchRecommendFriendDetail(
      patchRecommend,
      localStorage.getItem("accessToken"),
      localStorage.getItem("uuid"),
      handleSuccessPatchRecommend,
      handleFailRequest,
      handleReissuePatchRecommend,
    );
  };

  const handleReissuePatchRecommend = async () => {
    // 액세스 토큰 만료 응답인지 확인
    const userData = await postMemberReissue(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"));
    if (userData) {
      localStorage.setItem("accessToken", userData["accessToken"]);
      localStorage.setItem("refreshToken", userData["refreshToken"]);
    }
    handlePatchRecommend();
  };

  const handleFailRequest = (errorMessage: string) => {
    // keyword, appealDetail, dontG POST 실패할 시
    console.log(errorMessage);
    navigate(routePaths.Error);
  };

  const handleSuccessPatchRecommend = () => {
    // 추천사 PATCH 성공할 시
    localStorage.setItem("priceType", patchRecommend.priceType);
    navigate(routePaths.Finish);
  };

  const handleTextCheck = () => {
    if (text.length > 19) setTextCheck(true);
    else setTextCheck(false);
  };

  return (
    <St.DontGo>
      <FixedHeader
        header="추천사"
        progressRate={100}
        title1="마지막이야!"
        title2="친구를 거절한 상대방의"
        title3="마음을 돌릴 한마디?"
      />

      <St.CardWrapper>
        <IcDontGo aria-label="한 마디 발언 미리보기" />
      </St.CardWrapper>

      <St.TextWrapper>
        <TextAreaBox
          placeholder="미래의 형수님 한번만 다시 생각해보십쇼. 이 친구가 겉 보기엔 끌리지 않을 수 있어도, 저와 주변 친구들이 그랬듯 제 친구의 매력에 한 번 빠지면 헤어나올 수 없거든요!"
          minLength={19}
          maxLength={100}
          text={text}
          setText={setText}
          height={7.8}
          letterLimit="20자 이상 100자 이내"
        />
      </St.TextWrapper>

      <MoveNextPageBtn
        title="완료"
        disabled={!textCheck}
        handleState={handleGetCheckPrice}
        className={GTM_CLASS_NAME.recommendSuccess}
      />
    </St.DontGo>
  );
}

const St = {
  DontGo: styled.main`
    padding-top: 18rem;
  `,
  CardWrapper: styled.section`
    width: 100%;
    height: 18.6rem;
    position: absolute;
    top: 21rem;
    background: linear-gradient(3600deg, #ffffff 0%, #f6f5f2 10%);
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TextWrapper: styled.section`
    margin-top: 23rem;
    padding: 0 2rem;
  `,
};
