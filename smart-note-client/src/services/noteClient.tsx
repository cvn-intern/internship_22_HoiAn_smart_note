import axiosClient from './axiosClient';
import { Note } from '../models/note';

const noteApi = {
    getById(id: any): Promise<Note[]> {
        const url = `/notes/category/${id}`;
        return axiosClient.get(url);
    },
};

export default noteApi;
