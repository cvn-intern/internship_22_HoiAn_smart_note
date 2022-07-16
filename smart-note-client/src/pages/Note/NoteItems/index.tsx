import classNames from 'classnames/bind';
import { FileAddOutlined } from '@ant-design/icons'
import styles from './NoteItems.module.scss'

const cx = classNames.bind(styles)

interface notes {
    notes: any,
    onAddNote: any,
    onDeleteNote: any,
    activeNote: any,
    setActiveNote: any,
}

const NoteItems = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote }: notes) => {

    return <div  className={cx('container')}>
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <h3>Uncategory</h3>
                <FileAddOutlined className={cx('add-icon')}  onClick={onAddNote}/>
            </div>
            <div className={cx('header-totalnote')}>
                4 notes
            </div>
        </header>
        {notes.map((note : any) => (
            <div className={cx('note', 'active')} key={note.user_id} onClick={() => setActiveNote(note.user_id)}>
                <div className={cx('noteTitle')}>
                    <strong>{note.title}</strong>
                    <button onClick={() => onDeleteNote(note.user_id)}>Delete</button>
                </div>
                <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                <small>
                    Last Modilfied{""}
                    {new Date(note.lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
                </small>
            </div>
        ))}
    </div>;
};

export default NoteItems;
