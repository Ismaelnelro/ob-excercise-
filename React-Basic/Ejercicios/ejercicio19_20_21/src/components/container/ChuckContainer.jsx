import React, { useState, useEffect } from 'react';
import ChuckCard from '../pure/ChuckCard';
import hero from '../../assets/chucknorris.png'
import Score from './Score';


let initialVote = {
    dislikeid: [],
    likeid: [],
    totalDislike: 0,
    totalLike: 0
}

const ChuckContainer = () => {

    const [votes, setvote] = useState(initialVote)
    const [counter, setcounter] = useState(0)

    const positiveVote = (id) => {
        const temp = {...votes}
        temp.totalLike = temp.totalLike + 1;
        setvote(
            {
                ...temp,
            }
        )
    }


    const negativeVote = (id) => {
        const temp = {...votes}
        temp.totalDislike = temp.totalDislike + 1;
        setvote(
            {
                ...temp,
            }
        )
    }

    return (
        <div className='ChuckContainer'>
            <div className='ChuckContainer-image'>
                <img src={hero} alt="Chuck Norris" />
            </div>
            <ChuckCard positive={positiveVote} negative={negativeVote} />
            <Score props={votes}/>
        </div>
    );
}

export default ChuckContainer;
