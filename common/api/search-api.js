import {api} from "./api";

export const searchApi = {
    search: (keyword, page = 1, per_page = 10) => api.get(`search/users?q=${JSON.stringify(keyword)}&page=${page}&per_page=${per_page}`)
};
