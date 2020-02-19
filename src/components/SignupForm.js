import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignupForm extends Component {
    state = {
        username: '',
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
            <form onSubmit={event => this.props.handle_signup(event, this.state)}>
            <h4>Sign Up</h4>
            <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            />
            <input
            type="password"
            name="password"
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
    handle_signup: PropTypes.func.isRequired
}