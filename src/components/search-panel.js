import React from 'react';

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

export default SearchPanel;