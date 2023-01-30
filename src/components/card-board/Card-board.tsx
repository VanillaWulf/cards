import React from 'react';
import styles from './card-board.module.css';
import {useDispatch, useSelector} from "react-redux";
import Card from "../card/Card";
import {Istate} from "../../models/Istate";
import {Icard} from "../../models/Icard";
import {ACTIONS} from "../../enums/enums";

const CardBoard = () => {
    const dispatch  = useDispatch();
    const cards = useSelector((state:Istate) => state.board);

    const handleOnSubmit = (cardId: number) : void => {
        console.log('handle click', cardId);
        dispatch({type: ACTIONS.CHANGE_CARD_COLOR, payload: cardId});
    };

    return <div className={styles.board}>
        {cards.map((cardItem: Icard) => { return <Card key={cardItem.id} card={cardItem} handleOnSubmit={(cardId) => handleOnSubmit(cardId)} />})}
    </div>
};

export default CardBoard;
