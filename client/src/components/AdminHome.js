import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  Container,
  Header,
  Image,
  Form, 
  Grid, 
  Divider, 
  Button 
} from 'semantic-ui-react';
import styled from 'styled-components'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import {HeaderImage} from './Style'
import axios from 'axios';


const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class AdminHome extends Component {
    state = { selectedFile: null, editing: false, formValues: { name: '', email: '' } }

    fileSelectedHandler = (e) => {
      this.setState({
        selectedFile: e.target.files[0]
    })
  }

    fileUploadHandler = () => {
      axios.post()
    }

  render() {
    return (
<Container>
      <HeaderImage>
      </HeaderImage>
      <NavBar />
      <Container>
        This is the Admin Homepage
        <input type="file" onChange={this.fileSelectedHandler}/>
        <Button onClick={this.fileUploadHandler}>Upload</Button>
      </Container>
  </Container>
    );
  }
}


// <div class="sixteen wide mobile eight wide tablet four wide computer column">
//      <div class="ui card">
//        <div class="video">
//          <iframe src="<%= movie.trailer %>?set=3" ></iframe>
//        </div>
//        <div class="content">
//          <%= link_to "#{movie.title} ", movie, class: "header" %>
//        </div>
//        <div class="extra content">
//          <div class="ui two buttons">
//            <div class="basic green button">
//              <%= link_to 'Edit', edit_movie_path(movie) %>
//            </div>
//            <div class="basic red button">
//              <%= link_to 'Destroy', movie_path(movie), method: :delete, data: { confirm: "Promise you're an admin?" } %>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  <% end %>
// </div>




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



export default AdminHome;


 

  