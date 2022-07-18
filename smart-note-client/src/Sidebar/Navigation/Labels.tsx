import { Menu } from 'antd';
import { useEffect, useState } from 'react';

import { Label } from '../../models/label';
import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';

import { TagsOutlined } from '@ant-design/icons';
import labelApi from '../../services/labelApi';

const cx = classNames.bind(styles);

const Categories = () => {
    const [category, setCategory] = useState<Label[]>([]);
    useEffect(() => {
        // Lưu ý phải cho () để hàm async chạy ngay để không lỗi
        (async () => {
            try {
                const data = await labelApi.getById(6);
                setCategory(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Menu mode="inline" style={{margin: '0 25px 0 25px', width: 'auto', background: '#328cff', borderRadius: '20px'}}>
            <Menu.SubMenu title={<span>Label</span>} className={cx('menu')}>
                {category.map((cate, index: number) => {
                    return (
                        <Menu.Item key={index}>
                            <TagsOutlined />
                            <span>{cate.label_name}</span>
                        </Menu.Item>
                    );
                })}
            </Menu.SubMenu>
        </Menu>
    );
};

export default Categories;

