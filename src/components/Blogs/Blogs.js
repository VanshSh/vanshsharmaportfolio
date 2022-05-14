import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import axios from 'axios'
import { useQuery } from 'react-query'

const endpoint = 'https://api.hashnode.com/'
const ARTICLE_QUERY = `
  {
    user(username: "vanshsharma") {
      publication {
        posts(page: 0) {
          title
          brief
          slug
         coverImage 
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

    const blogsData = data.map((item)=>{
        return item
    }) 


    console.log(blogsData)

    // const blogs = data.publication.posts?.map((post, i) => (
    //     <div key={i}>
    //         title={post.title}
    //         link={`https://<your hashnode domain>/${post.slug}`}
    //         imgUrl={`${post.coverImage}`}
    //     </div>
    // ))

    if (isLoading) return 'Loading...'
    if (error) return <div>{error.message}</div>

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
                // items={blogs}
                autoPlay
            />
        </section>
    )
}

export default Blogs
