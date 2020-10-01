import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({post, onDelete, onImportant, onLike}) => {

    const element = post.map((item,) => {
        const {id, ...itemitem} = item;
        return(
            <li key={id}className="list-group-item">
               <PostListItem 
                    {...itemitem}
                    onDelete={() => onDelete(id)}
                    onImportant={() => onImportant(id)}
                    onLike={() => onLike(id)}/> 
            </li>
        )
    })

    return(
        <ul className='app-list list-group'>
            {element}
        </ul>
    )
}

export default PostList;