import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import styles from './Note.module.scss';
import NoteItems from './NoteItems';
import NoteDetails from './NoteDetails';

const cx = classNames.bind(styles);

const Note = () => {
    const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
    const [activeNote, setActiveNote] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    console.log(inputRef);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuidv4(),
            title: 'Untitle note',
            body: '',
            lastModified: Date.now(),
        };

        setNotes([newNote, ...notes]);
    };

    const onUpdateNote = (updatedNote: string) => {
        const updatedNotesArray = notes.map((note: any) => {
            if (note.id === activeNote) {
                return updatedNote;
            }

            return note;
        });

        setNotes(updatedNotesArray);
    };

    const onDeleteNote = (idToDelete: number) => {
        setNotes(notes.filter((note: any) => note.id !== idToDelete));
    };

    const getActiveNote = () => {
        inputRef.current! && inputRef.current!.focus();
        return notes.find((note: any) => note.id === activeNote);
    };

    return (
        <div className={cx('wrapper-content')}>
            <NoteItems
                notes={notes}
                onAddNote={onAddNote}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <NoteDetails activeNote={getActiveNote()} onUpdateNote={onUpdateNote} inputRef={inputRef} />
        </div>
    );
};

export default Note;
