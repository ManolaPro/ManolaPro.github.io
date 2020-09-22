import React from 'react';

import './post-list-item.css';

const PostListItem = () => {
    return(
        <li className='app-list-item d-flex justify-content-between'>
            <span className='app-list-item-label'>
            Сейчас я изучаю библиотеку на основе JavaScript -React
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn-sm btn-star'>
                    <i className='fa fa-star'></i>
                </button>
                <button className='btn-sm btn-trash'>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
            
        </li>
        
    )
}

export default PostListItem;