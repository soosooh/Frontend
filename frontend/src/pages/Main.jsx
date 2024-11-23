import styled from "styled-components";
import ChatList from "../entities/main/ChatList";
import Free from "../entities/main/Free";
import MainComponent from "../entities/main/MainComponent";

export default function Main() {
  return (
    <Container>
      <ChatList />
      <ChatContainer>
        <MainComponent />
      </ChatContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 81vw;
`;
