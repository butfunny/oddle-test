const hostUrl = "https://api.github.com";
import fetch from 'isomorphic-unfetch';
export const api = {
    get: async (url) => {
        const res = await fetch(`${hostUrl}/${url}`);
        return res.json();
    }
}
