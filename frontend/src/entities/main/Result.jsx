import { useState } from "react";
import styled from "styled-components";
import { hoverGrow } from "../../shared/animation/hoverGrow";

export default function Result({ selectedButton, reportData }) {
  const title = ["요약", "상세"];
  const [name, setName] = useState("기업명");

  const parseContent = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => {
      const boldLine = line
        .split("**")
        .map((part, idx) =>
          idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
        );
      return <p key={index}>{boldLine.reduce((prev, curr) => [prev, curr])}</p>;
    });
  };

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          boxSizing: "border-box",
          padding: "1rem",
          justifyContent: "space-between",
          borderBottom: "1px solid #C9C9C9",
          alignItems: "center",
        }}
      >
        <Title>
          {name} {title[selectedButton]} 컨설팅 리포트
        </Title>
        {selectedButton === 1 && <Button>pdf 다운</Button>}
      </div>

      <Content>
        {reportData
          ? parseContent(reportData)
          : "데이터를 불러오는 데 실패했습니다."}
      </Content>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 14rem);
`;

const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem;
`;

const Button = styled.div`
  width: 13.1875rem;
  height: 2.25rem;
  background: #333;
  border-radius: 0.625rem;
  color: #fff;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${hoverGrow}
`;

const Content = styled.div`
  box-sizing: border-box;
  padding: 2rem 3rem;
  height: 100%;
  overflow-y: scroll;
`;
