import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { GoPerson } from "react-icons/go";
import { CiLogout } from "react-icons/ci";
import LastChat from "./LastChat";

export default function ChatList() {
  const chatHistory = [
    { id: 1, title: "리포팅 제목 1" },
    { id: 2, title: "리포팅 제목 2" },
    { id: 3, title: "리포팅 제목 3" },
  ];
  return (
    <Container>
      <Logo src={logo} alt="logo"></Logo>
      <TitleContainer>
        <Divider />
        <Title>지난 대화</Title>
        <Divider />
        {chatHistory.map((chat) => (
          <LastChat key={chat.id} title={chat.title} />
        ))}
      </TitleContainer>
      <Describe>대화를 시작해보세요!</Describe>
      <AuthContainer>
        <StyledGoPerson />
        <AuthTitle>기업이름</AuthTitle>
        <StyledCiLogout />
      </AuthContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  min-height: 80vh;
  width: 19vw;
  background-color: white;
  align-items: center;
  margin: 1rem 0 1rem 1.3rem;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 14vw;
  margin-top: 2rem;
`;

const TitleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 14rem;
`;

const Divider = styled.hr`
  width: 100%;
  border: 0;
  height: 1px;
  background-color: #c9c9c9;
  margin: 1rem 0;
  margin: 0;
`;

const Title = styled.p`
  font-size: 1rem;
  margin: 0.2rem;
  color: black;
`;

const Describe = styled.p`
  color: #c9c9c9;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 1rem 15rem 1rem;
`;

const AuthContainer = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
`;
const StyledGoPerson = styled(GoPerson)`
  font-size: 1.5rem;
  font-weight: bold;
  stroke-width: 1.3;
`;

const AuthTitle = styled.p`
  font-size: 1rem;
  margin-right: 5rem;
`;

const StyledCiLogout = styled(CiLogout)`
  font-size: 1.5rem;
  font-weight: bold;
  stroke-width: 1.3;
`;
