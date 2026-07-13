import axios from "axios";

const api = axios.create({
  baseURL: "https://careerpilot-ai-3kve.onrender.com",
});

export default api;