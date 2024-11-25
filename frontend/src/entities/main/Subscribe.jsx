import styled from "styled-components";
import { hoverGrow } from "../../shared/animation/hoverGrow";

export default function Subscribe(){
    return(<Wrapper>
        <Title>👑 요금 체계</Title>
        <Subtitle>유료 서비스는 <strong>AI모델 사용 및 인공지능 학습 서비스 비용</strong>입니다.</Subtitle>
        <Container>
            <FreeContainer>
              <Plan>무료</Plan>
              <ContentWrapper>
                <Content>회원 가입 후 한 달간 플랫폼의 모든<br/>서비스를 무료로 사용할 수 있습니다.</Content>
                <Service>
                <strong>요약 리포트 제공 서비스</strong><br/><br/>
                1. 산업 분류 별 경쟁사 AI 도입 사례 제공<br/>
                2. 기업 내 Pain Point 관련 추천 AI 제공<br/>
                3. 추천 AI 도입 시 필요 데이터<br/>
                4. AI 도입 프로세스<br/>
                5. 예상 비용 및 ROI<br/><br/>
                컨설팅 결과 내용 요약 제공<br/>
                </Service>
              </ContentWrapper>
            </FreeContainer>

            <SubscribeContainer>
              <Plan style={{background:"#4262FF", color: "#FFF", borderRadius:"1.875rem 1.875rem 0rem 0rem"}}>유료</Plan>
              <ContentWrapper>
              <Service>
                <strong>상세 리포트 제공 서비스</strong>
                <div>
                  1. 산업 분류 별 경쟁사 AI 도입 사례<br/>
                  2. 기업 내 Pain Point 관련 추천 AI<br/>
                  3. 추천 AI 도입 시 필요 데이터<br/>
                  4. AI 도입 프로세스<br/>
                  5. 예상 비용 및 ROI<br/>
                  📌 컨설팅 결과 내용 상세 제공<br/>
                  📌 컨설팅 결과 PDF 저장 기능<br/>
                </div>
                <div>
                ✅ 실제 기업 컨설팅 데이터 기반 내용 생성<br/>
                ✅ 기업 맞춤 데이터 기반 LLM 내용 생성<br/>
                ✅ LLM 내용과 데이터 유사도 비교<br/>
                ✅ Hallucination 검증을 통해 실제 데이터 기반 내용 생성<br/>
                </div>
              </Service>
                <Service style={{borderRadius:"0.5rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <strong>1달 무제한 &rarr; $0.99&#x2F;month</strong>
                </Service>
              </ContentWrapper>
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
  width: 70%;
  height: calc(100% - 5rem);
  border-radius: 1.875rem;
border: 1px solid #C9C9C9;
`

const SubscribeContainer = styled.div`
  width: 100%;
  height: calc(100% - 5rem);
    border-radius: 1.875rem;
border: 1px solid #C9C9C9;
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
  ${hoverGrow}
`

const Plan = styled(Title)`
height: 4rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid #C9C9C9;
`

const ContentWrapper = styled.div`
padding: 1.6rem;
display: flex;
flex-direction: column;
gap: 1rem;
flex-grow: 1;
height: calc(100% - 7rem);
`

const Content = styled(Font)`
color: #4262FF;
font-size: 1.25rem;
font-weight: 800;
line-height: 1.875rem;
width: 100%;
border-radius: 0.625rem;
background: #EBEFFF;
box-sizing: border-box;
padding: 1.5rem 2rem;
display: flex;
align-items: center;
flex: 2;
`

const Service = styled(Font)`
padding: 1rem 0 1rem 1rem;
font-size: 1rem;
font-weight: 600;
border-radius: 0.9375rem;
background: #F2F3F7;
width: 100%;
line-height: 1.5;
box-sizing: border-box;
flex: 8;
`