import styled from "styled-components";
import load from "../../assets/main/load.gif";

export default function Loading({ selectedButton }) {
  const title = ["요약", "상세"];

  return (
    <Wrapper>
      <Img src={load} />
      <Div>{title[selectedButton]} 리포트 생성 중이에요</Div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 12rem;
  height: 12rem;
`;

const Div = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
`;
