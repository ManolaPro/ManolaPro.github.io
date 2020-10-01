import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label:'Сейчас я изучаю библиотеку на основе JavaScript -React', important :false, like:false , id:1},
                {label:'I need a breack', important :true , like:false, id:2},
                {label:'I need a work', important :false , like:false, id:3},
            ],
            term: '',
            filter: 'All'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArray = [...before, ...after];

            return {
                data: newArray
            }
                
            

        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId ++
        }

        this.setState(({data}) => {
            const newArray = [...data, newItem]
            return {
                data: newArray
            }
        
        })

        
    }

    onImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];

            const newItem = {...old, important: !old.important};

            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArray
            }
        })
    }

    onLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];

            const newItem = {...old, like: !old.like};

            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArray
            }
        })
    }
    
    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    onSearchChange(term){
        this.setState({term});
    }

    searchFilter(items, filter) {
        if (filter === "like") {
            return items.filter( item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render(){
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.searchFilter(this.searchPost(data, term), filter);

        return(
            <div className='app'>
            <AppHeader
                liked={liked}
                allPosts={allPosts}/>
            <div className='search-panel d-flex'>
                <SearchPanel
                    onSearchChange={this.onSearchChange}/>
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
            </div>
            
            <PostList 
                post={visiblePosts}
                onDelete={this.deleteItem}
                onImportant={this.onImportant}
                onLike={this.onLike}/>
            <PostAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
    
}
