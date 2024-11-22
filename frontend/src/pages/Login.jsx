import styled from "styled-components";
import LoginComponent from "../entities/login/LoginComponent";

export default function Login() {
  return (
    <Container>
      <LoginComponent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;
