import axios from "axios";

export const reqUrl = "http://localhost:8000/api";

const request = async (method, url, data) => {
  let TOKEN = null;

  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      console.log("Stored User:", user);

      TOKEN = user?.token || user?.data?.token || null;
      console.log("Extracted Token:", TOKEN);
    } catch (err) {
      console.error("JSON parse error:", err);
    }
  }

  const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};

  try {
    const config = {
      method,
      url: `${reqUrl}${url}`,
      data,
      headers,
    };

    console.log("Axios config:", config); 
    const res = await axios(config);

    console.log("API Response:", res.data);
    return res.data;
  } catch (err) {
    console.error(
      "API request failed:",
      err.response ? err.response.data : err.message
    );
    throw err;
  }
};

export default request;
