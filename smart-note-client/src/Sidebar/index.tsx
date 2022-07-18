import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Profile from './Profile';
import Search from './Search';
import AddNew from './AddNew';
import Categories from './Navigation/Categories';
import Labels from './Navigation/Labels';

const cx = classNames.bind(styles);

const SideBar = () => {
    return (
        <div className={cx('wrapper')}>
            <img src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/logo_test.png" alt="Avatar" style={{ width: '50px', height: '50px', marginLeft: '40%' }}></img>
            <Profile />
            <Search />
            <AddNew />
            <Categories />
            <Labels />
        </div>
    );
};

export default SideBar;
