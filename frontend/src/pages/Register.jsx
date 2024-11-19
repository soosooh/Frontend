import styled from "styled-components";
import RegisterComponent from "../entities/register/RegisterComponent";

export default function Register() {
  return (
    <Wrapper>
      <RegisterComponent />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
`;
