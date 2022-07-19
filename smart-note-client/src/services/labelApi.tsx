import axiosClient from './axiosClient';
import { Label } from '../models/label';

const labelApi = {
    getById(id: number): Promise<Label[]> {
        const url = `/labels/${id}`;
        return axiosClient.get(url);
    },
    add(data: Label): Promise<Label> {
        const url = `/labels`;
        return axiosClient.post(url, data);
    },
};


export default labelApi;
