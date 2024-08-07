import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getStoreData = async () => {
  const response = await api.get("/stores");
  console.log(response);
  return response.data;
};
