/**
 * Created by zx on 2017/2/21.
 */
// var greet = require('./greeter.js');
// document.getElementById('root').appendChild(greet());
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));