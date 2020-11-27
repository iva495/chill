import React from 'react'
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className={styles.nav}> 

            <div className={styles.head}>
                <div className={styles.persona}>
                    <text>Александр</text><br/>
                    <text>Ян</text><br/>
                    <text className={styles.login}>yan-san</text>
                </div>
                <img className={styles.avatar} src='https://www.firestock.ru/wp-content/uploads/2014/06/Fotolia_8789265_Subscription_XXL.jpg' />
            </div>

            <div className={styles.items}>
                <NavLink  to="/profile" activeClassName={styles.activeLink}> Профиль </NavLink>
                <NavLink  to="/fallow" activeClassName={styles.activeLink}> Подписки </NavLink>
                <NavLink  to="/add" activeClassName={styles.activeLink}> Добавить </NavLink>
                <NavLink  to="/library" activeClassName={styles.activeLink}> Библиотека </NavLink>
                <NavLink  to="/settings" activeClassName={styles.activeLink}> Настройки </NavLink>
            </div>
            <NavLink className={styles.exit} to="/" activeClassName={styles.activeLink}> Выход </NavLink>
      </nav>
    );
}

export default Nav;/* <div className= {`${styles.item} ${styles.active}`}>
            <NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink>
        </div><div className={styles.item}>
           <NavLink to="/messeges" activeClassName={styles.activeLink}>Messeges</NavLink>
        </div><div className={styles.item}>
        <NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink>
        </div>*/