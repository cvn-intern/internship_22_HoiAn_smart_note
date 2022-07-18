import classNames from 'classnames/bind';
import styles from './NoteDetails.module.scss';
import { CaretDownOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

const NoteDetails = ({ activeNote, onUpdateNote }: any) => {
    const onEditField: any = (key: number, value: any) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    if (!activeNote) return <div className={cx('no-active-note')}>No note selected</div>;

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <button>
                    Category
                    <CaretDownOutlined className={cx('down-arrow')} />
                </button>
                <div className={cx('label-button')}>
                    <button>Label 1</button>
                    <button>Label 2</button>
                    <button>Label 3</button>
                </div>
            </div>
            <div className={cx('content')}>
                <input
                    type="text"
                    id="title"
                    value={activeNote.title}
                    placeholder="Title"
                    autoFocus
                    onChange={(e) => onEditField('title', e.target.value)}
                />
                <textarea
                    id="body"
                    placeholder="Write your note here..."
                    value={activeNote.body}
                    onChange={(e) => onEditField('body', e.target.value)}
                ></textarea>
            </div>
            <div className={cx('button-save')}>{/* <button>Save</button> */}</div>
        </div>
    );
};

export default NoteDetails;
