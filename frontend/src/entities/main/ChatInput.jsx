import styled from "styled-components";
import { GoPaperAirplane } from "react-icons/go";

export default function ChatList() {
  return (
    <Container>
      <StyledInput />
      <StyledButton>
        <StyledGoPaperAirplane />
      </StyledButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 55rem;
  height: 3.2rem;
  border-radius: 20px;
  margin-top: 1rem;
  justify-content: flex-end;
  padding: 0 1rem;
  background-color: white;
  border-radius: 40px;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: transparent;
`;

const StyledButton = styled.button`
  background-color: #7ca2f0;
  border: none;
  border-radius: 50px;
  width: 2.5rem;
  height: 2.5rem;
`;
const StyledGoPaperAirplane = styled(GoPaperAirplane)`
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
`;
