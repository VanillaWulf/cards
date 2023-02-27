import React, {useEffect, useState} from 'react';
import styles from './legend.module.css';

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
        console.log(modalOptions);
        setModalOptions({isOpen: false, isEdit: false, color: undefined});
    };

    const addColor = (color: string, desc: string) : void => {

        // if(isEdit) {
        //   доделать isEdit
        // } else {
            const newColor = {
                name: !!desc ? desc : '',
                color: !!color ? color : '',
                isSelected: false,
                id: colors[colors.length - 1] && colors[colors.length - 1] ? colors[colors.length - 1].id + 1 : -1
            };


            dispatch(addColorAction(newColor));
            handleClose();
        // }
    };

    const UseOpenPopup = (isEdit = false, color?: any): void => {
        console.log(isEdit);
        setModalOptions({isOpen: true, isEdit: isEdit, color: color });
        // useEffect(() => {
        //     setModalOptions({isOpen: true, isEdit: isEdit, color: color });
        // }, [modalOptions])
    };

    return <div className={styles.row}>
        {colors.map((colorItem, i) => { return <ColorItem color={colorItem} key={i} handleOnSubmit={(colorId) => handleOnSubmit(colorId)}
                                                          handleOnDelete={(colorId) => handleOnDelete(colorId)}
                                                          handleOpenPopup={(color) => UseOpenPopup(true, color)}/>})}
        <button className={'btn btn-primary mt-4'} onClick={() => UseOpenPopup()}>Add color</button>
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
