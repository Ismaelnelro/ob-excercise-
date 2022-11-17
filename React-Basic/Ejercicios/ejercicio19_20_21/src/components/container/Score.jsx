import React,{useEffect, useState}from 'react';
import Table from 'react-bootstrap/Table';


const Score = ( {props} ) => {

    const [vote, setvote] = useState(props)


    useEffect(() => {
        setvote(props)
    })


    return (
        <Table striped bordered hover variant="dark" className='m-2' style={{ width: '220px' }}>
            <thead>
                <tr>
                    <th>Total dislike</th>
                    <th>Total likes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{vote.totalDislike}</td>
                    <td>{vote.totalLike}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Score;
