import React from 'react';
import { withRouter } from 'react-router-dom';

import "./menu-item.styles.scss";

const MenuItem = ({title, imgUrl, size, linkPath, history, match}) => (
    <div 
        className={"menu-item " + (size ? size : "")}
        onClick={() => history.push(`${match.url}${linkPath}`)}
    >
    <div 
        className="background-image" 
        style={{backgroundImage: `url(${imgUrl})`}}
    />
        <div className='content'>
            <h1>{title}</h1>
            <span>Shop now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);