import React, {useState} from 'react';
import styles from './color-popup.module.css';
import { ChromePicker } from 'react-color';

interface Iprops {
    isOpen: boolean;
    handleClose: () => void;
    handleOnSubmit: (color: string, description: string) => void;
}

const ColorPopup = (props: Iprops) => {
    const [selectedColor, setSelectedColor] = useState('rgb(255,255,255)');
    const [desc, setDesc] = useState('');

    return <div className={props.isOpen ? styles.open : styles.closed}>
        <div className={styles.modalWrp}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Add color</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.handleClose}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Description:</label>
                            <textarea className="form-control" id="message-text" value={desc} onChange={e  => setDesc(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <ChromePicker color={selectedColor} onChange={(color) => {setSelectedColor(color.hex); }}/>
                        </div>
                    </form>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.handleClose}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => props.handleOnSubmit(selectedColor, desc)}>Save and close</button>
                </div>
            </div>
        </div>
        {/*<div className="modal">*/}
        {/*    <div className="modal-dialog">*/}
        {/*        <div className="modal-content">*/}
        {/*            <div className="modal-header">*/}
        {/*                <h5 className="modal-title">Add color</h5>*/}
        {/*                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>*/}
        {/*            </div>*/}
        {/*            <div className="modal-body">*/}
        {/*                <div className="input-group flex-nowrap">*/}
        {/*                    <span className="input-group-text" id="addon-wrapping">Name</span>*/}
        {/*                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"*/}
        {/*                           aria-describedby="addon-wrapping" />*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="modal-footer">*/}
        {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
        {/*                <button type="button" className="btn btn-primary">Save changes</button>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
};

export default ColorPopup;