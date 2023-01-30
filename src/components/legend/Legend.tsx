import React, {useEffect, useState} from 'react';
import styles from './legend.module.css';

import {useDispatch, useSelector} from "react-redux";
import ColorItem from "../color-item/Color-item";
import {Istate} from "../../models/Istate";
import {ACTIONS} from "../../enums/enums";
import ColorPopup from "../color-popup/color-popup";

const Legend = () => {

    const colors = useSelector((state: Istate )=> state.colors);
    const dispatch  = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOnSubmit = (colorId: number) : void => {
        dispatch({type: ACTIONS.CHANGE_COLOR, payload: colorId});
    };

    const handleOnDelete = (colorId: number) : void => {
        dispatch({type: ACTIONS.DELETE_COLOR, payload: colorId});
    };

    const handleClose = () :void => {
        setIsModalOpen(!isModalOpen);
    };

    const addColor = (color: string, desc: string): void => {
        dispatch({type: ACTIONS.ADD_COLOR, payload: {
                name: desc,
                color: color,
                isSelected: false,
                id: colors[colors.length - 1] &&  colors[colors.length - 1] ?colors[colors.length - 1].id + 1 : undefined
            }});
        handleClose();
    };

    const openPopup = (): void => {
        setIsModalOpen(true);
    };

    return <div className={styles.row}>
        {colors.map((colorItem, i) => { return <ColorItem color={colorItem} key={i} handleOnSubmit={(colorId) => handleOnSubmit(colorId)}
                                                          handleOnDelete={(colorId) => handleOnDelete(colorId)}/>})}
        <button onClick={openPopup}>Add color</button>
        <ColorPopup isOpen={isModalOpen} handleClose={handleClose} handleOnSubmit={(color, desc) => addColor(color, desc)}/>
    </div>
};

export default Legend;
