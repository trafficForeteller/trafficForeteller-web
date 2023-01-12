import { useState } from "react";
import styled from "styled-components";

import { IcTipCheck, IcToggleArrow } from "../../asset/icons";
import { TipList } from "../../core/recommend/recommend";

export interface ToggleTipBoxProps {
  isThreeLine: boolean;
}

export default function ToggleTipBox(props: ToggleTipBoxProps) {
  const { isThreeLine } = props;
  const [open, setOpen] = useState(true);

  return (
    <St.ToggleTipBox isThreeLine={isThreeLine}>
      <St.TipHeader>
        <St.TipTitle>⭐️ 추천사 꿀팁</St.TipTitle>
        <St.ArrowWrapper onClick={() => setOpen(!open)} open={open}>
          <IcToggleArrow />
        </St.ArrowWrapper>
      </St.TipHeader>
      <St.ToggleTipList open={open}>
        {TipList.map((tip) => {
          return (
            <St.TipWrapper key={tip.id}>
              <IcTipCheck />
              <St.TipDescWrapper>
                <St.TipDesc>{tip.desc1}</St.TipDesc>
                <St.TipHighlight>&ldquo;{tip.highlight}&rdquo;</St.TipHighlight>
                <St.TipDesc>{tip.desc2}</St.TipDesc>
              </St.TipDescWrapper>
            </St.TipWrapper>
          );
        })}
      </St.ToggleTipList>
    </St.ToggleTipBox>
  );
}

const St = {
  ToggleTipBox: styled.section<{ isThreeLine: boolean }>`
    margin: ${({ isThreeLine }) => (isThreeLine ? "22rem" : "19rem")} auto 3.2rem;
    width: 32.9rem;
    background-color: ${({ theme }) => theme.colors.neural};
    border-radius: 16px;
    padding: 1rem;
  `,
  TipHeader: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fonts.body6}
  `,
  TipTitle: styled.h3``,
  ArrowWrapper: styled.span<{ open: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: rotate(${({ open }) => (open ? "" : "0.5turn")});
    transition: all 0.3s;
  `,
  ToggleTipList: styled.article<{ open: boolean }>`
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 1.6rem;
  `,
  TipWrapper: styled.div`
    display: flex;
    gap: 0.8rem;
  `,
  TipDescWrapper: styled.span`
    display: flex;
    gap: 0.1rem;
    ${({ theme }) => theme.fonts.body5}
  `,
  TipDesc: styled.p``,
  TipHighlight: styled.b`
    color: ${({ theme }) => theme.colors.orange};
  `,
};