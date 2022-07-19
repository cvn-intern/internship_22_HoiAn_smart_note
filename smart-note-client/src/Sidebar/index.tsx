import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Profile from './Profile';
import Search from './Search';
import AddNew from './AddNew';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const SideBar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div className={cx('wrapper')}>
            <img src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/logo_test.png" alt="Avatar" className={cx('logo')} onClick={handleClick}></img>
            <Profile />
            <Search />
            <AddNew />
            <Navigation />
        </div>
    );
};

export default SideBar;
