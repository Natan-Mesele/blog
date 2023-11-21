import React from 'react'
import styled from "styled-components"

function Section() {
  return (
    <Container>
        <Input>
            <h1>Last Post</h1>
        </Input>
        
    </Container>
  )
}

export default Section

const Container = styled.div`

`
const Input = styled.div`

`
const Form = styled.div`
    display: flex;
    flex-direction: column;

`
const FormOne =styled.input`
    margin-bottom: 2rem;
    
`
const FormTwo = styled.input`

`