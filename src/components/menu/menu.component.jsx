import React from 'react';
import "./menu.styles.scss";

import { connect } from "react-redux";
import { selectMenuItems } from "../../redux/menu/menu.selectors";

import MenuItem from '../menu-item/menu-item.component';

const Menu = ({ menuSections }) => {   
   
    return (
        <div className="menu">
            {
                menuSections.map(({id, ...categoryProps})=>(
                    <MenuItem key={id} {...categoryProps}/>
                ))
            }
        </div>
    )    
}

const mapStateToProps = (state) => ({
    menuSections: selectMenuItems(state)
})
export default connect(mapStateToProps)(Menu);