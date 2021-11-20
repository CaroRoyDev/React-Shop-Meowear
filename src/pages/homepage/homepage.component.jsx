import React from 'react';
import { HomePageWrapper } from './homepage.styles';

import Menu from '../../components/menu/menu.component';

const HomePage = ({history}) => {
   return (
    
    <HomePageWrapper>
       <Menu/>
    </HomePageWrapper>
    )
   }

export default HomePage;