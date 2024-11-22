import styled from "styled-components";
import { useState, useEffect } from "react";

export default function InputContainer() {
  const [email, setEmail] = useState("test@naver.com");
  const [name, setName] = useState("이세은");
  const [phone, setPhone] = useState("010-1234-5678");
  const [isFormValid, setIsFormValid] = useState(false);

  // 입력값 검증 로직
  useEffect(() => {
    const isEmailValid = email.includes("@") && email.includes(".");
    const isNameValid = name.trim().length > 0;
    const isPhoneValid = /^\d{3}-\d{3,4}-\d{4}$/.test(phone);

    setIsFormValid(isEmailValid && isNameValid && isPhoneValid);
  }, [email, name, phone]);

  return (
    <Wrapper>
      <InputWrapper>
        <InputTitle>이메일</InputTitle>
        <Input
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper>
        <InputTitle>이름</InputTitle>
        <Input
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper>
        <InputTitle>전화번호</InputTitle>
        <Input
          placeholder="전화번호를 입력하세요"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputWrapper>

      <RegisterButton disabled={!isFormValid}>수정하기</RegisterButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const InputTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 0.9375rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  height: 3.35rem;
  border-radius: 0.3125rem;
  border: 1px solid #888;
  background: #fff;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
  color: #000;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RegisterButton = styled.button`
  height: 3.41rem;
  width: 100%;
  border-radius: 0.3125rem;
  background: ${({ disabled }) => (disabled ? "#ccc" : "#4262ff")};
  color: #fff;
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin-top: 1.6rem;
  border: none;
  transition: background 0.3s;
`;
