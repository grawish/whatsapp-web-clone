import React from 'react';
import TopLeftbar from "./top_leftbar";
import Alert from "./alert";
import SearchBar from "./searchBar";
import Chatbox from "./chatbox";

function Left(props) {
    return (
        <div className='left'>
            <TopLeftbar/>
            <Alert/>
            <SearchBar/>
            <Chatbox/>

        </div>
    );
}

export default Left;