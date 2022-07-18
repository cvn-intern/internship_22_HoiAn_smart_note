import axiosClient from './axiosClient';
import { Category } from '../models/category';

const categoryApi = {
    getById(id: number): Promise<Category[]> {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
};

export default categoryApi;
