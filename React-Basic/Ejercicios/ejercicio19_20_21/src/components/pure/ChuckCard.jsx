import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper } from '@mui/material';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import getRandomJoke from '../../services/ChuckService';


const ChuckCard = ({negative, positive}) => {
   
    const [joke, setJoke] = useState({});


    useEffect(() => {
        getRandom()
    }, [])


    function getRandom() {
        getRandomJoke()
            .then((resp) => {
                setJoke(resp.data)
            })
            .catch((err) => alert('Something happens! Oops!', err))
    }


    return (
        <Card variant="outlined" sx={{
            maxWidth: 545,
            maxHeight: 300,
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant='body1' color="text.secondary" fontFamily={'monospace'}>
                        <FormatQuoteRoundedIcon fontSize='large' color='primary' />
                        {joke.value}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ width: 545, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Button variant="contained" size="medium" color='primary' onClick={() => getRandom()}>
                    New Joke
                </Button>
            </CardActions>
            <Paper sx={{ width: 545, display: 'flex', justifyContent: 'end', alignItems: 'center', gap: '1rem' }}>
                <Button variant="contained" size="small" color='error' onClick={() => negative(joke.id)} endIcon={<ThumbDownOffAltIcon />} />
                <Button variant="contained" size="small" color='primary' onClick={() =>positive(joke.id)} endIcon={<ThumbUpOffAltIcon />} />
            </Paper>
        </Card>
    );
}

export default ChuckCard;
