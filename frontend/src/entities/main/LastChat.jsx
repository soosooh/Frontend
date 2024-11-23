import styled from "styled-components";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

export default function LastChat({ title }) {
  return (
    <Container>
      <StyledIcon />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 0.3em;
`;
const StyledIcon = styled(IoChatboxEllipsesOutline)`
  color: #001a72;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.3rem;
`;
const Title = styled.p`
  font-size: 1rem;
  margin: 0;
  color: black;
`;
