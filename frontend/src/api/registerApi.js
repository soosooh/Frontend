import axiosInstance from "./axiosInstance";

//이메일 중복확인
export const emailCheck = async (email) => {
  try {
    const response = await axiosInstance.post("/email-check", {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("이메일 중복 확인 오류: ", error);
    throw error.response ? error.response.data : error;
  }
};
//사업자 등록번호 검색
export const businessNumberCheck = async (businessNumber) => {
  try {
    const response = await axiosInstance.post("/corporation-num-check", {
      businessNumber,
    });
    return response.data;
  } catch (error) {
    console.error("사업자 등록번호 확인 오류: ", error);
    throw error.response ? error.response.data : error;
  }
};
//회원가입
export const signup = async (data) => {
  try {
    const response = await axiosInstance.post("/signup", data);
    return response.data;
  } catch (error) {
    console.error("회원가입 오류: ", error);
    throw error.response ? error.response.data : error;
  }
};
