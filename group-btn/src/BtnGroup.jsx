import React, { useState } from 'react'

function BtnGroup() {
    const [btnName, setbtnName] = useState(null);
    let leftBtnClass = 'btn btn-secondary left';

    const handlLeftBtn = () => {
        setbtnName('left');
    }
    const handlRightBtn = () => {
        setbtnName('right');
    }
    return (
        <div class="btn-group" role="group">
            <button
                onClick={handlLeftBtn}
                type="button"
                className={btnName === 'left' ? 'btn btn-secondary left active' : 'btn btn-secondary left'}
            >Left</button>
            <button
                onClick={handlRightBtn}
                type="button"
                className={btnName === 'right' ? 'btn btn-secondary right active' : 'btn btn-secondary right'}
            >Right</button>
        </div>
    )
}

export default BtnGroup