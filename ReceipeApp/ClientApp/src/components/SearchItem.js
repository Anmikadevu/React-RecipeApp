import React, { Component } from 'react';

export class SearchItem extends Component {
    state = {}
    render() {
        return (
            <form className="search-form">

                <input className="search-bar" type="text" />
                <button className="search-button" type="submit">Search</button>
            </form>

        );
    }
}
