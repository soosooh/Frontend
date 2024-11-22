import styled from "styled-components";
import EditInfoContainer from "../entities/editInfo/EditInfoContainer";

export default function Register() {
  return (
    <Wrapper>
        <EditInfoContainer/>
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
