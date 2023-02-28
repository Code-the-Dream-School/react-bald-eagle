import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    return (
        <>
            <nav className={style.navBar}>
                <ul>
                    <Link to="/stg" className={style.link}>Short Term Goals</Link>
                    <Link to="/" className={style.link}>Home</Link>
                    <Link to="/ltg" className={style.link}>Long Term Goals</Link>
                </ul>
            </nav>
            <img src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_960_720.png" alt='list'/>
        </>
    )
}

export default Header;