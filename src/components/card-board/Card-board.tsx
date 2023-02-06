import React from 'react';
import styles from './card-board.module.css';
import {useDispatch, useSelector} from "react-redux";
import Card from "../card/Card";
import {IState} from "../../models/IState";
import {Icard} from "../../models/Icard";
import {changeCardColorAction} from "../../store/reducer";

const CardBoard = () => {
    const dispatch  = useDispatch();
    const cards = useSelector((state:IState) => state.board);

    const handleOnSubmit = (cardId: number) : void => {
        console.log('handle click', cardId);
        dispatch(changeCardColorAction(cardId));
    };

    return <div className={styles.board}>
        {cards.map((cardItem: Icard) => { return <Card key={cardItem.id} card={cardItem} handleOnSubmit={(cardId) => handleOnSubmit(cardId)} />})}
    </div>
};

export default CardBoard;
