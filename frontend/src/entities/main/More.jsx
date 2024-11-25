import styled from "styled-components";

export default function More() {
  return (
    <Wrapper>
      <Iframe src="https://maum.ai/" title="Maum AI" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
