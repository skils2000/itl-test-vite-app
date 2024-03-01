import axios from "axios";
import { UserInfo } from "../types/userTypes";
import { Post } from "../types/postsTypes";

const baseURL = "https://jsonplaceholder.typicode.com";

export const APIs = {
  getUsers() {
    return axios.get<UserInfo[]>(`${baseURL}/users`);
  },
  getUserPosts(userId: number) {
    return axios.get<Post[]>(`${baseURL}/posts?userId=${userId}`);
  },
};
