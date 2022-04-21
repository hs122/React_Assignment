import React from 'react'

import classes from './Header.module.css'
import Logo from '../assests/upUgo_logo.png'
import Bell from '../assests/bell.png'

const Header = () => {
  return (
    <header className={classes.header}>
        <div>
            <a href="#" className={classes.logo} ><img src={Logo}/></a>
        </div>
        <nav className={classes.nav}>
            <ul className={classes['header-items']}>
                <li className={classes['header-item']}>
                  <img src= {Bell}/>
                </li>
                <li className ={classes['header-itemss']}> <img src= {Bell}/></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header