import axiosClient from './axiosClient';
import { Note } from '../models/note';

const noteApi = {
    getById(id: any): Promise<Note[]> {
        const url = `/notes/category/${id}`;
        return axiosClient.get(url);
    },
    addNote(note: any, id: any): Promise<any> {
        const url = `/api/notes/category/${id}`;
        return axiosClient.post(url, note)
    }
};

export default noteApi;
