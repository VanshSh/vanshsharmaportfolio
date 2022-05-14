import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions, Link } from '@mui/material'
// maxWidth: 345maxWidth: 345
export default function BlogCard(data) {
    const { coverImage, title, brief, slug } = data.data || {}
    return (
        <Card sx={{ width: '100%', margin: '2rem' }}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='140'
                    image={coverImage}
                    alt={title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{ color: 'var(--clr-primary)' }}
                    >
                        {title}
                    </Typography>
                    <Typography variant='body2'>{brief}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a
                    href={`https://vanshsharma.hashnode.dev/${slug}`}
                    target='_blank'
                 className='blog-links'
                 >
                    Read more..
                </a>
            </CardActions>
        </Card>
    )
}
