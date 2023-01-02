import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface RecommendPageBtnProps {
  nextPage: string;
  title: string;
}

export default function RecommendPageBtn(props: RecommendPageBtnProps) {
  const { nextPage, title } = props;
  const navigate = useNavigate();

  function goNextPage() {
    navigate(`${nextPage}`);
  }

  return <St.Button onClick={goNextPage}>{title}</St.Button>;
}

const St = {
  Button: styled.button`
    position: "absolute";
    bottom: 3.6rem;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.black20};
    color: ${({ theme }) => theme.colors.black40};
    ${({ theme }) => theme.fonts.sub3};
    width: 33.5rem;
    height: 5.6rem;
    border-radius: 1.6rem;
  `,
};
