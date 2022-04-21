import React from 'react'
import Modal from '../Modal/Modal'
import ModalListing from './ModalListing'

const ModalItem = props => {
  

  return (<Modal  onClose={props.onHide} >
   <ul><ModalListing user={props.onData}/>
   </ul>
      
    </Modal>
  )
}
export default ModalItem
