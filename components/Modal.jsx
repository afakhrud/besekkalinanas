// import React, { useEffect } from 'react'
// import { IoCloseCircleSharp } from "react-icons/io5";
// import { ModalState } from '../Database';
// import './Modal.css';
import styles from './Modal.module.css'

function Modal(props) {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h4>{props.title}</h4>
                    {/* <IoCloseCircleSharp onClick={props.click} className='close-handle' size={30} />
                     */}
                     <span onClick={props.close} className={styles.closeHandle}>&times;</span>
                </div>
                <main className={styles.modalBody}>
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default Modal

