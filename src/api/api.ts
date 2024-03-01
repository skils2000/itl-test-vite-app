import axios from "axios";
import { UserInfo } from "../types/userTypes";

const baseURL = "https://jsonplaceholder.typicode.com";

export const APIs = {
  getUsers() {
    return axios.get<UserInfo[]>(`${baseURL}/users`);
  },
};
