export interface Note {
    id: number,
    note_title: string,
    note_content: string,
    attachment?: string,
    created_at?: any,
    deleted_at?:any,
    user_id: number,
    category_id: number
}