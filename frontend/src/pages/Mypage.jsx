import styled from "styled-components";
import MyPageComponent from "../entities/mypage/MypageComponent";

export default function Mypage() {
  return (
    <Wrapper>
      <MyPageComponent />
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
