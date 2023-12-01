import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import './Blog.css'

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

function Blog() {

    //fetching

    const [blogList, setBlogList] = useState([])

    const getBlog = () => {
        fetch("https://new-blo.prismic.io/api/v2/documents/search?ref=ZWo6ShIAAB4AOYlP#format=json")
        .then(res => res.json())
        .then(json => setBlogList(json.results))
    }

    useEffect(() => {
        getBlog()
    }, [])

    console.log(blogList)

    //pagination

  return (
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
      <React.Fragment>
        <Container>
        {blogList.map((blog, index) => (
        <News>
            <img src={blog.url} />
            <NewsInfo>
              <Date>
                <span>{blog.Date}</span> 
              </Date>
              <Title>
                <Link to='./detail'>{blog.uid}</Link>
              </Title>
              <Desc>
                <p>{blog.Description}</p>
              </Desc>
            </NewsInfo>
          </News>))}
          
        </Container>
    </React.Fragment>
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