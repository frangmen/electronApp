import React from "react";
import "./MyButtons.css";

const MyButtons = () => {
    return (
        <div className='buttons-container'>
            <button className='button-primary'>Button 1</button>
            <button className='button-secondary'>Button 2</button>
            <button className='button-tertiary'>Button 3</button>
            <button className='button-quaternary'>Button 4</button>
        </div>
    );
};

export default MyButtons;
