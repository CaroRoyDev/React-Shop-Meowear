import React from 'react';
import './homepage.styles.scss';

import Menu from '../../components/menu/menu.component';

const HomePage = ({history}) => {
   return (
    
    <div className='homepage'>
       <Menu/>
    </div>
    )
   }

export default HomePage;