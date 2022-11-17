import '../../styles/task.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function RandomNumber() {
    return Math.floor(Math.random() * 255);
}


const Square = ({ square }) => {

    const [squa, setsquare] = useState(square)

    function onMouseIn() {
        const R = RandomNumber();
        const G = RandomNumber();
        const B = RandomNumber();

        setsquare(
            (squa) => {
                let color = `rgb(${R},${G},${B})`
                return {
                    ...squa,
                    color
                }
            }
        )
    };


    function onMouseOut() {
        setsquare(
            square
        )
    };

    function onTwiceClick() {
        setsquare(
            square
        )
    };




    return (
        <div
            onMouseEnter= {onMouseIn}
            onMouseLeave= {onMouseOut}
            onDoubleClick={onTwiceClick}
            style={{ width: `${squa.width}px`, height: `${squa.height}px`, backgroundColor: `${squa.color}` }}>
        </div>
    )
}

export default Square

Square.propTypes ={
    square: PropTypes.object.isRequired
}


