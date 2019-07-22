import React from 'react';
import ReactDOM from 'react-dom';



const SearchPanel = () => {
    const searchText = 'Type here to search';
    const serchStyle = {
        fontSize: '20px'
    };

    return (<input 
        placeholder={searchText} 
        className = "foo"
        style={serchStyle}
        />);
};

const AppHeader = () => {
    return (<h1>My todo List</h1>);
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, 
    document.getElementById('root'));