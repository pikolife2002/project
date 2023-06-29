import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'

export const AnimalCard = ({data}) => {
    const { title, description, src } = data

    return (
        <Card sx={{ maxWidth: 350, backgroundColor: 'black' }}>
           <CardMedia
               sx={{height: 140}}
               image={src}
               />
            <CardContent>
                <Typography gutterBottom variant="h5" sx={{mb: 2, color: 'white'}}>
                    {title}
                </Typography>
                <Typography variant="body2"  sx={{color: "white"}} >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained'>
                    Share
                </Button>
                <Button variant='contained'>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}