import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <ItemText>
            <h1>We believe in a world where the Internet is synonymous with opportunity. We care about its future.</h1>
            <a href="#">Learn more about us</a>
        </ItemText>
        <Section />
    </Container>
  )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 70px);
    width: 100vw;
    height: 100vh;
    background-image: url('img/background1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: norepeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ItemText = styled.div`
    color: white;
    padding: 10rem 3rem;
    font-size: 1.1rem;
    text-align: left;
    
    h1 {
        font-weight: normal;
        margin-bottom: 4rem;
    }

    a {
        text-decoration: none;
        color: black;
        background: white;
        font-size: 1rem;
        padding: .8rem 1.4rem;
        border-radius: 5em;
        font-weight: normal;
        
        &:hover {
            background: none;
            border: 2px solid white;
            color: white;
        }
    }
    @media(min-width: 768px){
        padding: 14rem;
    }
`
