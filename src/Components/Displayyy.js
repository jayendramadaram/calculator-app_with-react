import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Display.css';

export class Displayyy extends Component {
    static propTypes = {
        value: PropTypes.string,
      }


    render() {
        return (
            <div className='component-display'>
                <div>{ this.props.value} </div>
            </div>
        )
    }
}

export default Displayyy
