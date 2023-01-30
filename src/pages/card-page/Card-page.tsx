import React from 'react';
import CardBoard from "../../components/card-board/Card-board";
import Legend from "../../components/legend/Legend";
import styles from './card-page.module.css';
import CardActiveColor from "../../components/card-active-color/Card-active-color";

const CardPage = () => {
    return <div>

        <CardActiveColor />
        <div className="container text-center">
            <div className="row">
                    <div className='col-2 p-0'>List</div>
                    <div className='col-7 p-1'>
                        <CardBoard />
                    </div>
                    <div className="col-3 p-0">
                        <Legend/>
                    </div>
            </div>
        </div>
    </div>
};

export default CardPage;
