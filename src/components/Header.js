import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <a>
          <img src="img/logo.svg"/>
        </a>
        <Menu>
          <a href="#">Shop</a>
          <a href="#">Shop</a>
          <a href="#">Shop</a>
          <a href="#">Shop</a>
        </Menu>

        <RightMenu>
            <SearchWrapper>
                <Search />
            </SearchWrapper>
          <button>Sign In</button>
        </RightMenu>
        <MenuWrapper>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </MenuWrapper>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)}/>
          </CloseWrapper>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadaster</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #20262E;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-left: 110px;

  @media (max-width: 768px){
    display: none;
  }

  a {
    text-decoration: none;
    padding: 0 20px;
    font-size:1rem;
    color: white;
  }
`
const RightMenu = styled.div`
  display: flex;
  gap: 1.5rem;

  button {
    text-decoration: none;
    padding-right: 20px;
    font-size:.8rem;
    padding: .6rem 1.2rem;
    background: #FFA33C;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
  }

  @media (max-width: 768px){
    display: none;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const MenuWrapper = styled.div`
    @media (min-width: 768px){
        display: none;
    }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1.5em 1.5em;
  transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform .6s;
  @media (min-width: 920px) {
    width: 30%;
  }

  li a {
    text-decoration: none;
    font-weight: bold;
    display: block;
    padding: 1em 0;
    border-bottom: 1px solid gray;
  }

`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Search = styled(SearchIcon)`
  color: white;
`
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`