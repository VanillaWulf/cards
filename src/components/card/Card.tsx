import React, { MouseEventHandler } from 'react';
import styles from './card.module.css';
import {Icard} from "../../models/Icard";

interface Iprops {
     card: Icard;
     handleOnSubmit: (num: number) => void;
}

const Card = (props: Iprops) => {
     return <button className={styles.card} onClick={() => props.handleOnSubmit(props.card.id)} style={{background: props.card.color.color}}>
      {props.card && props.card.name}
     </button>;
};

export default Card;
