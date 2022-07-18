import axiosClient from './axiosClient';
import { Label } from '../models/label';

const labelApi = {
    getById(id: number): Promise<Label[]> {
        const url = `/labels/${id}`;
        return axiosClient.get(url);
    },
};

export default labelApi;
