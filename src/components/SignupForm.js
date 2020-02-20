import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        })
    }

    render() {
        return(
            <form onSubmit={event => this.props.handleSignup(event, this.state)}>
            <h4>Sign Up</h4>
            <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
            />
            <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
            <input type="submit" />
        </form>
        )
    }
}

export default SignupForm;

SignupForm.propTypes = {
    handleSignup: PropTypes.func.isRequired
}