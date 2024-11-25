import styled from "styled-components";

export default function Result({ selectedButton }){

    const title=["요약","상세"]

    return(
    <Wrapper>
        {title[selectedButton]}컨설팅결과
    </Wrapper>);
}

const Wrapper = styled.div`

`