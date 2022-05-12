import React from 'react'
import AliceCarousel from 'react-alice-carousel'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

const DUMMY_DATA = [
    {
        id: 1,
        title: 'CryptoX',
    },
    {
        id: 2,
        title: 'Crypto',
    },
    {
        id: 3,
        title: 'Crypt',
    },
    {
        id: 4,
        title: 'Cryp',
    },
    {
        id: 4,
        title: 'Cryp',
    },
    {
        id: 4,
        title: 'Cryp',
    },
    {
        id: 4,
        title: 'Cryp',
    },
    {
        id: 4,
        title: 'Cryp',
    },
]

const Blogs = () => {
    const item = DUMMY_DATA.map((item) => {
        return (
            <>
                <p>{item.title}</p>
            </>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 2,
        },

        630: {
            items: 3,
        },

        820: {
            items: 4,
        },
    }

    return (
        <div>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={item}
                autoPlay
            />
        </div>
    )
}

export default Blogs
