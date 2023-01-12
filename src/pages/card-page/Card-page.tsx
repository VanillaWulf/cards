import React from 'react';
import CardBoard from "../../components/card-board/Card-board";
import Legend from "../../components/legend/Legend";
import styles from './card-page.module.css';

const CardPage = () => {
    return <div className={styles.wrp}>
       <CardBoard />
        <Legend/>
    </div>
};

export default CardPage;
