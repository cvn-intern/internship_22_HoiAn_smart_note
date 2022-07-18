import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SideBar from './Sidebar';
import Note from './pages/Note/index';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListNote from './pages/ListNote';

const cx = classNames.bind(styles);

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories/note/:category_id" element={<ListNote />} ></Route>
                    {/* <Route path="/register" element={<Register />} /> */}
                </Routes>
        </BrowserRouter>
    );
}

export default App;
