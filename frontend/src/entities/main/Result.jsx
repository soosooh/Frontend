import { useState } from "react";
import styled from "styled-components";
import { hoverGrow } from "../../shared/animation/hoverGrow";

export default function Result({ selectedButton }) {
  const title = ["요약", "상세"];
  const [name, setName] = useState("기업명");

  const content = `
        경쟁사 AI 도입 사례\n**카맥스**\n- **AI 도입 목적:**\n  - 고객 리뷰 요약 생성을 통해 고객이 빠르게 결정을 내릴 수 있도록 지원\n- **구체적인 성과:**\n  - 수천 개의 차량 리뷰를 몇 개월 안에 요약하여 고객 경험을 향상\n- **영향:**\n  - 고객들이 더 신속하고 효율적으로 구매 결정을 내릴 수 있게 도움\n\n**스티치 픽스**\n- **AI 도입 목적:**\n  - 고객의 스타일 선호도 수집 및 AI 기술 결합을 통한 맞춤화된 의류 추천\n- **구체적인 성과:**\n  - 패션 트렌드 분석, 효율적인 재고 관리 및 로지스틱스 최적화\n- **영향:**\n  - 고객들에게 개인화된 쇼핑 경험과 효율적인 재고 관리 제공\n\n**브이캣**\n- **AI 도입 목적:**\n  - 쇼핑몰 URL을 입력하면 자동 광고 소재 생성을 통한 광고 효율 증대\n- **구체적인 성과:**\n  - 300% 증가한 ROAS, 일부 광고 소재는 1,000% 이상의 성과\n- **영향:**\n  - 빠르고 다양한 광고 소재 제작을 통한 효율적인 마케팅 전략 구축\n\n**레코픽**\n- **AI 도입 목적:**\n  - 고객의 행동 데이터 분석을 통한 개인화된 상품 추천 제공\n- **구체적인 성과:**\n  - 매출 15.6% 증가, 구매 건수 16.7% 상승\n- **영향:**\n  - 고객의 구매 전환율 증가 및 매출 향상에 큰 도움을 줌
    `;

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
        <Button>pdf 다운</Button>
      </div>

      <Content>{parseContent(content)}</Content>
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
