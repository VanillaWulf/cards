import React, {useEffect, useState} from 'react';
import styles from './legend.module.css';
import {useDispatch, useSelector} from "react-redux";
import ColorItem from "../color-item/Color-item";
import {Istate} from "../../models/Istate";
import {ACTIONS} from "../../enums/enums";

const Legend = () => {

    const colors = useSelector((state: Istate )=> state.colors);
    const dispatch  = useDispatch();

    const handleOnSubmit = (colorId: number) : void => {
        dispatch({type: ACTIONS.CHANGE_COLOR, payload: colorId});
    };

    const addColor = () => {
        dispatch({type: ACTIONS.ADD_COLOR, payload: {
                name: 'open',
                color: 'red',
                isSelected: false,
                id: 3
            }});
    };

    return <div className={styles.row}>
        {colors.map((colorItem, i) => { return <ColorItem color={colorItem} key={i} handleOnSubmit={(colorId) => handleOnSubmit(colorId)}/>})}
        <button onClick={addColor}>Add color</button>
    </div>
};

export default Legend;
