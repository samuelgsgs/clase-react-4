import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaJuegos, DatosTablaJuegos } from '../data/DatosJuegos';

class Juegos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagen: '',
      nombrep: '',
      desarrolladorp: '',
      modop: '',
      plataformasp: '',
    };
  }

  eventoclick(item) {
    this.setState({
      imagen: item.imagen,
      nombrep: item.Nombre,
      desarrolladorp: item.Desarrollador,
      modop: item.Modo,
      plataformasp: item.Plataformas,
    });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Juegos</h1>
        <Container>
          <Row>
            <Col lg={10} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>{TitulosTablaJuegos.id}</th>
                    <th>{TitulosTablaJuegos.field1}</th>
                    <th>{TitulosTablaJuegos.field2}</th>
                    <th>{TitulosTablaJuegos.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaJuegos.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.Nombre}</td>
                        <td>{item.Desarrollador}</td>
                        <td>{item.Modo}</td>
                        <td>{item.Plataformas}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}>
              <Card variant="outlined" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.imagen} />
                <Card.Body>
                  <Card.Title>
                    {this.state.nombrep}
                    <p />
                    {this.state.desarrolladorp}
                  </Card.Title>
                  <Card.Text>
                    {this.state.modop}
                    <p />
                    {this.state.plataformasp}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Juegos;
