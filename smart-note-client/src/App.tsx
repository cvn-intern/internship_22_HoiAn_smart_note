import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SideBar from './Sidebar';
import Note from './pages/Note';
import axios from 'axios';
import process from 'process';

const cx = classNames.bind(styles);

interface ServerData {
    message: string;
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {
    // TEST API
    useEffect(() => {
        axios
            .get<ServerData>(API_BASE_URL + '/test')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <div className={cx('wrapper-content')}>
            <SideBar />
            <div className={cx('container')}>
                <Note />
            </div>
        </div>
    );
}

export default App;
