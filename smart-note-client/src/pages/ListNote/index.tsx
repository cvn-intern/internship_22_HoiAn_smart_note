import SideBar from '../../Sidebar';
import Note from '../Note';
import classNames from 'classnames/bind';
import styles from './ListNote.module.scss';

const cx = classNames.bind(styles);

const ListNote = () => {
    return (
        <div className={cx('wrapper-content')}>
            <SideBar />
            <Note />
        </div>
    );
};

export default ListNote;
