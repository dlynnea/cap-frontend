import React, {Component} from 'react';
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    // const token = localStorage.getItem('token')
    if (this.state.logged_in) {
      fetch('http://localhost:3000/users', {
        headers: {
          'Authorization': `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({ username: json.username });
      });
    }
  }

  handleLogin = (event, data) => {
    console.log(data)
    event.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((result) => {
      localStorage.setItem('token', result.token);
      console.log("json", result)
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: result.username
      })
    })
  }

  handleSignup = (event, data) => {

    event.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: json.username
      })
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' })
  }

  displayForm = form => {
    this.setState({displayed_form: form})
  }


  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handleLogin={this.handleLogin} />
        break;
      case 'signup':
        form = <SignupForm handleSignup={this.handleSignup} />
        break;
      default:
        form = null;
    }

    return (
      <div className="App">
        <Nav 
        logged_in={this.state.logged_in}
        displayForm={this.displayForm}
        handleLogout={this.handleLogout}
        />
        <h3>
          {this.state.logged_in
            ? `Hi, ${this.state.username}`
            : 'Log in'
          }
        </h3>
          {form}
      </div>
    );
  }
}

export default App;
