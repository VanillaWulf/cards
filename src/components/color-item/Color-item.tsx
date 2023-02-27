import React from 'react';
import styles from './color-item.module.css';
import {Icolor} from "../../models/Icolor";

interface Iprops {
    color: Icolor;
    handleOnSubmit: (num: number) => void;
    handleOnDelete: (num: number) => void;
    handleOpenPopup: (color: Icolor) => void;
}

const ColorItem = (props: Iprops) => {

    return (

        <div className={`${styles.item} ${props.color.isSelected ? 'border border-primary bg-light' : 'border'}`}>
            <div className={styles.itemWrp}>
                <div className={styles.color} style={{background: props.color.color}}>
                </div>
                <div className={styles.descWrp}>
                    <div className={styles.name}>
                        {props.color && props.color.name}
                    </div>
                    <div className={styles.itemBtn}>
                        <button className="btn btn-primary" onClick={() => props.handleOnSubmit(props.color.id)}>Choose</button>
                        <div className={styles.btnRow}>
                            <button className="btn btn-primary" onClick={() => props.handleOpenPopup(props.color)}>edit</button>
                            <button className="btn btn-danger" onClick={() => props.handleOnDelete(props.color.id)}>delete</button>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
};



export default ColorItem;
