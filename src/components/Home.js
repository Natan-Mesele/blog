import React from 'react'
import styled from "styled-components"

function Home() {
  return (
    <Container>
        
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