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

export const handleLogOut = () =>
  fetch(`${apiUrl}/user/logout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => true)
    .catch((err) => console.error(err));

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

export const handleGetAllCards = () =>
  fetch(`${apiUrl}/card/get-all-cards`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((result) => result)
    .catch((err) => console.error(err));

export const handleDeleteCards = (deleteList: number[]) =>
  fetch(`${apiUrl}/card/delete-cards`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids: deleteList }),
  })
    .then((result) => result)
    .catch((err) => console.error(err));

export const handleAddTestData = () =>
  fetch(`${apiUrl}/card/add-test-data`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((result) => result)
    .catch((err) => console.error(err));

// Gachapon Draws

export const handleGachaponDrawSingle = () =>
  fetch(`${apiUrl}/gachapon/single`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((result) => result)
    .catch((err) => console.error(err));

export const handleGachaponDrawMulti = () =>
  fetch(`${apiUrl}/gachapon/multi`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((result) => result)
    .catch((err) => console.error(err));
