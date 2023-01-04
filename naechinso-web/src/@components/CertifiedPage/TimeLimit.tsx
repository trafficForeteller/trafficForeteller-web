import React, { useEffect, useState } from "react";
import styled from "styled-components";

export interface TimeLimitProps {
  inputActive: boolean;
  setInputActive: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function TimeLimit(props: TimeLimitProps) {
  const { inputActive, count, setCount, setInputActive } = props;
  const [minute, setMinute] = useState(3);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    // 1초마다 state 변화
    if (count <= 0) return setInputActive(false);

    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    timeConversion(count);
    return () => clearInterval(id);
  }, [count]);

  const timeConversion = (count: number) => {
    // 초를 mm:ss로 변환
    setMinute(Math.floor(count / 60));
    setSecond(count % 60);
  };

  return (
    <St.TimeLimit inputActive={inputActive}>
      {minute}:{second < 10 ? "0" : ""}
      {second}
    </St.TimeLimit>
  );
}

const St = {
  TimeLimit: styled.p<{ inputActive: boolean }>`
    color: ${({ theme, inputActive }) => (inputActive ? theme.colors.orange : theme.colors.neural)};
    ${({ theme }) => theme.fonts.body2};
  `,
};