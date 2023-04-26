import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ImgWarningNaechinso } from "../../asset/image";
import { routePaths } from "../../core/routes/path";

export interface WarningModalProps {
  title1: string;
  title2: string;
  desc: string;
  buttonTitle: string;
  setIsWarningModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WarningModal(props: WarningModalProps) {
  const { title1, title2, desc, buttonTitle, setIsWarningModalOpened } = props;
  const navigate = useNavigate();

  const closeModal = () => {
    setIsWarningModalOpened(false);
    if (buttonTitle === "응 수정할게!") navigate(routePaths.DontGo);
    else navigate(routePaths.RecommendLanding);
  };

  return (
    <St.WarningModal>
      <St.Naechinso src={ImgWarningNaechinso} alt="내친소" />
      <St.TitleWrapper>
        <St.Title>{title1}</St.Title>
        <St.Title>{title2}</St.Title>
      </St.TitleWrapper>
      <St.Desc>{desc}</St.Desc>
      <St.ButtonWrapper>
        <St.Button onClick={closeModal} type="button">
          {buttonTitle}
        </St.Button>
      </St.ButtonWrapper>
    </St.WarningModal>
  );
}

const St = {
  WarningModal: styled.section`
    padding: 5.6rem 2rem 1.8rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    width: 31.1rem;
    @media only screen and (min-width: 375px) and (max-width: 600px) {
      width: 90%;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  Naechinso: styled.img`
    width: 8.6rem;
    height: 8.6rem;

    position: absolute;
    top: -20%;
    left: 50%;
    transform: translate(-50%, 0);
  `,
  TitleWrapper: styled.hgroup`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h2`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.sub2};
  `,
  Desc: styled.p`
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fonts.sub3};
    margin: 0.6rem 0 3.6rem;
  `,
  ButtonWrapper: styled.article``,
  Button: styled.button`
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.body3};
    width: 27.1rem;
    height: 4.4rem;
    border-radius: 12px;
  `,
};