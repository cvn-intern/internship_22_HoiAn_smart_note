import styles from './Profile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Profile = () => {
    return (
        <div className={cx('profile')}>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className={cx('avatar')}></img>
            <div className={cx('info')}>
                <p className={cx('username')}>Hai Nguyen</p>
                <p className={cx('email')}>thaihai1004@gmail.com</p>
            </div>
        </div>
    );
};

export default Profile;
