import React from 'react';
import { Card, Container, Table, Row, Col, tableData } from 'react-bootstrap';
//import '../table_component.css';
//import { DatosTablaJuegos } from '../data/DatosJuegos';

class Criptomonedas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
      image: '',
      name: '',
      symbol: '',
      current_price: '',
      high_24h: '',
    };
  }

  eventoclick(item) {
    this.setState({
      image: item.image,
      name: item.name,
      symbol: item.symbol,
      current_price: item.current_price,
      high_24h: item.high_24h,
    });
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.slice(0, 10),
      selectedItem: responseData[0],
    });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Criptomonedas</h1>
        <Container>
          <Row>
            <Col lg={10} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Símbolo</th>
                    <th>Precio Actual</th>
                    <th>Mejor Precio (24 Horas)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.name}</td>
                        <td>{item.symbol}</td>
                        <td>{item.current_price}</td>
                        <td>{item.high_24h}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}>
              {' '}
              <Card variant="outlined" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.image} />
                <Card.Body>
                  <Card.Title>
                    {'Nombre: ' + this.state.name}
                    <p />
                    {'Símbolo: ' + this.state.symbol}
                  </Card.Title>
                  <Card.Text>
                    {'Precio Actual: ' + this.state.current_price + ' $'}
                    <p />
                    {'Máximo ultimas 24 Horas: ' + this.state.high_24h + ' $'}
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

export default Criptomonedas;
