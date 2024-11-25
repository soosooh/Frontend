import styled from "styled-components";
import { useState } from "react";
import { hoverGrow } from "../../shared/animation/hoverGrow";

export default function From({ selectedButton, setCurrentContent }) {
  const [companyData, setCompanyData] = useState({
    companyName: "",
    companySize: "",
    industry: "",
    painPoint: "",
  });

  const isFormComplete = Object.values(companyData).every(
    (value) => value.trim() !== ""
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoading = () => {
    setCurrentContent("Loading");

    setTimeout(() => {
      setCurrentContent("Result");
    }, 3000);
  };

  const title = ["요약", "상세"];

  return (
    <Wrapper>
      <Title>
        {title[selectedButton]} 컨설팅을 위한 기업 정보를 입력해주세요!
      </Title>
      <Subtitle>
        AI 컨설턴트가 기업 컨설팅과 리포팅을 진행합니다.
        <br />각 항목에 정보를 입력해주시면 이를 바탕으로 분석된 리포트와 맞춤
        AI 기술을 추천합니다.
      </Subtitle>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <FormWrapper>
          <Title style={{ margin: "0 0 1rem 0", fontSize: "1rem" }}>
            1. 회사명
          </Title>
          <Input
            name="companyName"
            value={companyData.companyName}
            onChange={handleInputChange}
          />

          <Title style={{ margin: "0 0 1rem 0", fontSize: "1rem" }}>
            2. 회사규모(중소기업, 중견기업, 대기업)
          </Title>
          <Input
            name="companySize"
            value={companyData.companySize}
            onChange={handleInputChange}
          />

          <Title style={{ margin: "0 0 1rem 0", fontSize: "1rem" }}>
            3. 산업분야
          </Title>
          <Input
            name="industry"
            value={companyData.industry}
            onChange={handleInputChange}
          />

          <Title style={{ margin: "0 0 1rem 0", fontSize: "1rem" }}>
            4. pain point
          </Title>
          <Input
            name="painPoint"
            value={companyData.painPoint}
            onChange={handleInputChange}
          />

          <div
            style={{
              width: "calc(100% - 1rem)",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button disabled={!isFormComplete} onClick={handleLoading}>
              자동생성
            </Button>
          </div>
        </FormWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 3rem 0 1rem 3rem;
`;

const Subtitle = styled(Title)`
  color: #a1a1a1;
  font-size: 1.25rem;
  margin: 0 0 0 3rem;
`;

const FormWrapper = styled.div`
  width: 80%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
  box-sizing: border-box;
  padding: 1rem 3rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

const Input = styled.input`
  width: calc(100% - 3rem);
  border-radius: 0.1875rem;
  border: 1px solid #acacac;
  height: 2.5rem;
  font-size: 1rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.div`
  border-radius: 0.625rem;
  font-family: Inter;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 8rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: ${(props) => (props.disabled ? "#eee" : "#333")};
  color: ${(props) => (props.disabled ? "#c9c9c9" : "#eee")};
  ${hoverGrow}
`;
