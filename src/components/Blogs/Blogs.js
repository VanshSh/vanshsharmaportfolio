import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import axios from 'axios'
import { useQuery } from 'react-query'
import BlogCard from './BlogCard'
import './Blogs.css'

const endpoint = 'https://api.hashnode.com/'
const ARTICLE_QUERY = `
  {
    user(username: "vanshsharma") {
      publication {
        posts(page: 0) {
            
        coverImage 
        _id
          title
          brief
          slug
        }
      }
    }
  }

`
const Blogs = () => {
    const { data, isLoading, error } = useQuery('launches', async () => {
        const response = await axios({
            url: endpoint,
            method: 'POST',
            data: {
                query: ARTICLE_QUERY,
            },
        })
        return response.data.data
    })
    if (error) return <div>{error.message}</div>

    const blogs = data?.user?.publication?.posts

    const blogsData = blogs?.map((item) => {
        if (isLoading) return 'Loading...'
        return <BlogCard key={item._id} data={item} />
    })

    const responsive = {
        0: {
            items: 1,
        },

        750: {
            items: 2,
        },

        1000: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    }

    return (
        <section id='blogs' className='section'>
            <h2 className='section__title'>Latest Blogs</h2>

            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={blogsData}
                autoPlay
            />
        </section>
    )
}

export default Blogs
