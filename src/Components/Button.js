import React, { Component } from 'react'
import propTypes from "prop-types";
import './btn.css'

export class Button extends Component {
    static propTypes = {
        name: propTypes.string,
        orange: propTypes.bool,
        wide: propTypes.bool,
        clickHandler: propTypes.func,
    }

    handleClick = () => {
        this.props.clickHandler(this.props.name);        
    }

    render() {
        const className = ["component-button",
        this.props.orange ? "orange" : "",
        this.props.wide ? "wide" : "",]



        return (
            <div className = {className.join(' ').trim()}>
                <button onClick= {this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default Button
