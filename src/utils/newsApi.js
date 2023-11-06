// export const baseUrl = "http://localhost:3001";
// import { apiKey } from "../utils/constants";

export const baseUrl = `https://newsapi.org/v2`;

export const handleServerResponse = (res) => {
  const resp = res.json();
  console.log("resp", resp);

  return res.ok ? resp : Promise.reject(`Error: ${res.status}`);
};

export const getNewsCardList = ({ q, apiKey, from, to, pageSize }) => {
  return fetch(
    `${baseUrl}/everything?q=${q}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=${pageSize}`,
    {
      method: "GET",
    }
  ).then(handleServerResponse);
};
