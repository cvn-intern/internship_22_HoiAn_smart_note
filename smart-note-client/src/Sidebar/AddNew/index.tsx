import { DownOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import PopupConfirm from '../../components/Popup/PopupConfirm';
import styles from './AddNew.module.scss';

const cx = classNames.bind(styles);

const AddNew = () => {
    const [isPopUpShow, setPopUpShow] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [isShowAddCategory, setIsShowAddCategory] = useState<boolean>(false);
    const [isShowAddLabel, setIsShowAddLabel] = useState<boolean>(false);

    const togglePopUp = () => {
        setPopUpShow(!isPopUpShow);
    };

    const toggleAddCategory = () => {
        setIsShowAddCategory(!isShowAddCategory);
        setPopUpShow(!isPopUpShow);
        setInputValue('');
    };

    const toggleAddLabel = () => {
        setIsShowAddLabel(!isShowAddLabel);
        setPopUpShow(!isPopUpShow);
        setInputValue('');
    };

    const handleAddCategory = (value: string) => {
        console.log(value);
    };

    return (
        <div className={cx('wrapper')}>
            <Button
                primary
                rounded
                large
                leftIcon={<PlusOutlined className={cx('icon')} />}
                rightIcon={
                    isPopUpShow ? (
                        <UpOutlined className={cx('icon-small')} />
                    ) : (
                        <DownOutlined className={cx('icon-small')} />
                    )
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
                    onClick={toggleAddCategory}
                >
                    Add Category
                </Button>
                <Button
                    primary
                    rounded
                    large
                    leftIcon={<PlusOutlined className={cx('icon')} />}
                    className={cx('btn-add')}
                    onClick={toggleAddLabel}
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

            <PopupConfirm
                show={isShowAddCategory}
                title="Create new category"
                input
                placeholder="Category name"
                inputValue={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onClose={toggleAddCategory}
                onConfirm={() => console.log(inputValue)}
                children={undefined}
            />

            <PopupConfirm
                show={isShowAddLabel}
                title="Create new label"
                input
                placeholder="Label name"
                inputValue={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onClose={toggleAddLabel}
                onConfirm={() => console.log(inputValue)}
                children={undefined}
            />
        </div>
    );
};

export default AddNew;
