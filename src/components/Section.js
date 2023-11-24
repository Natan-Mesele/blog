import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";

function Section() {

  const dep = ['Category', 'Growing Internet', 'Community Network', 'Internet exchange point', 'Measuring the internet']
  const cat = {
    'Category': ['f', 'a', 'd'],
    'Growing Internet': ['s', 'f'],
    'Community Network': ['s', 'f'],
    'Internet exchange point': ['s', 'f'],
    'Measuring the internet': ['s', 'f'],
  }

  const states = ['Region', 'Africa', 'Asia Pacific', 'Eroupe', 'North America']
  const region = {
    'Region': ['f', 'a', 'd'],
    'Africa': ['s', 'f'],
    'Asia Pacific': ['s', 'f'],
    'Eroupe': ['s', 'f'],
    'North America': ['s', 'f'],
  }

  const blogs=[
    {
      "id": 1,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/background2.jpg'
    },
    {
      "id": 2,
      'date': 'Mesele Mengistu | 2 may 2022',
      'title': 'War in Gaz',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/background3.jpg'
    },
    {
      "id": 3,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/background4.jpg'
    },
    {
      "id": 1,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/background2.jpg'
    },
    {
      "id": 2,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/background3.jpg'
    },
    {
      "id": 3,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/background4.jpg'
    },

  ]

  return (
        <Container >
          {blogs.map((blog) => (
          <News>
            <img src={blog.coverImg} />
            <NewsInfo>
              <Date>
                <span>{blog.date}</span> 
              </Date>
              <Title>
                <Link to='./detail'>{blog.title}</Link>
              </Title>
              <Desc>
                <p>{blog.desc}</p>
              </Desc>
            </NewsInfo>
          </News>))}
        </Container>
  )
}

export default Section

const Container = styled.div`
    margin: 1rem;

   @media(min-width: 768px){
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    margin-top: 10rem;
    padding: 0 4rem;
  }
`
const News = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  background: #EEEDED;
  padding: 1rem;

  img {
    width: 100%;
    height: 15em;
    object-fit: cover;
  }
`
const NewsInfo = styled.div`
  margin-top: 1rem;
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