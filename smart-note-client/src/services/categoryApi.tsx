import { Category } from '../models/category';
import axiosClient from './axiosClient';

const categoryApi = {
    getById(id: number): Promise<Category[]> {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(data: Category): Promise<Category> {
        const url = `/categories`;
        return axiosClient.post(url, data);
    },
};

export default categoryApi;
