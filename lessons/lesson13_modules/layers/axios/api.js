import axios from "https://esm.sh/axios";
import urls from "./urls.js";

import {validateID} from "./valdator.js";

const axiosObject = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', headers: {'Content-Type': 'application/json'},
});

export async function getUsers() {
    return await axiosObject.get(urls.users)
}

export async function getUser(userId) {

    return await axiosObject.get(urls.users + '/' + validateID(userId));
}

export async function getPosts() {
    return await axiosObject.get(urls.posts)
}

export async function getPost(postId) {
    return await axiosObject.get(urls.posts + '/' + postId);
}
