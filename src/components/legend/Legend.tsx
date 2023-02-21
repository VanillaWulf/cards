import React, {useState} from 'react';
import styles from './legend.module.css';
import {Icolor} from "../../models/Icolor";

import {useDispatch, useSelector} from "react-redux";
import ColorItem from "../color-item/Color-item";
import {Istate} from "../../models/Istate";
import ColorPopup from "../color-popup/color-popup";
import {changeColorAction, deleteColorAction, addColorAction} from "../../store/board-reducer";

const Legend = () => {

    const colors = useSelector((state: Istate )=> state.boardPage.colors);
    const dispatch  = useDispatch();
    const [modalOptions, setModalOptions] = useState({isOpen: false, isEdit: false, color: undefined});


    const handleOnSubmit = (colorId: number) : void => {
        dispatch(changeColorAction(colorId));
    };

    const handleOnDelete = (colorId: number) : void => {
        dispatch(deleteColorAction(colorId));
    };

    const handleClose = () :void => {
        setModalOptions({isOpen: false, isEdit: false, color: undefined});
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

    const openPopup = (isEdit = false, color?: Icolor): void => {
        setModalOptions({isOpen: true, isEdit: isEdit, color: color? undefined : color });
    };

    return <div className={styles.row}>
        {colors.map((colorItem, i) => { return <ColorItem color={colorItem} key={i} handleOnSubmit={(colorId) => handleOnSubmit(colorId)}
                                                          handleOnDelete={(colorId) => handleOnDelete(colorId)}
                                                          handleOpenPopup={(color) => openPopup(true, color)}/>})}
        <button onClick={() => openPopup()}>Add color</button>
        <ColorPopup
            isOpen={modalOptions.isOpen}
            handleClose={handleClose}
            isEdit={modalOptions.isEdit}
            handleOnSubmit={(color, desc) => addColor(color, desc)}
            color={modalOptions.color}
        />
    </div>
};

export default Legend;
