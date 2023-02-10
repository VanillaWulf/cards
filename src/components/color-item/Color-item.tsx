import React from 'react';
import styles from './color-item.module.css';
import {Icolor} from "../../models/Icolor";

interface Iprops {
    color: Icolor;
    handleOnSubmit: (num: number) => void;
    handleOnDelete: (num: number) => void;
}

const ColorItem = (props: Iprops) => {

    return (

        <div className={`${styles.item} ${props.color.isSelected ? styles.isSelected : styles.colorItem}`}>
            <div className={styles.itemWrp}>
                <div className={styles.color} style={{background: props.color.color}}>
                </div>
                <div>
                    <div className={styles.name}>
                        {props.color && props.color.name}
                    </div>
                    <div>
                        <button onClick={() => props.handleOnSubmit(props.color.id)}>Choose</button>
                        <button>edit</button>
                        <button onClick={() => props.handleOnDelete(props.color.id)}>delete</button>
                    </div>
                </div>
             </div>
       </div>
    )
};



export default ColorItem;
