import React, {useEffect, useState} from 'react';
import styles from './legend.module.css';

import {useDispatch, useSelector} from "react-redux";
import ColorItem from "../color-item/Color-item";
import {IState} from "../../models/IState";
import ColorPopup from "../color-popup/color-popup";
import {changeColorAction, deleteColorAction, addColorAction} from "../../store/reducer";

const Legend = () => {

    const colors = useSelector((state: IState )=> state.colors);
    const dispatch  = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOnSubmit = (colorId: number) : void => {
        dispatch(changeColorAction(colorId));
    };

    const handleOnDelete = (colorId: number) : void => {
        dispatch(deleteColorAction(colorId));
    };

    const handleClose = () :void => {
        setIsModalOpen(!isModalOpen);
    };

    const addColor = (color: string, desc: string): void => {

        const newColor  = {
            name: !!desc ? desc : '',
            color: !!color ? color: '',
            isSelected: false,
            id: colors[colors.length - 1] &&  colors[colors.length - 1] ?colors[colors.length - 1].id + 1 : -1
        };

        dispatch(addColorAction(newColor));
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
