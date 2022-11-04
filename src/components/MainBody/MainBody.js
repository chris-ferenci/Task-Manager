import React from 'react';

import Header from '../Header/Header';
// pages
import Inbox from '../../pages/Inbox';
import Today from '../../pages/Today';
import Upcoming from '../../pages/Upcoming';
import LeftNav from '../LeftNav/LeftNav';
// import LeftNav from '../LeftNav/LeftNav';

export default function MainBody(){
      
    return(
        <>
        <div class="main-container">
        <Inbox />
        <Upcoming />
        <Today />
        </div>
        </>

    );
}
