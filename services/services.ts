import { Login, Register } from "@/types/types";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

// Authentications

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

// Cards

export const handleAddCard = (content: Object) =>
  fetch(`${apiUrl}/card/add-card`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  })
    .then((result) => result)
    .catch((err) => console.error(err));
