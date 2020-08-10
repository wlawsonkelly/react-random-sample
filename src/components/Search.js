import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm)
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    useEffect(() => {
       const search = async () => {
        const {data}  =  await axios.get('https://en.wikipedia.org/w/api.php', 
            {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResults(data.query.search);
        };
    
        if (searchTerm) {
            search();
            }
    }, [debouncedTerm]);
    
    const renderedResults = results.map((result) => {
        return (
            <div key = {result.pageid} className = "item">
            <div className = "right floated content">
                <a 
                className = "ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >Go
                </a>
            </div>
                <div className = "contemt">
                    <div className = "header">
                    {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return(
        <div>
            <div className = "ui form">
                 <div className = "field">
                 <label>Enter Search Term</label>
                 <input
                  value={searchTerm}
                  onChange= {event => setSearchTerm(event.target.value)}
                  className = "input" 
                  />
                 </div>
            </div>
            <div className = "ui cell list">
            {renderedResults}
            </div>
        </div>
    );
};

export default Search;