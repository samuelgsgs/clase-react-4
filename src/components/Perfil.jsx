import React from 'react';
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text>Mi Correo:</InputGroup.Text>
              <FormControl placeholder={localStorage.getItem('email')} />
            </InputGroup>
            <Button onClick={this.salir}>Salir</Button>
          </Col>
        </Row>
      </Container>
    );
  }

  salir() {
    localStorage.clear();
  }
}
export default Perfil;
