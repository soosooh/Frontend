import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

export default function Free() {
  return (
    <Container>
      <Title>무료회원</Title>
      <ButtonContainer>
        <StyledButton>
          무료 컨설팅 받아보기
          <FaArrowRight />
        </StyledButton>
        <StyledButton>
          유료회원 가입하기
          <FaArrowRight />
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 14rem;
  background-color: white;
  border-radius: 20px;
`;

const Title = styled.p`
  font-size: 1rem;
  background-color: #c9ddff;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  margin-right: 40rem;
  justify-content: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled.button`
  width: 48rem;
  margin-bottom: 1rem;
  height: 3.75rem;
  border: 1px solid #868686;
  border-radius: 15px;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
