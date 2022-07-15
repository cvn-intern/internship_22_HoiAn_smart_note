import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SideBar = () => {
    return <div className={cx('wrapper')}>Sidebar</div>;
};

export default SideBar;
