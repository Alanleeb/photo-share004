import React, { Component } from 'react';
import { 
  Container,
  Header,
  Image,
} from 'semantic-ui-react';
import styled from 'styled-components'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import {HeaderImage} from './Style'

class Home extends Component {
  render() {
    return (
<Container>
      <HeaderImage>
      </HeaderImage>
      <NavBar color='white'/>
  </Container>
    );
  }
}
const HeadContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
`
const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  font-family: Courier, monospace;
`
const NavContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex: space-between;
color: inverted;
`



export default Home;
