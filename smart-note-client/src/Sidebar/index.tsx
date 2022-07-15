import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Profile from './Profile';
import Search from './Search';
import AddNew from './AddNew';

const cx = classNames.bind(styles);

const SideBar = () => {
    return (
        <div className={cx('wrapper')}>
            <img src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/logo.png" alt="Avatar" style={{ width: '50px', height: '50px' }}></img>
            <Profile />
            <Search />
            <AddNew />
        </div>
    );
};

export default SideBar;
