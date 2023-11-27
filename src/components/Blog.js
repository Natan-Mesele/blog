import React, { useState } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom";

const blogPerPage = 8;
const data =[
    {
      "id": 1,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und2.jpg'
    },
    {
      "id": 2,
      'date': 'Mesele Mengistu | 2 may 2022',
      'title': 'War in Gaz',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und3.jpg'
    },
    {
      "id": 3,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und4.jpg'
    },
    {
      "id": 4,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und2.jpg'
    },
    {
      "id": 5,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und3.jpg'
    },
    {
      "id": 6,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und4.jpg'
    },
    {
      "id": 7,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und4.jpg'
    },
    {
      "id": 8,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und2.jpg'
    },
    {
      "id": 9,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und3.jpg'
    },
    {
      "id": 10,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und4.jpg'
    },
    {
      "id": 7,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und4.jpg'
    },
    {
      "id": 8,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und2.jpg'
    },
    {
      "id": 9,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und3.jpg'
    },
    {
      "id": 7,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und4.jpg'
    },
    {
      "id": 8,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und2.jpg'
    },
    {
      "id": 9,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und3.jpg'
    },
    {
      "id": 7,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und4.jpg'
    },
    {
      "id": 8,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und2.jpg'
    },
    {
      "id": 9,
      'date': 'Natale campell | 28 August 2022',
      'title': 'We help Group the internet',
      'desc': "an electronic communications network that connects computer networks and organizational computer facilities around the world",
      'coverImg': 'img/und3.jpg'
    },

  ]

  const numberOfPage = Math.ceil(data.length / blogPerPage);
  const pageIndex = Array.from({length : numberOfPage}, (_, idx) => idx+1);

function Blog() {

  const [currentPage, setCurrentPage] = useState(0);
  const columns = data.slice(
  currentPage * blogPerPage,
  (currentPage + 1) * blogPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='App'>
        <Container >
          {columns.map((column) => (
          <News>
            <img src={column.coverImg} />
            <NewsInfo>
              <Date>
                <span>{column.date}</span> 
              </Date>
              <Title>
                <Link to='./detail'>{column.title}</Link>
              </Title>
              <Desc>
                <p>{column.desc}</p>
              </Desc>
            </NewsInfo>
          </News>))}
        </Container>
      <div>
        <button 
        disabled={currentPage < 1 } onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>
        {
          pageIndex.slice(
            Math.max(0, currentPage - 2), 
            Math.min(numberOfPage, currentPage + 3)
          )
        .map((page) => (
          <button 
          key={page} 
          onClick={() => handlePageChange(page - 1)}
          className={page === currentPage + 1 ? "active" : "" }
          >
            {page}
            </button>
        ))}
        <button 
        disabled={currentPage > numberOfPage}
          onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>
      </div>
    </div>
  )
}

export default Blog

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