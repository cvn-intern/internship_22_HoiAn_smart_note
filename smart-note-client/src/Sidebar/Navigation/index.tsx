import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import categoryApi from '../../services/categoryApi';

import { Category } from '../../models/category';
import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Navigation = () => {
    const [category, setCategory] = useState<Category[]>([]);
    useEffect(() => {
        // Lưu ý phải cho () để hàm async chạy ngay để không lỗi
        (async () => {
            try {
                const data = await categoryApi.getById(3);
                setCategory(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Menu mode="inline" style={{margin: '0 25px 0 25px', width: 'auto'}}>
            <Menu.SubMenu title={<span>Category</span>} className={cx('menu')}>
                {category.map((cate, index: number) => {
                    return (
                        <Menu.Item key={index}>
                            <span>{cate.category_name}</span>
                        </Menu.Item>
                    );
                })}
            </Menu.SubMenu>
        </Menu>
    );
};

export default Navigation;
