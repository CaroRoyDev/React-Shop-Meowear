import React from 'react';
import "./menu-item.styles.scss";

const MenuItem = ({title, imgUrl, size}) => (
    <div className={"menu-item " + (size ? size : "")}
        
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

export default MenuItem;