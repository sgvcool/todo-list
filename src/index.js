import React from 'react';
import ReactDOM from 'react-dom';

const el = (
    <div>
        <h1>My todo List</h1>
        <input placeholder="search" />
        <ul>
            <li>Learn React</li>
            <li>Build awesome App</li>
        </ul>
    </div>
);

console.log(el);


ReactDOM.render(el, 
    document.getElementById('root'));