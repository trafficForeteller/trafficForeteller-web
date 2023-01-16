import styled from "styled-components";

import WorkCertified from "../@common/WorkCertified";

export default function EduCertifiedPage() {
  return (
    <St.EduCertifiedPage>
      <WorkCertified
        title1="👩‍🎓"
        title2="학교 인증을 부탁해"
        subTitle1="내친소는 신뢰 기반의 서비스라 인증이 필요해."
        subTitle2="학생증, 재학증명서 또는 학교 포털 캡쳐를 첨부해줘!"
      />
    </St.EduCertifiedPage>
  );
}

const St = {
  EduCertifiedPage: styled.main``,
};