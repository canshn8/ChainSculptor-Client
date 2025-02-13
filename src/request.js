import axios from "axios";

export const reqUrl = "http://localhost:8000/api"; 


const request = async (method, url, data) => {
  const storedUser = localStorage.getItem("persist:root");
  let TOKEN = null;

  if (storedUser) {
    const user = JSON.parse(JSON.parse(storedUser).user);
    if (user && user.currentUser) {
      TOKEN = user.currentUser.accessToken;
    }
  }

  const headers = TOKEN ? { token: `Bearer ${TOKEN}` } : {};

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