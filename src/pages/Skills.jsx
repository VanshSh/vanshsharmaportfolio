import React from 'react'
import styled from 'styled-components'
import SubTitle from '../components/SubTitle'
import Title from '../components/Title'
import data from '../data'

function Skills() {
  return (
    <div>
      <Title name='Skills' />
      <div>
        {data.skills.map(({ icon, key, values }) => {
          return (
            <div key={key}>
              <TitleContainer>
                {icon}
                <SubTitle name={key} style={{ textTransform: 'capitalize' }} />
              </TitleContainer>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  marginBottom: '1rem',
                }}
              >
                {values.map((item) => (
                  <Tag key={item}> {item} </Tag>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  /* font-size:   25px; */
`

const Tag = styled.p`
  border: 1px solid #333;
  padding: 2px 10px;
  margin: 10px 10px;
  border-radius: 5px;
`
