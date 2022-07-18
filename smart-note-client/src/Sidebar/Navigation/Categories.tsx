import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import categoryApi from '../../services/categoryApi';

import { Category } from '../../models/category';
import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';

import { useNavigate } from "react-router-dom";

import { FolderOpenOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

const Categories = () => {
    const [category, setCategory] = useState<Category[]>([]);
    const navigate = useNavigate();

    const handleClick = (id: Number) => {
        navigate(`/categories/note/${id}`)
    }
    
    useEffect(() => {
        // Lưu ý phải cho () để hàm async chạy ngay để không lỗi
        (async () => {
            try {
                const data = await categoryApi.getById(4);
                setCategory(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <Menu mode="inline" style={{margin: '0 25px 0 25px', width: 'auto', background: '#328cff', border: 'black'}}>
            <Menu.SubMenu title={<span>Category</span>} className={cx('menu')}>
                {category.map((cate, index: number) => {
                    return (
                        <Menu.Item key={index} onClick={() => {handleClick(cate.id)}} className={cx('menu-item')}>
                            <FolderOpenOutlined />
                            <span>{cate.category_name}</span>
                        </Menu.Item>
                    );
                })}
            </Menu.SubMenu>
        </Menu>
    );
};

export default Categories;

