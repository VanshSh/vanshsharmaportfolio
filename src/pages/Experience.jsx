import React from 'react'
import { BsBuildingFill } from 'react-icons/bs'
import { RiAccountBox2Line } from 'react-icons/ri'
import styled from 'styled-components'
import Title from '../components/Title'

import {
  CHIP_BORDER_COLOR,
  CHIP_TEXT_COLOR,
  COMPANY_NAME_COLOR,
  CONTAINER_BORDER_COLOR,
} from '../constants'
import data from '../data'

function Experience() {
  return (
    <Wrapper>
      <Title name='Experience' />
      <div>
        {data.experience.map((item) => (
          <Container key={item.company}>
            <Header>
              <div
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <BsBuildingFill />
                <h3>{item.company}</h3>
              </div>

              <Tag>
                {item.startdate} - {item.enddate}
              </Tag>
            </Header>
            <span
              style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '10px',
                marginTop: '10px',
                alignItems: 'center',
              }}
            >
              <h5
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  margin: '0 0 0 22px',
                  color: `${COMPANY_NAME_COLOR}`,
                }}
              >
                <RiAccountBox2Line />

                {item.post}
              </h5>
            </span>
            <p>{item.summary}</p>
            <ul>
              {item.points?.map((point) => (
                <li style={{ margin: '9px 0' }} key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </Container>
        ))}
      </div>
    </Wrapper>
  )
}

export default Experience
const Tag = styled.span`
  font-size: 12px;
  border: 1px solid ${CHIP_BORDER_COLOR};
  padding: 2px 7px;
  margin-right: 10px;
  border-radius: 5px;
  color: ${CHIP_TEXT_COLOR};
`

const Container = styled.div`
  border: 1px solid ${CONTAINER_BORDER_COLOR};
  margin: 15px 0;
  padding: 10px;
  border-radius: 5px;
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: flex;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Wrapper = styled.div`
  margin-bottom: 2rem;
`
