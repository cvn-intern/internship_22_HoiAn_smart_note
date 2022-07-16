import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import classNames from 'classnames/bind';
import styles from './Note.module.scss';
import NoteItems from './NoteItems';
import NoteDetails from './NoteDetails';

const cx = classNames.bind(styles);

const Note = () => {
    const [ notes, setNotes ] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    )
    
    const [activeNote, setActiveNote] = useState(false)

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const onAddNote =  () => {
        const newNote = {
            user_id: uuidv4(),
            title: "Untitle note",
            body: "",
            lastModified: Date.now(),
        }

        setNotes([newNote, ...notes])
    }

    const onDeleteNote = (idToDelete : number) => {
        setNotes(notes.filter((note : any) => note.user_id !== idToDelete))
    }

    return (
        <div className={cx('wrapper-content')}>
            <NoteItems 
                notes={notes} 
                onAddNote={onAddNote} 
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <NoteDetails/>
        </div>
    );
};

export default Note;
