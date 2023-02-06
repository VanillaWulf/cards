import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../models/IState";
import {ACTIONS} from "../../enums/enums";
import styles from './card-active-color.module.css';

const CardActiveColor = () => {
    const dispatch  = useDispatch();
    const activeColor = useSelector((state:IState) => state.activeColor);

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
