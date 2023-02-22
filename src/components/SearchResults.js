import React, {useState} from 'react' 
import {AiOutlinePlayCircle} from 'react-icons/ai'

function SearchResults(props) {

    const {searchResult} = props

    const [isPlaying, setIsPlaying] = useState(false);

    function togglePlay() {
    setIsPlaying(!isPlaying);
    }
    
    
    return (
        <div className='search-results'>
        <h1 className='search-results__word'>
        { searchResult.length === 0 ? <p>Look Up a Word</p> : <p>{searchResult[0].word} <div>
        {/* <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <audio src= {searchResult.length === 0 ? null : searchResult[0].phonetics[2].audio}  autoPlay={isPlaying} controls={isPlaying} /> */}
    </div> </p>}
        </h1>
    

        <div className='search-results__phonetic'>
        {searchResult.length ===0 ? null : <p>{searchResult[0].phonetic}</p>}
        </div>

        <div className='search-results_firstPOS'>
        {searchResult.length ===0 ? null : <p><i>{searchResult[0].meanings[0].partOfSpeech}_______________________________________________________</i></p>}
        </div>

        <h2 className='search-results__meaning'>Meaning</h2>

        <ul className='search-results__definitions'>
        {searchResult.length === 0 ? null : <li style={{fontSize: '20px'}}>{searchResult[0].meanings[0].definitions[0].definition}</li>}
        <br></br>
        {searchResult.length === 0 ? null : <li style={{fontSize: '20px'}}>{searchResult[0].meanings[0].definitions[1].definition}</li>}
        <br></br>
        {searchResult.length === 0 ? null : <li style={{fontSize: '20px'}}>{searchResult[0].meanings[0].definitions[2].definition}</li>}
        </ul>

        <div className='search-results__meaning-box'>
        <h2 className='search-results__meaning'>Synonyms:  </h2>
        {searchResult.length === 0 ? null : <p className='synonym' style={{color: "#A445ED", fontWeight: 'bold'}}>{searchResult[0].meanings[0].synonyms[0]}</p>}
        </div>

        <div className='search-results_firstPOS'>
        {searchResult.length ===0 ? null : <p><i>{searchResult[0].meanings[1].partOfSpeech}_______________________________________________________</i></p>}
        </div>

        <ul className='search-results__definitions'>
        {searchResult.length === 0 ? null : <li style={{fontSize: '20px'}}>{searchResult[0].meanings[1].definitions[0].definition}</li>}
        {searchResult.length === 0 ? null : <p style={{fontSize: '18px', color: 'dark-gray'}}>"{searchResult[0].meanings[1].definitions[0].example}"</p>}
        </ul>

        <h4 className='bottom-line'>_______________________________________________________________________</h4>

        <p className='source'>Source: {searchResult.length === 0 ? null : <a href={searchResult[0].sourceUrls[0]} target="_blank">{searchResult[0].sourceUrls[0]}</a>}</p>
        </div>
    )
}

export default SearchResults