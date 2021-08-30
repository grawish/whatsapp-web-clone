import React from 'react';

function SearchBar(props) {
    return (
        <div className='searchBar'>
            <div>
                {/*<i className="fas fa-arrow-left"></i>*/}
                <i className="far fa-search search"/>
                <div>
                    <input placeholder='Search or start a new chat'/>
                    <i className="far fa-times times"/>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;