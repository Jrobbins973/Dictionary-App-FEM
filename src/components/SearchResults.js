import React from 'react'

function SearchResults(props) {

    const {searchResult} = props


    
    
    return (
        <div className='search-results'>
        <h1 className='search-results__word'>
        { searchResult.length === 0 ? <p>Look Up a Word</p> : <p>{searchResult[0].word}</p>}
        </h1>

        <div className='search-results__phonetic'>
        {searchResult.length ===0 ? null : <p>{searchResult[0].phonetic}</p>}
        </div>

        <div className='search-results_firstPOS'>
        {searchResult.length ===0 ? null : <p><i>{searchResult[0].meanings[0].partOfSpeech}_______________________________________________________</i></p>}
        </div>

        <h2 className='search-results__meaning'>Meaning</h2>

        <ul className='search-results__definitions'>
        {searchResult.length === 0 ? null : <li>{searchResult[0].meanings[0].definitions[0].definition}</li>}
        <br></br>
        {searchResult.length === 0 ? null : <li>{searchResult[0].meanings[0].definitions[1].definition}</li>}
        <br></br>
        {searchResult.length === 0 ? null : <li>{searchResult[0].meanings[0].definitions[2].definition}</li>}
        </ul>


        </div>
    )
}

export default SearchResults