import React, { Component } from 'react';

// import { Container } from './styles';
import icon from '../assets/facebook-1.svg'

export default class Header extends Component {
  render() {
    return (
        <>
            <header>
                <img className="icon" src={ icon }  />
            </header>
        </>
    );
  }
}
