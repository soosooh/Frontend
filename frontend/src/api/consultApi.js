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

export const getPdf = async () => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/report",
      {
        name: "company",
        companySize: "Medium",
        industry: "Retail",
        painPoint: "매출 증대를 위한 고객 행동 분석",
      },
      { responseType: "json" } // JSON 형식으로 응답 받음
    );

    console.log("응답 데이터 상태코드:", response.status);
    console.log("응답 데이터 내용:", response.data);

    if (response.status === 200) {
      const base64Pdf = response.data.data.pdf;

      if (!base64Pdf) {
        throw new Error("응답 데이터에 PDF 정보가 없습니다.");
      }

      return base64Pdf;
    } else {
      throw new Error(`응답 상태코드가 200이 아닙니다: ${response.status}`);
    }
  } catch (error) {
    console.error("PDF 생성 오류:", error);
    throw error.response ? error.response.data : error;
  }
};

export const getAllPdf = async () => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/consulting/all",
      {
        industry: "Retail",
        company_size: "Medium",
        pain_point: "매출 증대를 위한 고객 행동 분석",
      },
      { responseType: "json" } // JSON 형식으로 응답 받음
    );

    console.log("응답 데이터 상태코드:", response.status);
    console.log("응답 데이터 내용:", response.data);

    if (response.status === 200) {
      const base64Pdf = response.data.data.pdf;

      if (!base64Pdf) {
        throw new Error("응답 데이터에 PDF 정보가 없습니다.");
      }

      return base64Pdf;
    } else {
      throw new Error(`응답 상태코드가 200이 아닙니다: ${response.status}`);
    }
  } catch (error) {
    console.error("PDF 생성 오류:", error);
    throw error.response ? error.response.data : error;
  }
};

export default axiosInstance;
