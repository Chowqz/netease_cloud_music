import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/music-api',
    method: 'get',
    timeout: 15000
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, function(error) {
    if (error.response.data && error.response.data.msg) {
        return Promise.reject(error.response.data.msg);
    } else {
        return Promise.reject(error);
    }
});

export default async function apiRequest(path, params = {}, config = {}) {
    const fullParams = Object.assign({
        uid: localStorage.uid
    }, params);

    return axiosInstance.request({
        url: path,
        params: params,
        ...config
    }).then(res => {
        const response = res.data;
        const { code, msg, ...body } = response
        if (code === 200) {
            return Promise.resolve(body);
        } else {
            return Promise.reject(msg);
        }
    }).catch(err => {
        return Promise.reject(err);
    })
}