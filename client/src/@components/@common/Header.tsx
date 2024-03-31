import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <St.Header>
      <St.Title>📖</St.Title>
      <St.Title>독파민</St.Title>
    </St.Header>
  );
}

const St = {
  Header: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  `,
  TitleWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Title: styled.h1`
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.bold24};
  `,
};
