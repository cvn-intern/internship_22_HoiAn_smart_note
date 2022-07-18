import SideBar from '../../Sidebar';
import Note from '../Note';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('wrapper-content')}>
            <SideBar />
            {/* <Note /> */}
            Home
        </div>
    );
};

export default Home;
