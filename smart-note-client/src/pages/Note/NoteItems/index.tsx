import classNames from 'classnames/bind';
import { FileAddOutlined } from '@ant-design/icons';
import styles from './NoteItems.module.scss';

const cx = classNames.bind(styles);

interface notes {
    notes: any;
    onAddNote: any;
    onDeleteNote: any;
    activeNote: any;
    setActiveNote: any;
}

const NoteItems = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }: notes) => {
    const sortedNotes: any = notes.sort((a: any, b: any) => {
        return b.lastModified - a.lastModified;
    });

    return (
        <div className={cx('container')}>
            <header className={cx('header')}>
                <div className={cx('header-content')}>
                    <h3>Uncategory</h3>
                    <FileAddOutlined className={cx('add-icon')} onClick={onAddNote} />
                </div>
                <div className={cx('header-totalnote')}>4 notes</div>
            </header>
            {sortedNotes.map((note: any) => (
                <div
                    className={cx('note', `${note.id === activeNote && 'active'}`)}
                    key={note.id}
                    onClick={() => setActiveNote(note.id)}
                >
                    <div className={cx('noteTitle')}>
                        <strong>{note.title && note.title.substr(0, 10) + '...'}</strong>
                        <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    </div>
                    <p>{note.body && note.body.substr(0, 20) + '...'}</p>
                    <small>{new Date(note.lastModified).toLocaleDateString()}</small>
                </div>
            ))}
        </div>
    );
};

export default NoteItems;
