import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Profile from './Profile';
import Search from './Search';
import AddNew from './AddNew';

const cx = classNames.bind(styles);

const SideBar = () => {
    return (
        <div className={cx('wrapper')}>
            <img src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/logo_test.png" alt="Avatar" className={cx('logo')} ></img>
            <Profile />
            <Search />
            <AddNew />
        </div>
    );
};

export default SideBar;
