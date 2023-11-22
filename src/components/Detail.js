import React from 'react'
import styled from "styled-components"

function Detail() {
  return (
    <Container>
        <DetailInfo>
            <h1>The Internet paves the way for people and communities to thrive.</h1>
            <Info>
                <img src="img/person.jpg" />
                <span>Natale campell</span> 
            </Info>
            
        </DetailInfo>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(50vh - 70px);
    width: 100vw;
    height: 50vh;
    background-image: url('img/background2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: norepeat;
    display: flex;
`
const DetailInfo =styled.div`
   text-align: center;
   padding: 0 4rem;

    h1 {
        padding-top: 22rem;
        font-weight: normal;
        text-align: left;
    }

    img {
        width: 5em;
        height: 5em;
        object-fit: cover;
        border-radius: 50%;
        display: flex;
    }
`
const Info = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    color: gray;
`