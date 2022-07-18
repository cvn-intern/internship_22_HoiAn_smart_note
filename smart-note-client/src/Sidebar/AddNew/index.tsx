import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './AddNew.module.scss';

const cx = classNames.bind(styles);

const AddNew = () => {
    return (
        <div className={cx('wrapper')} onClick={() => alert('Show popup!')}>
            <div className={cx('left-side')}>
                <PlusOutlined className={cx('icon')} />
                <span className={cx('title')}>Add New</span>
            </div>
            <div className={cx('right-side')}>
                <DownOutlined className={cx('icon')} />
            </div>
        </div>
    );
};

export default AddNew;
