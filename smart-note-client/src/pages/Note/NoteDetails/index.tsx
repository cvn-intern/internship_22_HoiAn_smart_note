import classNames from 'classnames/bind';
import styles from './NoteDetails.module.scss'
import { CaretDownOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles)

const NoteDetails = () => {
    

    return <div className={cx('container')}>
        <div className={cx('header')}>
            <button>
                Category
                <CaretDownOutlined className={cx('down-arrow')}/>
            </button>
            <div className={cx('label-button')}>
                <button>Label 1</button>
                <button>Label 2</button>
                <button>Label 3</button>
            </div>
        </div>
        <div className={cx('content')}>
            <input type="text" id="title" placeholder="Title" autoFocus onChange={(e) => {}}/>
            <textarea></textarea>
        </div>
        <div className={cx('button-save')}>
            <button >Save</button>
        </div>
    </div>;
};

export default NoteDetails;
