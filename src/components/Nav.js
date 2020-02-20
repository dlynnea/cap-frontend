import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
    const logged_out_nav = (
        <nav>
            <ul>
                <li onClick={() => props.displayForm('login')}>login</li>
                <li onClick={() => props.displayForm('signup')}>signup</li>
            </ul>
        </nav>
    )

    const logged_in_nav = (
        <nav>
            <ul>
                <li onClick={props.handleLogout}>logout</li>
            </ul>
        </nav>
    )

    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>
}

export default Nav;

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    displayForm: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
}