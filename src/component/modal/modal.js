import React from 'react'
import style from './modal.module.css'
const PopUpModal = (props) => {
    return (
          <div className={style.modal} onClick={props.onClick}>
              {props.children}
          </div>
    )
}

export default PopUpModal
