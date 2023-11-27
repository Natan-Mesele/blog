import React, { useState } from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom";
import './Blog.css'

const blogPerPage = 8;
const data = [
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
    //search
    <div className='App'>
      <SearchContainer>
      <h1>Latest Posts</h1>
      <Searchs>
          <SearchInput type='text' placeholder="Search by keyword"/>
          <select>
            {
              dep.map(state =>{
                return<option>{state}</option>
              })
            }
          </select>
          <select>
            {
              states.map(state =>{
                return<option>{state}</option>
              })
            }
          </select>
        </Searchs>
        <button>Reset</button>
      </SearchContainer>
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
      <div className='number-btn'>
        <button className='btn'
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
        <button className='btn'
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
const SearchContainer = styled.div`
  
  h1 {
    font-weight: normal;
    color: gray;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 5rem;
    background: #eeca4a;
    color: white;
    padding: .5rem 1.4rem;
    font-size: .8rem;
    float: center;
   }
`
const Searchs = styled.div`
@media(max-width: 768px){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media(min-width: 768px){
  display: flex;
  gap: 25px;
  justify-content: center;
}

   select {
    display: block;
    margin-bottom: 1rem;
    padding: .5rem;
    border-radius: .3rem;
    outline: none;
    width: 300px;
    text-align: left;
   }

   
`
const SearchInput = styled.input`
  display: block;
  margin-bottom: 1rem;
  padding: .5rem .5rem;
  border: 1px solid gray;
  border-radius: .3rem;
  outline: none;
  width: 284px;
  text-align: left;
`