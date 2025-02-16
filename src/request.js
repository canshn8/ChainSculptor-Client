import axios from "axios";

export const reqUrl = "http://localhost:8000/api";

const request = async (method, url, data) => {
  const storedUser = localStorage.getItem("user");
  console.log(storedUser);

  let TOKEN = null;

  if (storedUser) {
    try {
      const user = JSON.parse(storedUser); 
      console.log(user);  
      if (user.data && user.data.token) {
        TOKEN = user.data.token;  
        console.log(TOKEN); 
      }
    } catch (err) {
      console.error("JSON parse error:", err); 
    }
  }

  const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};

  try {
    const res = await axios({
      method,
      url: `${reqUrl}${url}`,
      data,
      headers,
    });
    return res.data;
  } catch (err) {
    console.error("API request failed", err.response ? err.response.data : err);
    throw err;
  }
};

export default { request };
