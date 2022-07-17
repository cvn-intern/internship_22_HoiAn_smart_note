import { DownOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import styles from './AddNew.module.scss';

const cx = classNames.bind(styles);

const AddNew = () => {
    const [isPopUpShow, setPopUpShow] = useState(false);

    const togglePopUp = () => {
        setPopUpShow(!isPopUpShow);
    };

    return (
        <div className={cx('wrapper')}>
            <Button
                primary
                rounded
                large
                leftIcon={<PlusOutlined className={cx('icon')} />}
                rightIcon={
                    isPopUpShow ? <UpOutlined className={cx('icon-small')} /> : <DownOutlined className={cx('icon-small')} />
                }
                className={cx('btn-add')}
                onClick={togglePopUp}
            >
                Add New
            </Button>
            <Popup show={isPopUpShow} className={cx('popup')}>
                <Button
                    primary
                    rounded
                    large
                    leftIcon={<PlusOutlined className={cx('icon')} />}
                    className={cx('btn-add')}
                >
                    Add Category
                </Button>
                <Button
                    primary
                    rounded
                    large
                    leftIcon={<PlusOutlined className={cx('icon')} />}
                    className={cx('btn-add')}
                >
                    Add Label
                </Button>
                <Button
                    primary
                    rounded
                    large
                    leftIcon={<PlusOutlined className={cx('icon')} />}
                    className={cx('btn-add')}
                >
                    Add Note
                </Button>
            </Popup>
        </div>
    );
};

export default AddNew;
