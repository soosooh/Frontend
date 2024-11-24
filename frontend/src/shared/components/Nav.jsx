import styled from "styled-components";
import { useState } from "react";

export default function Nav({ selectedButton, setSelectedButton }) {
  const buttonLabel = [
    "요약 컨설팅",
    "상세 컨설팅",
    "유료회원 가입",
    "마음 AI 알아보기",
  ];

  return (
    <Wrapper>
      {buttonLabel.map((label, index) => (
        <Button
          key={index}
          isSelected={selectedButton === index}
          onClick={() => setSelectedButton(index)}
        >
          {label}
        </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 4.8rem;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 0;
`;

const Button = styled.div`
  background: ${({ isSelected }) => (isSelected ? "#333" : "#EEE")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#C9C9C9")};
  box-sizing: border-box;
  padding: 0.5rem 0;
  flex-grow: 1;
  margin: 0 1rem;
  cursor: pointer;
  border-radius: 0.625rem;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
