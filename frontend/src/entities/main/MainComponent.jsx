import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import Free from "./Free";
import Member from "./Member";
import ShiftButton from "./ShiftButton";
import ChatInput from "./ChatInput";
export default function MainComponent() {
  return (
    <Container>
      <Logo src={logo} alt="logo"></Logo>
      <Title>
        어서오세요! 기업 컨설팅 챗봇입니다.
        <br />
        무엇을 도와드릴까요?
      </Title>
      <Free />
      <Member />
      <ShiftButton />
      <ChatInput />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 14vw;
  margin-top: 1rem;
`;
const Title = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
`;
