import styled from "styled-components";
import ReportList from "../entities/main/ReportList";
import MainComponent from "../entities/main/MainComponent";

export default function Main() {
  return (
  <Wrapper>
    <div style={{width: "20%"}}><ReportList/></div>
    <div style={{flexGrow:"1"}}><MainComponent/></div>
  </Wrapper>
  );
}


const Wrapper = styled.div`
background: #f2f2f2;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  gap: 1.25rem;
`