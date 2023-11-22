import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";

function Section() {
  return (
    <Container>
        <News>
          <img src="img/background2.jpg" />
          <NewsInfo>
            <Date>
              Natale campell | 28 August 2022
            </Date>
            <Title>
              <Link to='./detail'>We help Group the internet</Link>
            </Title>
            <Desc>
              <p>an electronic communications network that connects computer networks and organizational computer facilities around the world.
              an electronic communications network that connects computer networks and organizational computer facilities around the world.
              an electronic communications network that connects computer networks and organizational computer facilities around the world.
              </p>
            </Desc>
          </NewsInfo>
        </News>
        <News>
          <img src="img/background6.jpg" />
          <NewsInfo>
            <Date>
              Natale campell | 28 August 2022
            </Date>
            <Title>
              <Link to='./detail'>We help Group the internet</Link>
            </Title>
            <Desc>
              <p>an electronic communications network that connects computer networks and organizational computer facilities around the world.
              an electronic communications network that connects computer networks and organizational computer facilities around the world.
              an electronic communications network that connects computer networks and organizational computer facilities around the world.
              </p>
            </Desc>
          </NewsInfo>
        </News>
        <News>
          <img src="img/background4.jpg" />
          <NewsInfo>
            <Date>
              Natale campell | 28 August 2022
            </Date>
            <Title>
              <Link to='./detail'>We help Group the internet</Link>
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
   @media(min-width: 768px){
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    margin-top: 10rem;
    padding: 0 2rem;
  }
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`