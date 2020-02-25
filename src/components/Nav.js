import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
    const logged_out_nav = (
        <nav>
            <ul>
                <li className="login-btn" onClick={() => props.displayForm('login')}>login</li>
                <li className="signup-btn" onClick={() => props.displayForm('signup')}>signup</li>
                <li className="nav-btn"><i class="fa fa-bookmark"></i></li>
                <li className="nav-btn"><i class="fa fa-glasses"></i></li>
                <li className="logo"><i class="fa fa-venus"></i></li>
            </ul>
        </nav>
    )

    const logged_in_nav = (
        <nav>
            <ul>
                <li className="logout-btn" onClick={props.handleLogout}>logout</li>
                <li className="nav-btn"><i class="fa fa-bookmark"></i></li>
                <li className="nav-btn"><i class="fa fa-glasses"></i></li>
                <li className="logo"><i class="fa fa-venus"></i></li>
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