import React from 'react';
import {useSelector} from "react-redux";
import {Istate} from "../../models/Istate";
import styles from './card-active-color.module.css';

const CardActiveColor = () => {
    const activeColor = useSelector((state:Istate) => state.boardPage.activeColor);

    // const handleOnSubmit = (cardId: number) : void => {
    //     console.log('handle click', cardId);
    //     dispatch({type: ACTIONS.CHANGE_CARD_COLOR, payload: cardId});
    // };

    return <div className={styles.colorWrp}>
        <div className={styles.colorLabel}>
            <p className={styles.desc}>Active Color</p>
            <div className={styles.color} style={{background: activeColor.color }}></div>
            <p className={styles.desc}>{activeColor.color}</p>
        </div>
    </div>

};

export default CardActiveColor;
