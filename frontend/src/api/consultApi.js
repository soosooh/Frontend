import axiosInstance from "./axiosInstance";

export const getAllReport = async () => {
  try {
    const response = await axiosInstance.post("/api/v1/consulting/all", {
      industry: "Retail",
      company_size: "Medium",
      pain_point: "매출 증대를 위한 고객 행동 분석",
    });
    console.log("리포트 응답 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.error("리포트 생성 오류: ", error);
    throw error.response ? error.response.data : error;
  }
};

export const getSummaryReport = async () => {
  try {
    const response = await axiosInstance.post("/api/v1/consulting", {
      name: "company",
      companySize: "Medium",
      industry: "Retail",
      painPoint: "매출 증대를 위한 고객 행동 분석",
    });
    console.log("요약 리포트 응답 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.error("요약 리포트 생성 오류: ", error);
    throw error.response ? error.response.data : error;
  }
};

export default axiosInstance;
