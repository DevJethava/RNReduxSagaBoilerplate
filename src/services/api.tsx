import axios from 'axios';
import { CommonUtils, StorageUtils } from '../utils';

const baseURL = 'https://randomuser.me/';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        // "content-type": "multipart/form-data",
        Accept: 'application/json',
    },
});

const getDashbordData = data => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosInstance.get('api', data);
            resolve(response.data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
};

export default API = {
    axiosInstance,
    getDashbordData,
};
