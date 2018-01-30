import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css'
import './App.css';
import TextLimitLoader from './TextLimitLoader';

ReactDOM.render(
    <TextLimitLoader loaderColor="orange" limit="27" />,
    document.querySelector('#root'));
