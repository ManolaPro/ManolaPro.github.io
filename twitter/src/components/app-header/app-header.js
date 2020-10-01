import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return(
        <div className='d-flex app-header'>
            <h1>Alexey Chernyshev</h1>
            <h2>{allPosts} записи, из них {liked} понравилось</h2>
        </div>
    )
}

export default AppHeader;