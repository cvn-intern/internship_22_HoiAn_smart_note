import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import styles from './AddNew.module.scss';

const cx = classNames.bind(styles);

const AddNew = () => {
    return (
        <div className={cx('add-wrapper')} onClick={() => alert('Show popup!')}>
            <div className={cx('add-left')}>
                <PlusOutlined className={cx('add-icon')} />
                <span className={cx('add-title')}>Add New</span>
            </div>
            <div className={cx('add-right')}>
                <DownOutlined className={cx('add-icon')} />
            </div>
        </div>
    );
};

export default AddNew;
