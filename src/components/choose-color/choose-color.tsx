import React from 'react';
import {Icolor} from "../../models/Icolor";
import styles from './choose-color.module.css';

interface Iprops {
    color: Icolor;
}

const ChooseColor = (props: Iprops) => {
    return <div className={styles.colorItem}>
        color
    </div>;
};

export default ChooseColor;
