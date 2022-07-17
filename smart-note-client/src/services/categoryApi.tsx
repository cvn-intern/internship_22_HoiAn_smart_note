import axiosClient from './axiosClient';
import { Category } from '../models/category';

const categoryApi = {
    getById(id: number): Promise<Category[]> {
        const url = `api/categories/${id}`;
        return axiosClient.get(url);
    },
};

export default categoryApi;
