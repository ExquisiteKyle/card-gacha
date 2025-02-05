import { Login, Register } from "@/types/types";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const handleRegister = (content: Register) => {
  if (!apiUrl) return;
  return fetch(`${apiUrl}/user/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((result) => result)
    .catch((err) => console.error(err));
};

export const handleLogin = (content: Login) => {
  if (!apiUrl) return;
  return fetch(`${apiUrl}/user/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((result) => result)
    .catch((err) => console.error(err));
};

const handleFetchData = (endpoint: string, content: Object) =>
  fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  }).then((result) => {});
