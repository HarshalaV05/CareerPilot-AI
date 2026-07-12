import axios from "axios";

const api = axios.create({
  baseURL: "https://careerpilot-ai-7qzr.onrender.com",
});

export default api;