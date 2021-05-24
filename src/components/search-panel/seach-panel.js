import React, {Component} from 'react';

import './search-panel.css'

export default class SearchPanel extends Component  {
    constructor(props) {
        super(props);

    this.onUbdateSearch = this.onUbdateSearch.bind(this);
    }
        
    onUbdateSearch(e) {
        const tern = e.target.value;
        
        this.props.onUpdate(tern); // передается наверх
     }
    
     render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUbdateSearch}
            />
        )
   }
}
