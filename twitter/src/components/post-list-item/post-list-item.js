import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {

    render(){
        const {label, onDelete, onImportant, onLike, important, like} = this.props;
        let classlist = 'app-list-item d-flex justify-content-between';

        if (important) {
            classlist +=' important';
        }
        if (like) {
            classlist +=' like'
        }
        return(
            <div className={classlist}>
                <span 
                    onClick={onLike}
                    className='app-list-item-label'>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                        onClick={onImportant}
                        className='btn-sm btn-star'>
                        <i className='fa fa-star'></i>
                    </button>
                    <button 
                        className='btn-sm btn-trash'
                        onClick={onDelete}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            
            </div>
        )
    }
}
