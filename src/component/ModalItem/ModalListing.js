import React from 'react'

import classes from './ModalListing.module.css'

const ModalListing = props => {
  return (
    <div className={classes.modal}>
    <div className={classes.name}>{props.user ? props.user.name :''}</div>
    <div>
    <div className={classes.details}>
      <p>Personal Details</p>
    <div className ={classes.email}>{props.user ? props.user.email:''}</div>
    <div className ={classes.phone}>{props.user ? props.user.phone:''}</div>
    </div>
    </div>
    <div className={classes.company}>
      <p>
      Company Details
      </p>
    <div className={classes['company-name']}>{props.user ? props.user.company.name:''}</div>
    <div className={classes.phrase}>{props.user ? props.user.company.catchPhrase:''}</div>
    </div>
   <div className={classes.pic}>
     <img src={props.user ? props.user.pic :''}/>
   </div>

    </div>
  )
}

export default ModalListing