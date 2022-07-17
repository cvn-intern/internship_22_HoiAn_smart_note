import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Navigation from './Navigation';

const cx = classNames.bind(styles);

const SideBar = () => {
    return <div className={cx('wrapper')}>
        <Navigation />
    </div>;
};

export default SideBar;
