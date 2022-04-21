import React,{useContext,useState} from 'react'

import classes from './Button.module.css'

const Button = props => {

  return <button className ={classes.button} onClick={props.onClicks} >
      VIEW DETAILS
  </button>
  
}

export default Button