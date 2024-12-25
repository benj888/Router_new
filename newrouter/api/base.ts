import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
});
