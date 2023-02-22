import React, {useState} from 'react'
import SearchResults from './SearchResults'

function SearchBar(props) {

    const [query, setQuery] = useState("")
    const [searchResult, setSearchResult] = useState([])

    const handleSearch = query => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then(res => res.json())
        .then(data => setSearchResult(data))
    }

    // console.log(searchResult[0].meanings[0].definitions[1].definition)
    // const renderResult = searchResult.map(result => <SearchResults result={result} />)
   
    // meanings => antonyms, [definitions => definition] partOfSpeech, 

    console.log(searchResult)

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(query);
    };

    return (
        <div>
            <form className='search-form' onSubmit={handleSubmit}>
                <input 
                className='search-input'
                type='search' 
                placeholder = "Lookup word.."
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
                <button className='search-button' type='submit'>Search</button>
            </form>
            <SearchResults searchResult = {searchResult}/>
        </div>
    )
}

export default SearchBar