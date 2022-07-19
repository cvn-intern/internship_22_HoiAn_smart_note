import { DownOutlined, PlusOutlined, UpOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import { ChangeEvent, useState } from 'react';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import PopupConfirm from '../../components/Popup/PopupConfirm';
import { Category } from '../../models/category';
import { Label } from '../../models/label';
import categoryApi from '../../services/categoryApi';
import labelApi from '../../services/labelApi';
import styles from './AddNew.module.scss';

const cx = classNames.bind(styles);

const AddNew = () => {
    const [isPopUpShow, setPopUpShow] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [isShowAddCategory, setIsShowAddCategory] = useState<boolean>(false);
    const [isShowAddLabel, setIsShowAddLabel] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddCategory = async () => {
        const newCategory: Category = {
            id: Math.floor(Math.random() * 100),
            category_name: inputValue,
            created_at: Date.now(),
            updated_at: Date.now(),
            user_id: 1,
        };

        try {
            await categoryApi.add(newCategory);
            setIsSubmitted(true);
            setInputValue('');
            setIsShowAddCategory(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddLabel = async () => {
      const newLabel: Label = {
          id: Math.floor(Math.random() * 100),
          label_name: inputValue,
          created_at: Date.now(),
          updated_at: Date.now(),
          user_id: 1,
      };

      try {
          await labelApi.add(newLabel);
          setIsSubmitted(true);
          setInputValue('');
          setIsShowAddLabel(false);
      } catch (error) {
          console.log(error);
      }
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
                onChange={(e) => handleInputChange(e)}
                onClose={toggleAddCategory}
                onConfirm={handleAddCategory}
                submitted={isSubmitted}
                onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
            />

            <PopupConfirm
                show={isShowAddLabel}
                title="Create new label"
                input
                placeholder="Label name"
                inputValue={inputValue}
                onChange={(e) => handleInputChange(e)}
                onClose={toggleAddLabel}
                onConfirm={handleAddLabel}
                submitted={isSubmitted}
                onKeyDown={(e) => e.key === 'Enter' && handleAddLabel()}
            />
        </div>
    );
};

export default AddNew;
