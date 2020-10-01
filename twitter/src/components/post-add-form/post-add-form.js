import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
        
    
    onChangeValue(e){
        this.setState({
            text : e.target.value
        })
            
        
    }
    
        

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        });
    }

    render() {
        return(
            <form 
                onSubmit={this.onSubmit}
                className='d-flex bottom-panel'>
                <input
                    onChange={this.onChangeValue}
                    type='text'
                    className='form-control new-post-label'
                    placeholder='О чем вы думаете сейчас?'
                    value={this.state.text}
                />
                <button 
                    className='btn btn-outline-secondary'
                    >Добавить</button>
            </form>
        )
    }
    
}
