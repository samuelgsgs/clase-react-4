import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Login } from '../data/Login';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', email: '' };
    this.login = this.login.bind(this);
  }

  login() {
    var correcto = false;
    Login.map((item) => {
      if (
        item.email === this.emailValor.value &&
        item.password === this.passwordValor.value
      ) {
        this.setState({
          user: item.user,
          password: item.password,
          email: item.email,
        });
        localStorage.setItem('user', item.user);
        localStorage.setItem('password', item.password);
        localStorage.setItem('email', item.email);
        correcto = true;
      }
    });
    if (!correcto) {
      alert('Los datos introducidos no coninciden');
    }
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
    });
  }
  render() {
    if (
      this.state != null &&
      this.state.user != null &&
      this.state.user != ''
    ) {
      return (
        <div className="main-site">
          <h1>Bienvenido {localStorage.getItem('user')}!</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Introduce tu correo"
                  ref={(email) => (this.emailValor = email)}
                />
                <Form.Text className="text-muted">
                  No compartas tu correo con nadie
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Introduce tu contraseña"
                  ref={(password) => (this.passwordValor = password)}
                />
                <Form.Text className="text-muted">
                  No compartas tu contraseña con nadie
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Acceder
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}

export default Home;
