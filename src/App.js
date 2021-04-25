import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';


const App = ({ robots }) => {
    return (
        <div className='tc'>
            <h1>Robofriends</h1>
            <Searchbox />
            <CardList robots={robots}/>
        </div>
    )
}

export default App;