import React from 'react';
import {NavLink} from "react-router-dom";

class Link extends React.Component {
    render() {
        return <NavLink exact to={this.props.url} className={this.props.className}  > {this.props.text} </NavLink>
    }
}

export default Link;