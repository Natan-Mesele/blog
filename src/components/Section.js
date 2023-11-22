import React from 'react'
import styled from "styled-components"

function Section() {
  return (
    <Container>
        <News>
          <img src="img/background1.jpg" />
          <NewsInfo>
            <Date>
              Natale campell | 28 August 2022
            </Date>
            <Title>
              <a href="#">We help Group the internet</a>
            </Title>
            <Desc>
              <p>an electronic communications network that connects computer networks and organizational computer facilities around the world.
              an electronic communications network that connects computer networks and organizational computer facilities around the world.
              an electronic communications network that connects computer networks and organizational computer facilities around the world.
              </p>
            </Desc>
          </NewsInfo>
        </News>
    </Container>
  )
}

export default Section

const Container = styled.div`

`
const Form = styled.div`
    display: flex;
    flex-direction: column;

`

const News = styled.div`
  margin: 1rem;
  text-align: left;
  background: #EEEDED;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const NewsInfo = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`
const Date = styled.div`
  font-size: 0.7rem;
  color: gray;
  margin-bottom: 0.8rem;
`
const Title = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-size: 1.4rem;
  }

`
const Desc = styled.div`
  p {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
`