import React from 'react';

// pages
import Inbox from '../../pages/Inbox';
import Today from '../../pages/Today';
import Upcoming from '../../pages/Upcoming';
// import LeftNav from '../LeftNav/LeftNav';

export default function MainBody(){
    return(
        <>
        <Inbox />
        <Upcoming />
        <Today />

        </>

    );
}
