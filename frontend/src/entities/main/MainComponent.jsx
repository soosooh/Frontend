import styled from "styled-components";
import Nav from "../../shared/components/Nav";
import Result from "./Result";
import Subscribe from "./Subscribe";
import Loading from "./Loading";
import Form from "./Form";
import More from "./More";
import { useState } from "react";

export default function MainComponent() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [currentContent, setCurrentContent] = useState("Form");

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    setCurrentContent("Form");
  };

  const renderContent = () => {
    if (currentContent === "Loading") {
      return <Loading selectedButton={selectedButton} />;
    }
    if (currentContent === "Result") {
      return <Result selectedButton={selectedButton} />;
    }

    switch (selectedButton) {
      case 0: // 요약 컨설팅
      case 1: // 상세 컨설팅
        return (
          <Form
            selectedButton={selectedButton}
            setCurrentContent={setCurrentContent}
          />
        );
      case 2: // 유료구독
        return <Subscribe />;
      default:
        return <More />;
    }
  };

  return (
    <Wrapper>
      <Nav
        selectedButton={selectedButton}
        setSelectedButton={handleButtonClick}
      />
      <MainContent>{renderContent()}</MainContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainContent = styled.div`
  width: 100%;
  flex-grow: 1;
  background: pink;
  background: #fff;
  border-radius: 1rem;
`;
