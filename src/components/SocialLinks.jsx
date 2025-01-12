import React from 'react'
import data from '../data'
function SocialLinks() {
  return (
    <div>
      {data.links.map((item) => (
        <a key={item.name} href={item.url} target='_blank' rel='noreferrer'>
          {item.name} |{' '}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
