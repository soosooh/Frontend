import styled from "styled-components";

export default function Subscribe(){
    return(<Wrapper>
        <Title>👑 요금 체계</Title>
        <Subtitle>유료 서비스는 <strong>AI모델 사용 및 인공지능 학습 서비스 비용</strong>입니다.</Subtitle>
        <Container>
            <FreeContainer>
dd
            </FreeContainer>

            <SubscribeContainer>
dd
            </SubscribeContainer>
        </Container>

        <Button>👑 유료회원 가입하기</Button>
    </Wrapper>);
}

const Font = styled.div`
color: #000;
font-family: Inter;
font-style: normal;
line-height: normal;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Title = styled(Font)`
  font-weight: 800;
  font-size: 1.5rem;
`

const Subtitle = styled(Font)`
  font-weight: 400;
  font-size: 1rem;
  margin: 0.3rem 0 2.8rem 0;
`

const Container = styled.div`
  display: flex;
  gap: 1.4rem;
  width: 100%;
  height: calc(100% - 5rem);
`

const FreeContainer = styled.div`
  background: pink;
  width: 100%;
  height: calc(100% - 5rem);
`

const SubscribeContainer = styled.div`
  background: lightblue;
  width: 100%;
  height: calc(100% - 5rem);
`

const Button = styled.div`
  cursor: pointer;
  width: 13rem;
  height: 2.5rem;
  border-radius: 0.9375rem;
  background: #333;
  color: #FFF;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  margin-top: 2rem;
`
