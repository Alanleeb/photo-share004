import React, {Component} from 'react';
import NavBar from './NavBar';
import { HeaderImage } from './Style'
import { 
    Container,
    Header,
    Image,
  } from 'semantic-ui-react';

class PaymentPackage extends Component {

    render() {
        return(
         <Container>
        <HeaderImage>
        </HeaderImage>
        <NavBar />
            Here are the Payment Models
        </Container>
        )
    }
}

export default PaymentPackage