import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames/bind';
import styles from './Note.module.scss';
import NoteItems from './NoteItems';
import NoteDetails from './NoteDetails';
import noteApi from '../../services/noteClient';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const Note = () => {
    const params = useParams();

    const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);

    const [activeNote, setActiveNote] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    //     localStorage.setItem('notes', JSON.stringify(notes));
    // }, [notes]);

    useEffect(() => {
        noteApi.getById(params.category_id).then((data) => {
            setNotes(data);
        });
    }, []);

    const onAddNote = async () => {
        const newNote = {
            id: uuidv4(),
            note_title: 'Untitle note',
            note_content: 'Uncontent note',
            lastModified: Date.now(),
        };

        const newData = {
            note_title: 'Untitle note',
            note_content: 'Uncontent note',
        };
        await noteApi.addNote(newData, params.category_id);
        inputRef.current! && inputRef.current.focus();

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
